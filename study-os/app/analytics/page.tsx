"use client";

import { useEffect, useState } from "react";
import type { Analytics } from "@/types/types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const res = await fetch("/api/analytics");
        const data = await res.json();
        setAnalytics(data);
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Loading analytics...</p>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Failed to load analytics</p>
      </div>
    );
  }

  const chartData = Object.entries(analytics.totalBySubject).map(([subject, duration]) => ({
    subject,
    duration,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Study Analytics
          </h1>
          <p className="text-gray-600">
            Track your learning progress and study habits
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Study Time */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Total Study Time
              </h3>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⏱️</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {Math.floor(analytics.totalStudyTime / 60)}h{" "}
              {analytics.totalStudyTime % 60}m
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Total minutes: {analytics.totalStudyTime}
            </p>
          </div>

          {/* Total Sessions */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Total Sessions
              </h3>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {analytics.totalSessions}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Study sessions recorded
            </p>
          </div>

          {/* Average Session */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Average Session
              </h3>
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {analytics.averageSessionDuration}m
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Per session average
            </p>
          </div>

          {/* Top Subject */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">
                Top Subject
              </h3>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⭐</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {analytics.topSubject?.name || "N/A"}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {analytics.topSubject?.duration || 0}m total
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bar Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Study Time by Subject
            </h2>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}m`} />
                  <Bar dataKey="duration" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-12">
                No data available
              </p>
            )}
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Subject Distribution
            </h2>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ subject, percent }) =>
                      `${subject} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="duration"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}m`} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-12">
                No data available
              </p>
            )}
          </div>
        </div>

        {/* Subject Breakdown Table */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Subject Breakdown
          </h2>
          {chartData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Subject
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900">
                      Duration
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {chartData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {row.subject}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-700">
                        {row.duration}m
                      </td>
                      <td className="py-3 px-4 text-right text-gray-700">
                        {(
                          (row.duration / analytics.totalStudyTime) *
                          100
                        ).toFixed(1)}
                        %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">
              No data available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
