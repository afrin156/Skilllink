"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [studentData, setStudentData] = useState({ email: "", password: "" })
  const [hrData, setHrData] = useState({ email: "", password: "" })
  const [adminData, setAdminData] = useState({ email: "", password: "" })

  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...studentData, role: "student" }),
      })
      const data = await res.json()
      if (res.ok) {
        alert("Student login successful! Redirecting to dashboard...")
      } else {
        alert(data.error)
      }
    } catch (err) {
      console.error(err)
      alert("Login failed")
    }
  }

  const handleHRLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...hrData, role: "hr" }),
      })
      const data = await res.json()
      if (res.ok) {
        alert("HR login successful!")
      } else {
        alert(data.error)
      }
    } catch (err) {
      console.error(err)
      alert("Login failed")
    }
  }

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...adminData, role: "admin" }),
      })
      const data = await res.json()
      if (res.ok) {
        alert("Admin login successful!")
      } else {
        alert(data.error)
      }
    } catch (err) {
      console.error(err)
      alert("Login failed")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground">Login to access your account</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="student" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="student">Student</TabsTrigger>
                  <TabsTrigger value="hr">HR</TabsTrigger>
                  <TabsTrigger value="admin">Admin</TabsTrigger>
                </TabsList>

                <TabsContent value="student">
                  <form onSubmit={handleStudentLogin} className="space-y-4 mt-4">
                    <div>
                      <label htmlFor="student-email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input
                        id="student-email"
                        type="email"
                        value={studentData.email}
                        onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                        required
                        placeholder="student@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="student-password" className="block text-sm font-medium mb-2 text-foreground">
                        Password
                      </label>
                      <Input
                        id="student-password"
                        type="password"
                        value={studentData.password}
                        onChange={(e) => setStudentData({ ...studentData, password: e.target.value })}
                        required
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <Link href="/forgot-password" className="text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full">
                      Login as Student
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Link href="/register" className="text-primary hover:underline">
                        Register
                      </Link>
                    </p>
                  </form>
                </TabsContent>

                <TabsContent value="hr">
                  <form onSubmit={handleHRLogin} className="space-y-4 mt-4">
                    <div>
                      <label htmlFor="hr-email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input
                        id="hr-email"
                        type="email"
                        value={hrData.email}
                        onChange={(e) => setHrData({ ...hrData, email: e.target.value })}
                        required
                        placeholder="hr@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="hr-password" className="block text-sm font-medium mb-2 text-foreground">
                        Password
                      </label>
                      <Input
                        id="hr-password"
                        type="password"
                        value={hrData.password}
                        onChange={(e) => setHrData({ ...hrData, password: e.target.value })}
                        required
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <Link href="/forgot-password" className="text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full">
                      Login as HR
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="admin">
                  <form onSubmit={handleAdminLogin} className="space-y-4 mt-4">
                    <div>
                      <label htmlFor="admin-email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input
                        id="admin-email"
                        type="email"
                        value={adminData.email}
                        onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
                        required
                        placeholder="admin@skilllink.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="admin-password" className="block text-sm font-medium mb-2 text-foreground">
                        Password
                      </label>
                      <Input
                        id="admin-password"
                        type="password"
                        value={adminData.password}
                        onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
                        required
                        placeholder="••••••••"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Login as Admin
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
