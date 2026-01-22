import { NextResponse } from "next/server"
import { connectToDB } from "@/lib/mongodb"

export async function GET() {
  const db = await connectToDB()
  const hrs = await db.collection("hrs").find().toArray()
  return NextResponse.json(hrs)
}
