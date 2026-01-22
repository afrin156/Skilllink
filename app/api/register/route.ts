import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const db = await connectToDB();
    const user = await req.json();
    // Optionally: hash password before storing
    const result = await db.collection("users").insertOne(user);
    return NextResponse.json({ message: "User registered!", id: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
  }
}
