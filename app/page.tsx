"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
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

