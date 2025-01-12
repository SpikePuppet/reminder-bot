"use client";
import { redirect } from "next/navigation";

export default function RedirectButton() {
  return <button onClick={() => redirect("/home")}>Get Started</button>;
}
