import { NextResponse } from "next/server"
import { connectToDB } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await connectToDB()

    const jobs = await db
      .collection("jobs")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(jobs)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    )
  }
}
