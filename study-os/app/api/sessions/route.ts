type Session = {
  subject: string;
  duration: number;
  date: string;
};

let sessions: Session[] = [];

export async function GET() {
  return Response.json({ sessions });
}

export async function POST(req: Request) {
  const body = (await req.json()) as Session;

  if (!body.subject || !body.duration) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const newSession: Session = {
    subject: body.subject,
    duration: body.duration,
    date: new Date().toISOString(),
  };

  sessions.push(newSession);

  return Response.json(
    { message: "session added!", sessions },
    { status: 200 },
  );
}
