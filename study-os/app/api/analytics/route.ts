import { Session } from "@/types/types";

// In-memory sessions storage
const sessions: Session[] = [];

// Get all sessions and calculate analytics
export async function GET() {
  const res = await fetch("/api/sessions");
  const data = await res.json();
  sessions.length = 0; // clear previous: why? because sessions is a const, we can't reassign it, but we can modify its content. so we clear the array before pushing new data to avoid duplicates.
  sessions.push(...data.sessions);

  // Calculate total study time by subject
  const totalBySubject = sessions.reduce(
    //   What is Record? Record is a utility type in TypeScript that allows you to create an object type with specified keys and values. In this case, Record<string, number> means an object where the keys are strings (representing subjects) and the values are numbers (representing total study time for each subject).
    (acc: Record<string, number>, session) => {
      // Initialize subject if not exists
      if (!acc[session.subject]) {
        acc[session.subject] = 0;
      }
      // Add session duration to the subject total
      acc[session.subject] += session.duration;
      return acc;
    },
    {} as Record<string, number>,
  );

  return new Response(JSON.stringify({ totalBySubject }));
}
