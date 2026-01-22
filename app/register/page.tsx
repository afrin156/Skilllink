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

export default function RegisterPage() {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [hrData, setHrData] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleStudentRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (studentData.password !== studentData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      })
      const data = await res.json()
      if (res.ok) {
        alert("Student registration successful!")
      } else {
        alert(data.error)
      }
    } catch (err) {
      console.error(err)
      alert("Registration failed")
    }
  }

  const handleHRRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (hrData.password !== hrData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hrData),
      })
      const data = await res.json()
      if (res.ok) {
        alert("HR registration successful!")
      } else {
        alert(data.error)
      }
    } catch (err) {
      console.error(err)
      alert("Registration failed")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-foreground">Create Account</h1>
            <p className="text-muted-foreground">Join SkillLink and start your career journey</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="student" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="student">Student</TabsTrigger>
                  <TabsTrigger value="hr">HR / Recruiter</TabsTrigger>
                </TabsList>

                <TabsContent value="student">
                  <form onSubmit={handleStudentRegister} className="space-y-4 mt-4">
                    <div>
                      <label htmlFor="student-name" className="block text-sm font-medium mb-2 text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="student-name"
                        value={studentData.name}
                        onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                      />
                    </div>

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

                    <div>
                      <label
                        htmlFor="student-confirm-password"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        Confirm Password
                      </label>
                      <Input
                        id="student-confirm-password"
                        type="password"
                        value={studentData.confirmPassword}
                        onChange={(e) => setStudentData({ ...studentData, confirmPassword: e.target.value })}
                        required
                        placeholder="••••••••"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Register as Student
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary hover:underline">
                        Login
                      </Link>
                    </p>
                  </form>
                </TabsContent>

                <TabsContent value="hr">
                  <form onSubmit={handleHRRegister} className="space-y-4 mt-4">
                    <div>
                      <label htmlFor="hr-name" className="block text-sm font-medium mb-2 text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="hr-name"
                        value={hrData.name}
                        onChange={(e) => setHrData({ ...hrData, name: e.target.value })}
                        required
                        placeholder="Jane Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="hr-company" className="block text-sm font-medium mb-2 text-foreground">
                        Company Name
                      </label>
                      <Input
                        id="hr-company"
                        value={hrData.company}
                        onChange={(e) => setHrData({ ...hrData, company: e.target.value })}
                        required
                        placeholder="Tech Corp Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="hr-email" className="block text-sm font-medium mb-2 text-foreground">
                        Work Email
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

                    <div>
                      <label htmlFor="hr-confirm-password" className="block text-sm font-medium mb-2 text-foreground">
                        Confirm Password
                      </label>
                      <Input
                        id="hr-confirm-password"
                        type="password"
                        value={hrData.confirmPassword}
                        onChange={(e) => setHrData({ ...hrData, confirmPassword: e.target.value })}
                        required
                        placeholder="••••••••"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Register as HR
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary hover:underline">
                        Login
                      </Link>
                    </p>
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
