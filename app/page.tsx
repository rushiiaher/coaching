"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Trophy,
  Star,
  Play,
  ArrowRight,
  Clock,
  Target,
  Award,
  Microscope,
  Calculator,
  Medal,
  CheckCircle,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SlidingCarousel } from "@/components/ui/sliding-carousel"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Live Counter Component
function LiveCounter() {
  const [count, setCount] = useState(2847)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return count.toLocaleString()
}

// Countdown Timer Component
function CountdownTimer() {
  const [time, setTime] = useState({ hours: 2, minutes: 45, seconds: 30 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          // Reset timer
          hours = 2
          minutes = 45
          seconds = 30
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-1 font-mono text-lg font-bold text-orange-500">
      <span className="bg-slate-800 text-white px-2 py-1 rounded">{time.hours.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span className="bg-slate-800 text-white px-2 py-1 rounded">{time.minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span className="bg-slate-800 text-white px-2 py-1 rounded">{time.seconds.toString().padStart(2, "0")}</span>
    </div>
  )
}

export default function MotionAcademyLanding() {

  const successSlides = [
    {
      id: 1,
      image: "/imgMotion/Sliding/poster1.webp"
    },
    {
      id: 2,
      image: "/imgMotion/Sliding/poster2.webp"
    },
    {
      id: 3,
      image: "/imgMotion/Sliding/poster3.webp"
    },
    {
      id: 4,
      image: "/imgMotion/Sliding/poster4.webp"
    }
  ]

  const courses = [
    {
      icon: Calculator,
      title: "JEE Preparation",
      description: "Comprehensive coaching for JEE Main & Advanced with expert faculty and proven methodology",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: Microscope,
      title: "NEET Preparation",
      description: "Complete medical entrance preparation with updated curriculum and practice tests",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: Medal,
      title: "Olympiad Training",
      description: "Specialized training for Mathematics, Physics, Chemistry, and Biology Olympiads",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
  ]

  const testimonials = [
    {
      name: "Arjun Sharma",
      result: "AIR 47 in JEE Advanced",
      image: "/imgMotion/Testimonials/testimonial1.webp",
      quote:
        "Motion Academy's structured approach and expert guidance helped me achieve my dream rank. The faculty support was exceptional!",
      college: "IIT Bombay - Computer Science",
    },
    {
      name: "Priya Patel",
      result: "AIR 156 in NEET",
      image: "/imgMotion/Testimonials/testimonial2.webp",
      quote:
        "The comprehensive study material and regular mock tests prepared me perfectly for NEET. Highly recommended!",
      college: "AIIMS Delhi - MBBS",
    },
    {
      name: "Rohit Kumar",
      result: "Gold Medal - Physics Olympiad",
      image: "/imgMotion/Testimonials/testimonial3.webp",
      quote:
        "Motion Academy's Olympiad program is outstanding. The problem-solving techniques I learned here were game-changing.",
      college: "International Physics Olympiad Winner",
    },
  ]

  const faculty = [
    {
      name: "Dr. Rajesh Gupta",
      qualification: "IIT Delhi, PhD Physics",
      experience: "15+ Years",
      subject: "Physics",
      image: "/imgMotion/Proffesors/prof1.webp",
    },
    {
      name: "Prof. Meera Singh",
      qualification: "IIT Kanpur, M.Tech",
      experience: "12+ Years",
      subject: "Mathematics",
      image: "/imgMotion/Proffesors/prof2.webp",
    },
    {
      name: "Dr. Amit Verma",
      qualification: "AIIMS, MD",
      experience: "10+ Years",
      subject: "Biology",
      image: "/imgMotion/Proffesors/prof3.png",
    },
    {
      name: "Prof. Sunita Jain",
      qualification: "IIT Madras, PhD",
      experience: "14+ Years",
      subject: "Chemistry",
      image: "/imgMotion/Proffesors/prof4.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Success Stories Sliding Bar */}
      <section className="py-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Our Success Stories</h2>
        </div>
        <SlidingCarousel 
          items={successSlides} 
          autoPlay={true} 
          interval={3000}
          className="w-full"
        />
      </section>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-16">
        <div
          className="absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">


            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                JEE/NEET Dreams
              </span>{" "}
              into Reality
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join <span className="font-semibold text-orange-500">50,000+ students</span> who cracked India's toughest
              exams with our expert guidance and proven methodology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/trial">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
              </Link>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                  <AnimatedCounter end={50000} suffix="+" />
                </div>
                <p className="text-slate-600 font-medium text-sm sm:text-base">Students Qualified</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-slate-600 font-medium text-sm sm:text-base">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <p className="text-slate-600 font-medium text-sm sm:text-base">Expert Faculty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="bg-slate-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
              <span>
                <AnimatedCounter end={50000} />+ Students Qualified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              <span>
                <AnimatedCounter end={98} />% Success Rate
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              <span>
                <AnimatedCounter end={200} />+ Faculty Members
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="courses" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              Choose Your Path to Success
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive coaching programs designed by experts to help you excel in India's most competitive exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`${course.color} border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <course.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${course.iconColor}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">{course.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">{course.description}</p>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    Explore Course
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section id="results" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              Success Stories That Inspire
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Real students, real results. See how Motion Academy transformed their dreams into achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                      <Badge className="bg-green-100 text-green-800 border-green-200 mt-1">{testimonial.result}</Badge>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 italic leading-relaxed text-sm sm:text-base">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm font-semibold text-blue-600">{testimonial.college}</p>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Excellence */}
      <section id="faculty" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mb-6">Learn from the Best</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Our faculty comprises IIT/AIIMS graduates and industry experts with decades of teaching experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {faculty.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-bold text-slate-800 text-lg mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-2 text-sm">{member.qualification}</p>
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-2">{member.subject}</Badge>
                  <p className="text-slate-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Features */}
      <section className="py-12 sm:py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Join the Live Learning Experience</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Be part of our vibrant learning community with live classes, real-time doubt solving, and interactive
              sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                  <LiveCounter />
                </div>
                <p className="text-slate-300 text-sm sm:text-base">Students studying right now</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />
                </div>
                <div className="mb-2 text-center">
                  <p className="text-sm text-slate-300 mb-2">Next live class starts in:</p>
                  <CountdownTimer />
                </div>
                <p className="text-slate-300 text-sm sm:text-base text-center">Physics - Wave Optics</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={1247} />
                </div>
                <p className="text-slate-300 text-sm sm:text-base">Doubts solved today</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/online">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Join Live Class Now
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Success Journey?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who chose Motion Academy for their competitive exam preparation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/trial">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/centers">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
              >
                Find Nearest Center
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              <span>7-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              <span>24/7 Doubt Support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
