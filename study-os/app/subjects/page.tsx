"use client";

import { useEffect, useState } from "react";

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [name, setName] = useState("");

  // Load subjects
  async function fetchSubjects() {
    const res = await fetch("/api/subjects");
    const data = await res.json();
    setSubjects(data.subjects);
  }

  useEffect(() => {
    fetchSubjects();
  }, []);

  // Add subject
  async function addSubject() {
    if (!name.trim()) return;

    const res = await fetch("/api/subjects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();

    setSubjects(data.subjects);
    setName("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Subjects</h1>

      {/* Input */}
      <div style={{ marginBottom: 20 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add subject..."
        />
        <button onClick={addSubject}>Add</button>
      </div>

      {/* List */}
      <ul>
        {subjects.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}