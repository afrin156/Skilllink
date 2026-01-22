import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { connectToDB } from "@/lib/mongodb"

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null

        const db = await connectToDB()

        const user = await db.collection("users").findOne({
          email: credentials.email,
        })

        if (!user) return null

        return {
          id: user._id.toString(),
          email: user.email,
          role: user.role || "user",
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
})

export { handler as GET, handler as POST }
