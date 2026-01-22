"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: number
  type: "user" | "ai"
  content: string
  timestamp: Date
}

export default function AIMentorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your AI Career Mentor. I can help you with career guidance, skill development, resume tips, and interview preparation. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const sampleQuestions = [
    "How do I improve my resume?",
    "What skills should I learn for web development?",
    "Help me prepare for technical interviews",
    "Which career path is right for me?",
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }
    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "ai",
        content: getAIResponse(inputMessage),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)

    setInputMessage("")
  }

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("resume")) {
      return "Great question! Here are some key tips for improving your resume:\n\n1. Use action verbs and quantify your achievements\n2. Tailor your resume to each job application\n3. Keep it concise (1-2 pages max)\n4. Include relevant technical skills\n5. Add links to your projects and portfolio\n\nWould you like specific help with any section?"
    } else if (lowerQuestion.includes("skill") || lowerQuestion.includes("learn")) {
      return "For web development, I recommend focusing on:\n\n1. Frontend: React, TypeScript, Tailwind CSS\n2. Backend: Node.js, Express, Database (PostgreSQL/MongoDB)\n3. Tools: Git, Docker, Testing frameworks\n4. Soft Skills: Communication, Problem-solving\n\nStart with the fundamentals and build projects to apply what you learn. What area interests you most?"
    } else if (lowerQuestion.includes("interview")) {
      return "Interview preparation tips:\n\n1. Practice coding problems on LeetCode/HackerRank\n2. Study system design basics\n3. Prepare your project explanations using STAR method\n4. Research the company and prepare questions\n5. Practice behavioral questions\n\nWould you like resources for any specific area?"
    } else if (lowerQuestion.includes("career") || lowerQuestion.includes("path")) {
      return "Choosing a career path depends on your interests and strengths. Consider:\n\n1. What type of problems do you enjoy solving?\n2. Do you prefer frontend, backend, or full-stack?\n3. Are you interested in data, mobile, or web?\n4. What kind of work environment suits you?\n\nTell me more about your interests and I can provide personalized guidance!"
    } else {
      return "That's an interesting question! I can help you with:\n\n• Career planning and guidance\n• Skill development roadmaps\n• Resume and portfolio building\n• Interview preparation\n• Job search strategies\n\nCould you provide more details about what you'd like to know?"
    }
  }

  const handleSampleQuestion = (question: string) => {
    setInputMessage(question)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl h-[calc(100vh-16rem)]">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary">
                <Bot className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">AI Career Mentor</h1>
            </div>
            <p className="text-muted-foreground">Get personalized career guidance powered by AI</p>
          </div>

          <Card className="h-[calc(100vh-20rem)] flex flex-col">
            {/* Chat Messages */}
            <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex gap-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        message.type === "user" ? "bg-primary" : "bg-accent"
                      }`}
                    >
                      {message.type === "user" ? (
                        <User className="h-4 w-4 text-primary-foreground" />
                      ) : (
                        <Sparkles className="h-4 w-4 text-accent-foreground" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground border"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Sample Questions */}
              {messages.length === 1 && (
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3 text-center">Or try one of these questions:</p>
                  <div className="grid gap-2 md:grid-cols-2">
                    {sampleQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-left justify-start h-auto py-3 px-4 bg-transparent"
                        onClick={() => handleSampleQuestion(question)}
                      >
                        <span className="text-sm leading-relaxed">{question}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about your career..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
