type Session = {
  subject: string;
  duration: number;
  date: string;
  id?: string;
};

// Mock data with realistic study sessions
let sessions: Session[] = [
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

export async function GET() {
  return Response.json({ sessions });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Session>;

    if (!body.subject || !body.duration) {
      return Response.json(
        { error: "Subject and duration are required" },
        { status: 400 }
      );
    }

    if (typeof body.duration !== "number" || body.duration <= 0) {
      return Response.json(
        { error: "Duration must be a positive number" },
        { status: 400 }
      );
    }

    const newSession: Session = {
      id: String(sessions.length + 1),
      subject: body.subject,
      duration: body.duration,
      date: new Date().toISOString(),
    };

    sessions.push(newSession);

    return Response.json(
      { message: "Session added successfully!", sessions },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: "Failed to add session" },
      { status: 500 }
    );
  }
}
