"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
  MapPin,
  Briefcase,
  Clock,
  Shield,
  ExternalLink,
} from "lucide-react"

type Job = {
  _id: string
  title: string
  company: string
  location: string
  type: string
  experience: string
  salary: string
  posted: string
  verified: boolean
  description?: string
  companyWebsite?: string
  tags?: string[]
}

export default function JobDetailsPage() {
  const { id } = useParams()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`)
        if (!res.ok) throw new Error("Job not found")
        const data = await res.json()
        setJob(data)
      } catch (error) {
        console.error(error)
        setJob(null)
      } finally {
        setLoading(false)
      }
    }

    fetchJob()
  }, [id])

  if (loading) return <p className="p-10 text-center">Loading...</p>
  if (!job) return <p className="p-10 text-center">Job not found</p>

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Link href="/jobs">
            <Button variant="ghost" className="mb-4">
              ← Back to Jobs
            </Button>
          </Link>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                  <p className="text-muted-foreground">{job.company}</p>
                  <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </span>
                  </div>
                </div>

                {job.verified ? (
                  <Badge className="bg-green-600">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                ) : (
                  <Badge variant="secondary">Unverified</Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Salary</p>
                  <p className="font-medium">{job.salary}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">{job.experience}</p>
                </div>
              </div>

              {job.description && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Description</p>
                  <p>{job.description}</p>
                </div>
              )}

              {job.tags && (
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {job.companyWebsite ? (
                <Button asChild variant="outline">
                  <a
                    href={job.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Company Website
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">No company website available</p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
