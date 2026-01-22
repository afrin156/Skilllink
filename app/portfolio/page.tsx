"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PortfolioPage() {
  const [data, setData] = useState({
    name: "",
    role: "",
    bio: "",
    skills: "",
    projects: "",
    github: "",
    linkedin: "",
  })

  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Portfolio Generator</h1>

          <Card>
            <CardContent className="space-y-4 pt-6">
              <Input placeholder="Full Name" onChange={(e) => setData({ ...data, name: e.target.value })} />
              <Input placeholder="Role (e.g. Frontend Developer)" onChange={(e) => setData({ ...data, role: e.target.value })} />
              <Textarea placeholder="Short Bio" onChange={(e) => setData({ ...data, bio: e.target.value })} />
              <Textarea placeholder="Skills (comma separated)" onChange={(e) => setData({ ...data, skills: e.target.value })} />
              <Textarea placeholder="Projects (title + description)" onChange={(e) => setData({ ...data, projects: e.target.value })} />
              <Input placeholder="GitHub URL" onChange={(e) => setData({ ...data, github: e.target.value })} />
              <Input placeholder="LinkedIn URL" onChange={(e) => setData({ ...data, linkedin: e.target.value })} />

              <Button className="w-full" onClick={() => setShowPreview(true)}>
                Generate Portfolio
              </Button>
            </CardContent>
          </Card>

          {showPreview && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Portfolio Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <h2 className="text-xl font-bold">{data.name}</h2>
                <p className="text-muted-foreground">{data.role}</p>
                <p>{data.bio}</p>
                <p><strong>Skills:</strong> {data.skills}</p>
                <p><strong>Projects:</strong> {data.projects}</p>
                <p>
                  <a href={data.github} className="text-primary underline">GitHub</a> |{" "}
                  <a href={data.linkedin} className="text-primary underline">LinkedIn</a>
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
