"use client";

import { useEffect, useState } from "react";

const page = () => {
    const [session, setsessions] = useState([])
    const [subject, setsubject] = useState("");
    const [duration, setduration] = useState(0);

    useEffect(() => {
        const fetchSessions = async () => {
            const res = await fetch("/api/sessions");
            const data = await res.json();
            setsessions(data.sessions);
        }

        fetchSessions();
    }, []);

    async function addSubject() {
        if (!subject.trim()) return;

        
    } 

  return (
    <div>page</div>
  )
}

export default page