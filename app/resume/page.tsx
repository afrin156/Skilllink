"use client"

import { useState } from "react"
import jsPDF from "jspdf"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ResumeData = {
  name: string
  email: string
  phone: string
  summary: string
  skills: string
  education: string
  experience: string
  projects: string
  jobDescription: string
}

export default function ResumePage() {
  const [resume, setResume] = useState<ResumeData>({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
    jobDescription: "",
  })

  /* ================= ATS SCORE ================= */
  const calculateATSScore = (): number => {
    let score = 0
    if (resume.summary.trim()) score += 20
    if (resume.skills.trim()) score += 25
    if (resume.projects.trim()) score += 25
    if (resume.experience.trim()) score += 20
    if (resume.education.trim()) score += 10
    return score
  }

  /* ================= JOB MATCHING (FIXED) ================= */
  const calculateJobMatch = (): number => {
  const skillsText = resume.skills.trim()
  const jobText = resume.jobDescription.trim()

  if (!skillsText || !jobText) return 0

  const jobWords: string[] =
    jobText.toLowerCase().match(/\b[a-z]+\b/g) ?? []

  const skills: string[] = skillsText
    .toLowerCase()
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0)

  if (skills.length === 0) return 0

  const matchedCount = skills.filter((skill: string) =>
    jobWords.includes(skill)
  ).length

  return Math.min(
    Math.round((matchedCount / skills.length) * 100),
    100
  )
}


  /* ================= PDF GENERATOR ================= */
  const generatePDF = () => {
    const doc = new jsPDF()

    doc.setFont("Times", "Normal")

    doc.setFontSize(14)
    doc.text(resume.name.toUpperCase(), 20, 20)

    doc.setFontSize(11)
    doc.text(`Email: ${resume.email}`, 20, 30)
    doc.text(`Phone: ${resume.phone}`, 20, 36)

    doc.setFontSize(12)
    doc.text("PROFESSIONAL SUMMARY", 20, 48)
    doc.setFontSize(11)
    doc.text(resume.summary, 20, 55, { maxWidth: 170 })

    doc.setFontSize(12)
    doc.text("SKILLS", 20, 75)
    doc.setFontSize(11)
    doc.text(resume.skills, 20, 82, { maxWidth: 170 })

    doc.setFontSize(12)
    doc.text("EDUCATION", 20, 102)
    doc.setFontSize(11)
    doc.text(resume.education, 20, 109, { maxWidth: 170 })

    doc.setFontSize(12)
    doc.text("EXPERIENCE", 20, 129)
    doc.setFontSize(11)
    doc.text(resume.experience, 20, 136, { maxWidth: 170 })

    doc.setFontSize(12)
    doc.text("PROJECTS", 20, 156)
    doc.setFontSize(11)
    doc.text(resume.projects, 20, 163, { maxWidth: 170 })

    doc.save("ATS_Resume.pdf")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Professional ATS Resume Builder
              </CardTitle>
              <p className="text-sm text-center text-muted-foreground">
                ATS scoring • Job keyword matching • PDF export
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <Input
                placeholder="Full Name"
                value={resume.name}
                onChange={(e) =>
                  setResume({ ...resume, name: e.target.value })
                }
              />

              <Input
                placeholder="Email"
                value={resume.email}
                onChange={(e) =>
                  setResume({ ...resume, email: e.target.value })
                }
              />

              <Input
                placeholder="Phone"
                value={resume.phone}
                onChange={(e) =>
                  setResume({ ...resume, phone: e.target.value })
                }
              />

              <Textarea
                placeholder="Professional Summary"
                value={resume.summary}
                onChange={(e) =>
                  setResume({ ...resume, summary: e.target.value })
                }
              />

              <Input
                placeholder="Skills (React, Next.js, Python)"
                value={resume.skills}
                onChange={(e) =>
                  setResume({ ...resume, skills: e.target.value })
                }
              />

              <Input
                placeholder="Education (Degree, College, Year)"
                value={resume.education}
                onChange={(e) =>
                  setResume({ ...resume, education: e.target.value })
                }
              />

              <Input
                placeholder="Experience (Fresher / Internship / 1–3 years)"
                value={resume.experience}
                onChange={(e) =>
                  setResume({ ...resume, experience: e.target.value })
                }
              />

              <Textarea
                placeholder="Projects"
                value={resume.projects}
                onChange={(e) =>
                  setResume({ ...resume, projects: e.target.value })
                }
              />

              <Textarea
                placeholder="Paste job description here for keyword matching"
                value={resume.jobDescription}
                onChange={(e) =>
                  setResume({
                    ...resume,
                    jobDescription: e.target.value,
                  })
                }
              />

              <div className="text-sm text-center text-muted-foreground space-y-1">
                <div>
                  ATS Score:{" "}
                  <strong>{calculateATSScore()} / 100</strong>
                </div>
                <div>
                  Job Match Score:{" "}
                  <strong>{calculateJobMatch()}%</strong>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={generatePDF}
                disabled={!resume.skills.trim()}
              >
                Download ATS Resume (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
