"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Briefcase, Target, TrendingUp, Award, Shield, Zap } from "lucide-react"


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground">
              Connect Your Skills with Career Opportunities
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Build your future with verified jobs, AI-powered resume tools, and personalized learning paths designed
              for college students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/jobs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose SkillLink?</h2>
            <p className="text-muted-foreground text-lg">Everything you need to launch your career</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Verified Jobs Only</CardTitle>
                <CardDescription>
                  All job postings are verified with official company links and validity scores
                </CardDescription>
              </CardHeader>
            </Card>

            {/* ✅ AI Resume Builder with button */}
            <Link href="/resume">
  <Card className="cursor-pointer hover:shadow-lg transition">
    <CardHeader>
      <Zap className="h-10 w-10 text-primary mb-2" />
      <CardTitle>AI Resume Builder</CardTitle>
      <CardDescription>
        Create ATS-friendly resumes with AI suggestions tailored to your target roles
      </CardDescription>
    </CardHeader>
  </Card>
</Link>


            <Link href="/roadmap">
  <Card className="cursor-pointer hover:shadow-lg transition">
    <CardHeader>
      <Target className="h-10 w-10 text-primary mb-2" />
      <CardTitle>Skill Roadmaps</CardTitle>
      <CardDescription>
        Get personalized learning paths based on your career goals and current skills
      </CardDescription>
    </CardHeader>
  </Card>
</Link>


            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Career Score</CardTitle>
                <CardDescription>
                  Track your progress with detailed career scores and improvement tips
                </CardDescription>
              </CardHeader>
            </Card>

           <Link href="/portfolio">
  <Card className="cursor-pointer hover:shadow-lg transition">
    <CardHeader>
      <Briefcase className="h-10 w-10 text-primary mb-2" />
      <CardTitle>Portfolio Generator</CardTitle>
      <CardDescription>
        Auto-generate professional portfolios with preview and hosting options
      </CardDescription>
    </CardHeader>
  </Card>
</Link>



            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Application Tracking</CardTitle>
                <CardDescription>
                  Manage all your job applications and saved opportunities in one place
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Launch Your Career?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
            Join thousands of students who are building successful careers with SkillLink
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
