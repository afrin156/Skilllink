// app/api/conversations/route.ts
import { NextResponse } from "next/server"
import { connectToDB } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await connectToDB()

    const conversations = await db
      .collection("conversations")
      .find({})
      .toArray()

    return NextResponse.json(conversations)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to fetch conversations" },
      { status: 500 }
    )
  }
}
