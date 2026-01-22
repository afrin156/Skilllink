import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About SkillLink</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empowering college students to bridge the gap between education and employment through technology-driven
              career solutions.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    To provide college students with a comprehensive platform that connects their skills with genuine
                    career opportunities while offering personalized growth tools and verified job listings.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    To become the most trusted career platform for students across India, where every graduate finds
                    their perfect career match through intelligent tools and authentic opportunities.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">What We Offer</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Verified Job Listings</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Every job posting on SkillLink is verified with official company links and assigned a validity
                    score. We protect students from fake job postings and scams.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Career Tools</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Our platform features AI-driven resume builders, portfolio generators, and skill assessments that
                    help students present themselves professionally to employers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personalized Learning Paths</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Get customized skill roadmaps based on your career goals, current competencies, and market demands.
                    Track your progress with detailed career scores.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Dashboard</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Manage your applications, track skill development, monitor career scores, and access all platform
                    features from a single, intuitive dashboard.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Core Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Student-First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every decision we make prioritizes student success and career growth
                </p>
              </div>

              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Authenticity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We verify every opportunity to ensure genuine, trustworthy connections
                </p>
              </div>

              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Community</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building a supportive network where students and companies grow together
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
