let subjects: string[] = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
];

export async function GET() {
  return Response.json({ subjects });
}

export async function POST(req: Request) {
  const body = await req?.json;

  if (!body?.name) {
    return Response.json({ error: "Name error!" }, { status: 400 });
  }

  subjects.push(body.name);

  return Response.json({
    message: "subject added!",
    subjects,
  });
}
