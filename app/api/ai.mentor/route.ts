import { NextRequest, NextResponse } from "next/server"

let students = [
  { id: 1, name: "Afrin", email: "afrin@example.com", course: "BSc IT" }
]

export async function GET(req: NextRequest) {
  return NextResponse.json(students)
}

export async function POST(req: NextRequest) {
  const student = await req.json()
  students.push({ ...student, id: students.length + 1 })
  return NextResponse.json(student)
}
