import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  try {
    const { senderId, receiverId, message } = await req.json()

    if (!senderId || !receiverId || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("SkillLink")

    // 🔒 Check HR permissions
    const hr = await db.collection("hrs").findOne({
      _id: new ObjectId(receiverId),
      verified: true,
      allowMessages: true,
    })

    if (!hr) {
      return NextResponse.json(
        { error: "HR not verified or messaging disabled" },
        { status: 403 }
      )
    }

    await db.collection("messages").insertOne({
      senderId: new ObjectId(senderId),
      receiverId: new ObjectId(receiverId),
      message,
      isReferral: true,
      createdAt: new Date(),
      read: false,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("SEND MESSAGE ERROR 👉", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
