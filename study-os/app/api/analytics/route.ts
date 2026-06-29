import { Session } from "@/types/types";

type Analytics = {
  totalBySubject: Record<string, number>;
  totalStudyTime: number;
  averageSessionDuration: number;
  totalSessions: number;
  topSubject: { name: string; duration: number } | null;
};

// Mock sessions data (same as in /api/sessions)
const mockSessions: Session[] = [
  {
    id: "1",
    subject: "Mathematics",
    duration: 120,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    subject: "Physics",
    duration: 90,
    date: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    subject: "Chemistry",
    duration: 75,
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    subject: "Mathematics",
    duration: 60,
    date: new Date(Date.now() - 0.5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "5",
    subject: "Computer Science",
    duration: 150,
    date: new Date(Date.now() - 0.25 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "6",
    subject: "Biology",
    duration: 100,
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "7",
    subject: "History",
    duration: 45,
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "8",
    subject: "Programming",
    duration: 180,
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Get all sessions and calculate comprehensive analytics
export async function GET() {
  try {
    const sessions: Session[] = mockSessions;

    if (sessions.length === 0) {
      return Response.json(
        {
          totalBySubject: {},
          totalStudyTime: 0,
          averageSessionDuration: 0,
          totalSessions: 0,
          topSubject: null,
        } as Analytics,
        { status: 200 }
      );
    }

    // Calculate total study time by subject
    const totalBySubject = sessions.reduce(
      (acc: Record<string, number>, session) => {
        if (!acc[session.subject]) {
          acc[session.subject] = 0;
        }
        acc[session.subject] += session.duration;
        return acc;
      },
      {} as Record<string, number>
    );

    // Calculate total study time
    const totalStudyTime = sessions.reduce(
      (acc, session) => acc + session.duration,
      0
    );

    // Calculate average session duration
    const averageSessionDuration = Math.round(
      totalStudyTime / sessions.length
    );

    // Find top subject
    let topSubject: { name: string; duration: number } | null = null;
    let maxDuration = 0;

    for (const [subject, duration] of Object.entries(totalBySubject)) {
      if (duration > maxDuration) {
        maxDuration = duration;
        topSubject = { name: subject, duration };
      }
    }

    const analytics: Analytics = {
      totalBySubject,
      totalStudyTime,
      averageSessionDuration,
      totalSessions: sessions.length,
      topSubject,
    };

    return Response.json(analytics, { status: 200 });
  } catch (error) {
    console.error("Analytics error:", error);
    return Response.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
