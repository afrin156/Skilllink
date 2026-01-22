"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillRoadmapPage() {
  const [role, setRole] = useState("")
  const [roadmap, setRoadmap] = useState<any[]>([])

  const getRoadmap = async () => {
    const res = await fetch("/api/roadmap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    })

    const data = await res.json()
    setRoadmap(data)
  }

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Skill Roadmap</h1>
      <p className="text-muted-foreground mb-6">
        Enter a role (example: Data Engineer, Frontend Developer)
      </p>

      <div className="flex gap-2 mb-8">
        <Input
          placeholder="Enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <Button onClick={getRoadmap}>Get Roadmap</Button>
      </div>

      <div className="space-y-4">
        {roadmap.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.skill}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {item.resources.map((r: string, i: number) => (
                  <li key={i}>
                    <a href={r} target="_blank" className="text-primary underline">
                      {r}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
