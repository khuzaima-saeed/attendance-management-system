'use client'
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [em, setem] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    setem(storedName);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <main className="p-8">
      <div>This is Dashboard: {em} Currently stored in local storage</div>
    </main>
  );
}