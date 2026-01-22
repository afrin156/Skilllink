// Example for Students
import { NextRequest, NextResponse } from "next/server"
import { connectToDB } from "@/lib/mongodb"

export async function GET(req: NextRequest) {
  const db = await connectToDB()
  const students = await db.collection("students").find({}).toArray()
  return NextResponse.json(students)
}

export async function POST(req: NextRequest) {
  const student = await req.json()
  const db = await connectToDB()
  const result = await db.collection("students").insertOne(student)
  return NextResponse.json({ ...student, id: result.insertedId })
}
