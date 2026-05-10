"use client";

import { useEffect, useState } from "react";

type Session = {
  subject: string;
  duration: number;
  date: string;
};

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    async function loadSessions() {
      const res = await fetch("/api/sessions");
      const data = await res.json();

      setSessions(data.sessions || []);
    }

    loadSessions();
  }, []);

  // Add session
  async function addSession() {
    if (!subject || !duration) return;

    const res = await fetch("/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        duration: Number(duration),
      }),
    });

    const data = await res.json();

    setSessions(data.sessions);
    setSubject("");
    setDuration("");
  }

  // Total study time
  const totalMinutes = sessions.reduce(
    (acc, session) => acc + session.duration,
    0
  );

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Study Sessions
      </h1>

      {/* Form */}
      <div className="bg-white shadow rounded-2xl p-6 mb-6 space-y-4 border">
        <div>
          <label className="block mb-1 font-medium">
            Subject
          </label>

          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Math"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Duration (minutes)
          </label>

          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="90"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <button
          onClick={addSession}
          className="w-full bg-black text-white rounded-xl p-3 font-medium hover:opacity-90"
        >
          Save Session
        </button>
      </div>

      {/* Summary */}
      <div className="bg-white shadow rounded-2xl p-6 mb-6 border">
        <h2 className="text-xl font-semibold mb-2">
          Total Study Time
        </h2>

        <p className="text-3xl font-bold">
          {totalMinutes} min
        </p>
      </div>

      {/* Sessions List */}
      <div className="bg-white shadow rounded-2xl p-6 border">
        <h2 className="text-xl font-semibold mb-4">
          Recent Sessions
        </h2>

        {sessions.length === 0 ? (
          <p className="text-gray-500">
            No sessions yet.
          </p>
        ) : (
          <div className="space-y-3">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">
                    {session.subject}
                  </p>

                  <p className="text-sm text-gray-500">
                    {new Date(session.date).toLocaleString()}
                  </p>
                </div>

                <p className="font-bold">
                  {session.duration} min
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}