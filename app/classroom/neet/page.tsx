"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, Clock, Users, BookOpen, CheckCircle, Star, Trophy, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function NEETClassroomPage() {
  const neetCourses = [
    {
      title: "NEET 2-Year Classroom Program",
      subtitle: "Complete 11th & 12th Preparation",
      duration: "24 Months",
      fee: "₹1,85,000",
      originalFee: "₹2,10,000",
      discount: "12% OFF",
      features: [
        "Complete NCERT Coverage",
        "Daily Practice Problems",
        "Weekly Mock Tests",
        "Doubt Clearing Sessions",
        "Study Material Included",
        "Parent-Teacher Meetings",
      ],
      subjects: ["Physics", "Chemistry", "Biology"],
      batchSize: "40-50 Students",
      highlight: "Most Popular",
      color: "border-green-500",
    },
    {
      title: "NEET 1-Year Intensive Program",
      subtitle: "For 12th Pass Students",
      duration: "12 Months",
      fee: "₹95,000",
      originalFee: "₹1,10,000",
      discount: "14% OFF",
      features: [
        "Crash Course Format",
        "Previous Year Analysis",
        "All India Test Series",
        "Revision Classes",
        "Quick Concept Notes",
        "Performance Tracking",
      ],
      subjects: ["Physics", "Chemistry", "Biology"],
      batchSize: "30-40 Students",
      highlight: "Intensive",
      color: "border-blue-500",
    },
    {
      title: "NEET Foundation Program",
      subtitle: "Early Preparation (9th & 10th)",
      duration: "Per Year",
      fee: "₹85,000",
      originalFee: "₹95,000",
      discount: "11% OFF",
      features: [
        "Conceptual Foundation",
        "NCERT Mastery",
        "Basic Problem Solving",
        "Regular Assessments",
        "Career Guidance",
        "Study Skills Development",
      ],
      subjects: ["Science", "Mathematics"],
      batchSize: "25-30 Students",
      highlight: "Foundation",
      color: "border-orange-500",
    },
  ]

  const successStories = [
    {
      name: "Priya Sharma",
      rank: "AIR 1 NEET 2024",
      image: "/imgMotion/Testimonials/testimonial1.webp",
      college: "AIIMS Delhi",
      quote: "Motion's systematic approach and regular tests helped me achieve my dream rank.",
    },
    {
      name: "Rahul Gupta",
      rank: "AIR 45 NEET 2024",
      image: "/imgMotion/Testimonials/testimonial2.webp",
      college: "JIPMER Puducherry",
      quote: "The faculty support and study material were exceptional throughout my journey.",
    },
    {
      name: "Ananya Patel",
      rank: "AIR 156 NEET 2024",
      image: "/imgMotion/Testimonials/testimonial3.webp",
      college: "KGMU Lucknow",
      quote: "Motion's doubt clearing sessions were crucial for my NEET preparation.",
    },
  ]

  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Physics",
      qualification: "AIIMS Delhi, MD",
      experience: "15+ Years",
      image: "/imgMotion/Proffesors/prof1.webp",
    },
    {
      name: "Dr. Priya Singh",
      subject: "Chemistry",
      qualification: "IIT Delhi, PhD",
      experience: "12+ Years",
      image: "/imgMotion/Proffesors/prof2.webp",
    },
    {
      name: "Dr. Amit Verma",
      subject: "Biology",
      qualification: "AIIMS Delhi, MD",
      experience: "18+ Years",
      image: "/imgMotion/Proffesors/prof3.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">


            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              NEET Classroom Programs
              <span className="block text-green-600">Your Path to Medical College</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Comprehensive medical entrance preparation with expert faculty, proven methodology, and 95% success rate
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3,200+</div>
                <p className="text-slate-600 text-sm">Medical Selections</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-slate-600 text-sm">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">180+</div>
                <p className="text-slate-600 text-sm">AIIMS Selections</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <p className="text-slate-600 text-sm">Expert Faculty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Choose Your NEET Program</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored programs for different academic levels and preparation timelines
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {neetCourses.map((course, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${course.color} relative overflow-hidden`}
              >
                {course.highlight && (
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white border-0 z-10">
                    {course.highlight}
                  </Badge>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Microscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
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
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center mb-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-green-600">{course.fee}</span>
                      <span className="text-lg text-slate-500 line-through">{course.originalFee}</span>
                    </div>
                    <Badge className="bg-red-100 text-red-800 border-red-200">{course.discount}</Badge>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Enroll Now</Button>
                    <Button
                      variant="outline"
                      className="w-full border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">NEET Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our students consistently achieve top ranks in NEET and secure admissions in premier medical colleges
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
                  <Badge className="bg-green-100 text-green-800 border-green-200 mb-3">{story.rank}</Badge>
                  <p className="text-sm font-semibold text-blue-600 mb-4">{story.college}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Expert NEET Faculty</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Learn from medical professionals and subject experts with years of teaching experience
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
                  <Badge className="bg-green-100 text-green-800 border-green-200 mb-2">{faculty.subject}</Badge>
                  <p className="text-blue-600 font-semibold mb-2">{faculty.qualification}</p>
                  <p className="text-slate-600 text-sm">{faculty.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NEET at Motion */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Motion for NEET?</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive preparation strategy designed specifically for medical entrance success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "NCERT Focused Approach",
                description: "Complete coverage of NCERT with additional practice problems",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Study Material",
                description: "Updated study material covering entire NEET syllabus",
              },
              {
                icon: Trophy,
                title: "Regular Mock Tests",
                description: "Weekly full-length tests with detailed performance analysis",
              },
              {
                icon: Users,
                title: "Small Batch Size",
                description: "Limited students per batch for personalized attention",
              },
              {
                icon: Clock,
                title: "Flexible Timings",
                description: "Multiple batch timings to suit different schedules",
              },
              {
                icon: CheckCircle,
                title: "Doubt Resolution",
                description: "Daily doubt clearing sessions with expert faculty",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <feature.icon className="h-12 w-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Ready to Start Your NEET Journey?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of successful students who achieved their medical dreams with Motion Academy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
              Enroll in NEET Program
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="/demo">Book Free Demo Class</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>EMI Options Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Scholarship Available</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
