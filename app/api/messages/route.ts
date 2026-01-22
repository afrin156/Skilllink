import { NextResponse } from "next/server"
import { connectToDB } from "@/lib/mongodb"
import Hr from "@/models/Hr"
import Message from "@/models/Message"

export async function POST(req: Request) {
  const { senderId, receiverId, message } = await req.json()

  await connectToDB()

  const hr = await Hr.findOne({
    _id: receiverId,
    verified: true,
    allowMessages: true,
  })

  if (!hr) {
    return NextResponse.json(
      { error: "HR not verified or messaging disabled" },
      { status: 403 }
    )
  }

  await Message.create({
    senderId,
    receiverId,
    message,
    isReferral: true,
  })

  return NextResponse.json({ success: true })
}
