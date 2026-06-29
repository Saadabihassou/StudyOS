let subjects: string[] = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "History",
  "Literature",
  "Programming",
];

export async function GET() {
  return Response.json({ subjects });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.name || typeof body.name !== "string" || !body.name.trim()) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    const trimmedName = body.name.trim();

    // Check for duplicates
    if (subjects.includes(trimmedName)) {
      return Response.json(
        { error: "Subject already exists" },
        { status: 400 }
      );
    }

    subjects.push(trimmedName);

    return Response.json(
      {
        message: "Subject added successfully!",
        subjects,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: "Failed to add subject" },
      { status: 500 }
    );
  }
}
