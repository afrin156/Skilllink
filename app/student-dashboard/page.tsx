"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Briefcase,
  Target,
  Bell,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const careerScore = 78
  const appliedJobs = 12
  const savedJobs = 8
  const profileCompletion = 85

  const skills = [
    { name: "React", progress: 85 },
    { name: "Node.js", progress: 70 },
    { name: "Python", progress: 65 },
    { name: "Communication", progress: 75 },
  ]

  const notifications = [
    { id: 1, type: "success", message: "Your application to TechCorp was viewed", time: "2 hours ago" },
    { id: 2, type: "info", message: "New skill recommendation: TypeScript", time: "5 hours ago" },
    { id: 3, type: "warning", message: "Complete your profile to increase visibility", time: "1 day ago" },
  ]

  const recentApplications = [
    { company: "TechCorp", role: "Frontend Developer", status: "Under Review", date: "2 days ago" },
    { company: "DataSoft", role: "Full Stack Developer", status: "Interview Scheduled", date: "5 days ago" },
    { company: "CloudWorks", role: "React Developer", status: "Applied", date: "1 week ago" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Student Dashboard</h1>
            <p className="text-muted-foreground">Track your career progress and manage applications</p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Career Score</CardTitle>
                  <Award className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">{careerScore}/100</div>
                <div className="flex items-center gap-1 text-sm text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span>+5 this week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Applied Jobs</CardTitle>
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">{appliedJobs}</div>
                <p className="text-sm text-muted-foreground">3 awaiting response</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Saved Jobs</CardTitle>
                  <Target className="h-5 w-5 text-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">{savedJobs}</div>
                <p className="text-sm text-muted-foreground">Ready to apply</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Profile Status</CardTitle>
                  <FileText className="h-5 w-5 text-chart-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">{profileCompletion}%</div>
                <Progress value={profileCompletion} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Skill Progress */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Skill Progress</CardTitle>
                      <CardDescription>Your current skill levels and improvement areas</CardDescription>
                    </div>
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                  <Link href="/ai-mentor">
                    <Button variant="outline" className="w-full bg-transparent">
                      Get AI Learning Recommendations
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Recent Applications */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Applications</CardTitle>
                      <CardDescription>Track your job application status</CardDescription>
                    </div>
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplications.map((app, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{app.company}</h4>
                          <p className="text-sm text-muted-foreground">{app.role}</p>
                        </div>
                        <div className="text-right">
                          <div
                            className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                              app.status === "Interview Scheduled"
                                ? "bg-primary/10 text-primary"
                                : app.status === "Under Review"
                                  ? "bg-accent/10 text-accent"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {app.status === "Interview Scheduled" ? (
                              <CheckCircle2 className="h-3 w-3" />
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                            {app.status}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/jobs">
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      View All Applications
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Notifications */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Recent updates and alerts</CardDescription>
                    </div>
                    <Bell className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notif) => (
                      <div key={notif.id} className="p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-1.5 rounded-full ${
                              notif.type === "success"
                                ? "bg-primary/10"
                                : notif.type === "info"
                                  ? "bg-accent/10"
                                  : "bg-chart-4/10"
                            }`}
                          >
                            {notif.type === "success" ? (
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            ) : notif.type === "info" ? (
                              <Bell className="h-4 w-4 text-accent" />
                            ) : (
                              <Clock className="h-4 w-4 text-chart-4" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-foreground leading-relaxed">{notif.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/jobs">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Browse Jobs
                    </Button>
                  </Link>
                  <Link href="/ai-mentor">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Target className="h-4 w-4 mr-2" />
                      AI Career Guidance
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Build Resume
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
