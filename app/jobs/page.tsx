"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Search,
  MapPin,
  Briefcase,
  Building2,
  Clock,
  Shield,
} from "lucide-react"

interface Job {
  _id: string
  title: string
  company: string
  location: string
  type: string
  experience: string
  salary: string
  posted: string
  verified: boolean
  tags?: string[]
  hrId?: string
}

export default function JobsPage() {
  const { data: session } = useSession()

  const [searchTerm, setSearchTerm] = useState("")
  const [jobListings, setJobListings] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch jobs")
        return res.json()
      })
      .then((data: Job[]) => setJobListings(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Job Listings</h1>
            <p className="text-muted-foreground">
              Verified opportunities from trusted companies
            </p>
          </div>

          {/* Search */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </CardContent>
          </Card>

          {loading && <p>Loading jobs...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card
                key={job._id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-xl">
                          {job.title}
                        </CardTitle>
                        {job.verified && (
                          <Badge variant="secondary" className="gap-1">
                            <Shield className="h-3 w-3" />
                            Verified
                          </Badge>
                        )}
                      </div>

                      <CardDescription className="flex flex-wrap items-center gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                      </CardDescription>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/jobs/${job._id}`}>
                        <Button variant="outline">View Details</Button>
                      </Link>

                      {/* MESSAGE HR */}
                      <Button
                        onClick={async () => {
                          if (!session?.user?.id) {
                            alert("Please login first")
                            return
                          }

                          if (!job.hrId) {
                            alert("HR not available for this job")
                            return
                          }

                          const res = await fetch("/api/messages", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              senderId: session.user.id,
                              receiverId: job.hrId,
                              message:
                                "Hi, I am interested in this job",
                            }),
                          })

                          if (res.ok)
                            alert("Message sent to HR ✅")
                          else alert("Failed to send message ❌")
                        }}
                      >
                        Message HR
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </span>
                    <span>Experience: {job.experience}</span>
                    <span>Salary: {job.salary}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Posted {job.posted}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags?.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {!loading && filteredJobs.length === 0 && (
              <p className="text-muted-foreground text-center">
                No jobs found
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
