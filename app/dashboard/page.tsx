import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Briefcase, Target, TrendingUp, FileText, Bell, Award } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Student!</h1>
            <p className="text-muted-foreground">Here's your career progress overview</p>
          </div>

          {/* Career Score Section */}
          <div className="grid gap-6 md:grid-cols-4 mb-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Career Score
                </CardTitle>
                <CardDescription>Your overall career readiness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-4">
                  <div className="text-5xl font-bold text-primary">78</div>
                  <div className="text-sm text-muted-foreground mb-2">/100</div>
                </div>
                <Progress value={78} className="mt-4" />
                <Link href="/dashboard/career-score">
                  <Button variant="link" className="px-0 mt-2">
                    View Details →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Applied Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">12</div>
                <p className="text-sm text-muted-foreground mt-1">3 pending responses</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Skills Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">65%</div>
                <p className="text-sm text-muted-foreground mt-1">On track for goals</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="text-sm font-medium text-foreground">New job match found</p>
                      <p className="text-xs text-muted-foreground">Software Engineer at TechCorp - 2h ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-muted mt-2" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Application viewed</p>
                      <p className="text-xs text-muted-foreground">DataSoft Solutions - 5h ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-muted mt-2" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Skill milestone achieved</p>
                      <p className="text-xs text-muted-foreground">Completed React Advanced - 1d ago</p>
                    </div>
                  </div>
                </div>
                <Button variant="link" className="px-0 mt-4">
                  View all notifications →
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Skill Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">React Development</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">UI/UX Design</span>
                      <span className="text-sm text-muted-foreground">70%</span>
                    </div>
                    <Progress value={70} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Data Structures</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                </div>
                <Link href="/dashboard/skill-roadmap">
                  <Button variant="link" className="px-0 mt-4">
                    View skill roadmap →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Navigate to your most-used features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <Link href="/jobs">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Browse Jobs
                  </Button>
                </Link>
                <Link href="/dashboard/profile">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </Link>
                <Link href="/dashboard/resume">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Build Resume
                  </Button>
                </Link>
                <Link href="/dashboard/portfolio">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Award className="h-4 w-4 mr-2" />
                    Create Portfolio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
