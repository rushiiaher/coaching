"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  Users,
  BookOpen,
  CheckCircle,
  Star,
  Trophy,
  Target,
  Menu,
  X,
  ChevronRight,
  Zap,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function JEEClassroomPage() {

  const jeeCourses = [
    {
      title: "JEE 2-Year Classroom Program",
      subtitle: "Complete 11th & 12th Preparation",
      duration: "24 Months",
      fee: "₹2,15,000",
      originalFee: "₹2,50,000",
      discount: "14% OFF",
      features: [
        "JEE Main + Advanced Coverage",
        "IIT-Level Problem Solving",
        "Weekly Mock Tests",
        "Doubt Clearing Sessions",
        "Study Material Included",
        "Performance Analysis",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
      batchSize: "30-40 Students",
      highlight: "Premium",
      color: "border-blue-500",
    },
    {
      title: "JEE 1-Year Intensive Program",
      subtitle: "For 12th Pass Students",
      duration: "12 Months",
      fee: "₹1,25,000",
      originalFee: "₹1,45,000",
      discount: "14% OFF",
      features: [
        "Intensive Problem Solving",
        "Previous Year Analysis",
        "All India Test Series",
        "Revision Classes",
        "Quick Concept Notes",
        "Rank Improvement Focus",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
      batchSize: "25-35 Students",
      highlight: "Dropper Special",
      color: "border-green-500",
    },
    {
      title: "JEE Foundation Program",
      subtitle: "Early Preparation (9th & 10th)",
      duration: "Per Year",
      fee: "₹95,000",
      originalFee: "₹1,10,000",
      discount: "14% OFF",
      features: [
        "Mathematical Foundation",
        "Scientific Temperament",
        "Problem Solving Skills",
        "Regular Assessments",
        "Career Guidance",
        "Olympiad Preparation",
      ],
      subjects: ["Mathematics", "Science"],
      batchSize: "20-25 Students",
      highlight: "Foundation",
      color: "border-orange-500",
    },
  ]

  const successStories = [
    {
      name: "Arjun Gupta",
      rank: "AIR 1 JEE Advanced 2024",
      image: "/imgMotion/Testimonials/testimonial1.webp",
      college: "IIT Bombay - CSE",
      quote: "Motion's problem-solving approach and regular tests were key to my success.",
    },
    {
      name: "Karan Sharma",
      rank: "AIR 23 JEE Advanced 2024",
      image: "/imgMotion/Testimonials/testimonial2.webp",
      college: "IIT Delhi - Mechanical",
      quote: "The faculty's guidance and comprehensive study material helped me achieve my goal.",
    },
    {
      name: "Sneha Patel",
      rank: "AIR 89 JEE Advanced 2024",
      image: "/imgMotion/Testimonials/testimonial3.webp",
      college: "IIT Kanpur - Chemical",
      quote: "Motion's structured approach made complex concepts easy to understand.",
    },
  ]

  const facultyMembers = [
    {
      name: "Prof. Rajesh Gupta",
      subject: "Physics",
      qualification: "IIT Delhi, PhD",
      experience: "20+ Years",
      image: "/imgMotion/Proffesors/prof1.webp",
    },
    {
      name: "Prof. Meera Singh",
      subject: "Mathematics",
      qualification: "IIT Kanpur, M.Tech",
      experience: "15+ Years",
      image: "/imgMotion/Proffesors/prof2.webp",
    },
    {
      name: "Prof. Amit Kumar",
      subject: "Chemistry",
      qualification: "IIT Madras, PhD",
      experience: "18+ Years",
      image: "/imgMotion/Proffesors/prof4.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">


            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              JEE Classroom Programs
              <span className="block text-blue-600">Your Gateway to IIT</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Comprehensive engineering entrance preparation with IIT faculty, advanced problem solving, and proven
              success methodology
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
                <p className="text-slate-600 text-sm">IIT Selections</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                <p className="text-slate-600 text-sm">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">45</div>
                <p className="text-slate-600 text-sm">Top 100 AIRs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">60+</div>
                <p className="text-slate-600 text-sm">IIT Faculty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Choose Your JEE Program</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Structured programs designed to crack JEE Main and Advanced with top ranks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jeeCourses.map((course, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${course.color} relative overflow-hidden`}
              >
                {course.highlight && (
                  <Badge className="absolute top-4 right-4 bg-blue-500 text-white border-0 z-10">
                    {course.highlight}
                  </Badge>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{course.title}</h3>
                    <p className="text-slate-600">{course.subtitle}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Duration:</span>
                      <span className="font-semibold text-slate-800">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Subjects:</span>
                      <span className="font-semibold text-slate-800">{course.subjects.join(", ")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Batch Size:</span>
                      <span className="font-semibold text-slate-800">{course.batchSize}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Program Features:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{course.fee}</span>
                      <span className="text-lg text-slate-500 line-through">{course.originalFee}</span>
                    </div>
                    <Badge className="bg-red-100 text-red-800 border-red-200">{course.discount}</Badge>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enroll Now</Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
                    >
                      Download Syllabus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">JEE Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our students consistently achieve top ranks in JEE and secure admissions in premier IITs and NITs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{story.name}</h4>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-3">{story.rank}</Badge>
                  <p className="text-sm font-semibold text-green-600 mb-4">{story.college}</p>
                  <p className="text-slate-600 italic text-sm">"{story.quote}"</p>
                  <div className="flex justify-center mt-4">
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

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Expert JEE Faculty</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Learn from IIT graduates and subject experts with extensive teaching and research experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <CardContent className="p-8">
                  <Image
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{faculty.name}</h4>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-2">{faculty.subject}</Badge>
                  <p className="text-green-600 font-semibold mb-2">{faculty.qualification}</p>
                  <p className="text-slate-600 text-sm">{faculty.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JEE at Motion */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Motion for JEE?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Advanced teaching methodology and comprehensive preparation strategy for JEE success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "IIT-Level Problem Solving",
                description: "Advanced problem-solving techniques used in top IITs",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Study Material",
                description: "Updated material covering JEE Main and Advanced syllabus",
              },
              {
                icon: Trophy,
                title: "Regular Mock Tests",
                description: "JEE pattern tests with detailed performance analysis",
              },
              {
                icon: Users,
                title: "Small Batch Size",
                description: "Limited students per batch for individual attention",
              },
              {
                icon: Award,
                title: "IIT Faculty",
                description: "Learn directly from IIT graduates and PhD holders",
              },
              {
                icon: Target,
                title: "Rank Improvement",
                description: "Focused approach for consistent rank improvement",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <feature.icon className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Ready to Crack JEE?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of successful students who achieved their IIT dreams with Motion Academy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Enroll in JEE Program
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="/demo">Book Free Demo Class</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>EMI Options Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>Scholarship Available</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
