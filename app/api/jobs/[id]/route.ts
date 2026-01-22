import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import { connectToDB } from "@/lib/mongodb"

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params

    const db = await connectToDB()


    const job = await db
      .collection("jobs")
      .findOne({ _id: new ObjectId(id) })

    if (!job) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(job)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch job" },
      { status: 500 }
    )
  }
}
