// app/api/admin/verify-hr/route.ts
import { NextResponse } from "next/server"
import { connectToDB } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function PATCH(req: Request) {
  try {
    const body = await req.json()
    const { hrId, adminEmail } = body

    if (adminEmail !== process.env.ADMIN_EMAIL) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const db = await connectToDB()

    const result = await db.collection("hrs").updateOne(
      { _id: new ObjectId(hrId) },
      { $set: { verified: true } }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "HR not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "HR verified successfully",
    })
  } catch (error) {
    console.error("VERIFY HR ERROR 👉", error)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
