import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const db = await connectToDB();
    const { email, password } = await req.json();
    const user = await db.collection("users").findOne({ email, password }); // simple check
    if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    return NextResponse.json({ message: "Login successful", user });
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
