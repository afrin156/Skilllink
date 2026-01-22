// app/api/conversations/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("SkillLink");

    const conversations = await db
      .collection("conversations")
      .find({})
      .toArray();

    return NextResponse.json(conversations);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch conversations" },
      { status: 500 }
    );
  }
}
