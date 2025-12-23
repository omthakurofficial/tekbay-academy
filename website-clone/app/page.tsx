"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, CheckCircle, Linkedin, Sparkles, TrendingUp, Target, Award, Brain, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowThankYou(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <div className="bg-gradient-tekbay text-white py-3 text-center">
        <p className="text-sm font-semibold">Limited Seats Only - Book Your Seat Quickly!</p>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
        <Button size="lg" className="shadow-lg bg-success hover:bg-success/90 text-success-foreground">
          Claim Your Spot
        </Button>
      </div>

      {/* Navigation */}
      <nav className="border-b border-border bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Image src="/tekbay-logo.png" alt="TekBay Academy" width={200} height={60} className="h-12 w-auto" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-blue-teal text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-2">
              Free Webinar - Live Event
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              AI Careers in 2026 - Unlock Your Future in AI
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
              In 2026, AI is expected to dominate industries, create new job roles, and unlock exciting career
              opportunities. Discover how you can prepare for this AI-driven future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">29th December 2025</span>
              </div>
              <div className="hidden sm:block text-white/60">|</div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-medium">7:00-8:00 PM IST</span>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-success hover:bg-success/90 text-success-foreground shadow-lg hover:shadow-xl transition-all"
              >
                Reserve Your Free Seat
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-vibrant py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-chart-1/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-chart-2/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold text-primary">What You'll Learn</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-primary">
              Key Discussions in the Webinar
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Get complete insights into the upcoming AI job trends, skills you need, and how to make most of AI's
              explosive growth in 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 space-y-3 bg-white hover:shadow-lg hover:-translate-y-1 transition-all border-border">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="text-xl font-semibold">AI Job Market in 2026</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                What roles will be in demand, and which skills will set you apart?
              </p>
            </Card>

            <Card className="p-6 space-y-3 bg-white hover:shadow-lg hover:-translate-y-1 transition-all border-border">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold">High Demand Skills in 2026</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Key skills that will be highly valued in the AI job market.
              </p>
            </Card>

            <Card className="p-6 space-y-3 bg-white hover:shadow-lg hover:-translate-y-1 transition-all border-border">
              <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold">How to Prepare for AI Roles</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                How can you get ready for the AI-driven job market?
              </p>
            </Card>

            <Card className="p-6 space-y-3 bg-white hover:shadow-lg hover:-translate-y-1 transition-all border-border">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">TekBay Academy's AI Roadmap</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                How our courses and certifications will help you thrive in AI.
              </p>
            </Card>

            <Card className="p-6 space-y-3 bg-white hover:shadow-lg hover:-translate-y-1 transition-all border-border">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold">AWS Certification for AI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Why AWS certification opens doors to top AI roles globally.
              </p>
            </Card>

            <Card className="p-6 space-y-3 bg-white hover:shadow-lg hover:-translate-y-1 transition-all border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Live Q&A</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interactive session with our experts to answer all your questions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-speakers-enhanced py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Users className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold text-primary">Expert Speakers</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-primary">Meet Your Speakers</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Learn From Industry Experts Leading the AI Revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 space-y-6 bg-white border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="relative w-32 h-32 mx-auto">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-border shadow-md">
                  <Image
                    src="/images/img-6983.webp"
                    alt="Yukti Basnet"
                    width={128}
                    height={128}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Yukti Basnet</h3>
                <p className="text-muted-foreground font-medium">Expert in AI/ML with 6+ Years of Experience</p>
                <p className="text-sm text-muted-foreground">VP of Product and Engineering, TekBay Digital Solutions</p>
              </div>
              <a
                href="https://www.linkedin.com/in/yukti-basnet-56168a127/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-chart-1 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </a>
            </Card>

            <Card className="p-8 space-y-6 bg-white border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="relative w-32 h-32 mx-auto">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-border shadow-md">
                  <Image
                    src="/images/img-20251015-wa0004.webp"
                    alt="Sahil Oberoi"
                    width={128}
                    height={128}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Sahil Oberoi</h3>
                <p className="text-muted-foreground font-medium">AI Industry Leader with 8+ Years of Experience</p>
                <p className="text-sm text-muted-foreground">Managing Director, TekBay Academy</p>
              </div>
              <a
                href="https://www.linkedin.com/in/sahil-oberoi-a0476531b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-chart-2 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-testimonials-enhanced py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-pattern opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-success/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Award className="h-5 w-5 text-success" />
              <span className="text-sm font-semibold text-primary">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-primary">Hear From Our Students</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 space-y-4 bg-white border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-5xl text-warmth">"</div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thanks to TekBay's apprenticeship program, I landed my first job in cloud engineering. The AWS
                certification really helped me to take my career to the next level!
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-1/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-chart-1" />
                </div>
                <div>
                  <p className="font-semibold">Saroj Mandal</p>
                  <p className="text-sm text-muted-foreground">ML Engineer</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-4 bg-white border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-5xl text-warmth">"</div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learning with TekBay Academy completely transformed my career. Their hands-on training and guidance gave
                me the essential skills to land a high-paying AI Engineer role.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <p className="font-semibold">Sweta Sharma</p>
                  <p className="text-sm text-muted-foreground">ML Engineer</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-register-enhanced py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-destructive/10 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
                <Clock className="h-5 w-5 text-destructive" />
                <span className="text-sm font-semibold text-destructive">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-balance text-primary">
                Limited Seats ONLY! Secure Your Spot!
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Join hundreds of students preparing for the AI driven future
              </p>
            </div>

            <Card className="p-8 bg-white border-border shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input id="fullName" placeholder="Enter your full name" required className="border-border" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-sm font-medium">
                    Mobile Number (Optional)
                  </label>
                  <Input id="mobile" type="tel" placeholder="Enter your mobile number" className="border-border" />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg bg-success hover:bg-success/90 text-success-foreground shadow-md hover:shadow-lg transition-all"
                >
                  Reserve My Seat
                </Button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  By registering, you agree to receive updates about this webinar and future events.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-footer text-white/90">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm">© 2025 TekBay Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <Card className="max-w-md w-full p-8 text-center space-y-4 bg-card animate-scale-up">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto animate-pulse-once">
              <CheckCircle className="h-10 w-10 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Thank You for Reserving Your Seat!</h3>
            <p className="text-muted-foreground leading-relaxed">
              We will contact you with the details via email shortly.
            </p>
            <Button
              onClick={() => setShowThankYou(false)}
              className="bg-success hover:bg-success/90 text-success-foreground"
            >
              Close
            </Button>
          </Card>
        </div>
      )}
    </div>
  )
}
