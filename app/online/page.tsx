"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Download,
  Users,
  CheckCircle,
  Star,
  Smartphone,
  BookOpen,
  Video,
  Monitor,
  Headphones,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function OnlineCoursesPage() {

  const liveOnlineCourses = [
    {
      title: "JEE Live Online Classes",
      subtitle: "Interactive Live Sessions",
      duration: "2-Year Program: ₹85,000 | 1-Year Program: ₹55,000",
      features: [
        "Live interactive classes",
        "Real-time doubt clearing",
        "Online tests and assignments",
        "Recorded session access",
        "Digital study material",
        "Performance analytics",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
      highlight: "Most Popular",
      color: "border-blue-500",
      icon: Video,
    },
    {
      title: "NEET Live Online Classes",
      subtitle: "Medical Entrance Preparation",
      duration: "2-Year Program: ₹75,000 | 1-Year Program: ₹45,000",
      features: [
        "Live biology practicals",
        "Medical entrance specific prep",
        "NCERT focused approach",
        "Regular mock tests",
        "Doubt resolution sessions",
        "Progress tracking",
      ],
      subjects: ["Physics", "Chemistry", "Biology"],
      highlight: "High Success Rate",
      color: "border-green-500",
      icon: Play,
    },
  ]

  const recordedCourses = [
    {
      title: "Complete JEE Course Library",
      content: "500+ Hours of Content",
      price: "₹25,000",
      originalPrice: "₹35,000",
      access: "2 Years Access",
      features: [
        "All JEE Main + Advanced topics",
        "HD video quality",
        "Chapter-wise organization",
        "Practice problems included",
        "Previous year solutions",
        "Mobile app access",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
    },
    {
      title: "Complete NEET Course Library",
      content: "400+ Hours of Content",
      price: "₹20,000",
      originalPrice: "₹28,000",
      access: "2 Years Access",
      features: [
        "Complete NEET syllabus coverage",
        "NCERT based content",
        "Biology animations",
        "Concept clarity videos",
        "Test series included",
        "Offline viewing option",
      ],
      subjects: ["Physics", "Chemistry", "Biology"],
    },
  ]

  const digitalMaterials = [
    {
      title: "Physics Digital Package",
      price: "₹5,000",
      features: ["PDF Notes", "Question Banks", "Formula Sheets", "Previous Years"],
    },
    {
      title: "Chemistry Digital Package",
      price: "₹5,000",
      features: ["Reaction Mechanisms", "Organic Chemistry", "Inorganic Notes", "Numerical Problems"],
    },
    {
      title: "Mathematics Digital Package",
      price: "₹5,000",
      features: ["Concept Notes", "Problem Sets", "Shortcuts & Tricks", "Mock Tests"],
    },
    {
      title: "Biology Digital Package",
      price: "₹5,000",
      features: ["Diagrams & Charts", "NCERT Solutions", "Topic-wise Notes", "Practice Questions"],
    },
  ]

  const onlineFeatures = [
    {
      icon: Monitor,
      title: "HD Video Quality",
      description: "Crystal clear video lectures with excellent audio quality",
    },
    {
      icon: Smartphone,
      title: "Mobile App Access",
      description: "Learn on-the-go with our mobile application",
    },
    {
      icon: Download,
      title: "Download for Offline",
      description: "Download videos and study without internet",
    },
    {
      icon: Users,
      title: "Progress Tracking",
      description: "Monitor your learning progress and performance",
    },
    {
      icon: MessageCircle,
      title: "Discussion Forums",
      description: "Interact with peers and faculty in discussion forums",
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical assistance",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">


            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Learn from Home
              <span className="block text-blue-600">Vector's Digital Learning Platform</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Live Classes | Recorded Lectures | Interactive Doubt Resolution | Mobile App Access
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                <p className="text-slate-600 text-sm">Online Students</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <p className="text-slate-600 text-sm">Hours of Content</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <p className="text-slate-600 text-sm">Access Available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-slate-600 text-sm">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Online Classes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Live Online Classes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Interactive live sessions with real-time doubt clearing and personalized attention
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveOnlineCourses.map((course, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${course.color} relative overflow-hidden`}
              >
                {course.highlight && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white border-0 z-10">
                    {course.highlight}
                  </Badge>
                )}

                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <course.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{course.title}</h3>
                      <p className="text-slate-600">{course.subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-lg font-semibold text-green-600 mb-4">{course.duration}</p>
                    <p className="text-sm text-slate-600 mb-4">
                      <strong>Subjects:</strong> {course.subjects.join(", ")}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enroll Now</Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo Class
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recorded Video Courses */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Recorded Video Courses</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive video libraries with lifetime access and offline viewing options
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recordedCourses.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Video className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{course.title}</h3>
                    <p className="text-slate-600">{course.content}</p>
                  </div>

                  <div className="text-center mb-6 p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-purple-600">{course.price}</span>
                      <span className="text-lg text-slate-500 line-through">{course.originalPrice}</span>
                    </div>
                    <p className="text-sm text-slate-600">{course.access}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-slate-600 mb-4">
                      <strong>Subjects:</strong> {course.subjects.join(", ")}
                    </p>
                    <h4 className="font-semibold text-slate-800 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Purchase Course</Button>
                    <Button
                      variant="outline"
                      className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Preview Content
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Study Material */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Digital Study Material</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive digital resources including PDF notes, question banks, and practice tests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalMaterials.map((material, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{material.title}</h3>
                  <div className="text-2xl font-bold text-orange-600 mb-4">{material.price}</div>
                  <ul className="space-y-2 mb-6">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Purchase & Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Learning Features */}
      <section className="py-20 bg-gradient-to-br from-[#E6F7FF] to-[#D1EBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Online Learning Features</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Advanced features designed to enhance your online learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onlineFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/60 rounded-lg shadow-sm">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">What Our Online Students Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Success stories from students who achieved their goals through our online programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ankit Sharma",
                result: "JEE Advanced AIR 234",
                image: "/imgMotion/Testimonials/stud1.jpeg",
                quote: "Online classes gave me the flexibility to study at my own pace while getting expert guidance.",
                location: "Delhi",
              },
              {
                name: "Priya Gupta",
                result: "NEET AIR 456",
                image: "/imgMotion/Testimonials/stud3.jpeg",
                quote: "The recorded lectures helped me revise concepts multiple times. Great learning experience!",
                location: "Mumbai",
              },
              {
                name: "Rohit Patel",
                result: "JEE Main 99.2%ile",
                image: "/imgMotion/Testimonials/stud4.jpeg",
                quote: "Interactive doubt sessions and mobile app made learning convenient and effective.",
                location: "Ahmedabad",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{testimonial.name}</h4>
                  <Badge className="bg-green-100 text-green-800 border-green-200 mb-2">{testimonial.result}</Badge>
                  <p className="text-sm text-blue-600 mb-4">{testimonial.location}</p>
                  <p className="text-slate-600 italic text-sm">"{testimonial.quote}"</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Start Your Online Learning Journey</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of students learning from the comfort of their homes with Vector Academy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Explore Online Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="/trial">Start Free Trial</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>7-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>No Setup Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
