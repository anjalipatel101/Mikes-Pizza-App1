"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import "./../app/app.css";
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";
// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
// import "@aws-amplify/ui-react/styles.css";

// Amplify.configure(outputs);
// const client = generateClient<Schema>();

export default function App() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null;
}

export function HomePage() {
  const [todos, setTodos] = useState<Array<{ id: string; content: string | null }>>([]);

  function createTodo() {
    const content = window.prompt("Todo content");
    if (content) {
      setTodos([...todos, { id: Date.now().toString(), content }]);
    }
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mike's Cheesy Pizzas</h1>
      <p className="text-lg mb-4">Discover our delicious menu and place your order today!</p>
    </div>
  );
}

