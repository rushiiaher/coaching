"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, Target, Calculator, Microscope, Medal, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function ClassroomPage() {
  const programs = [
    {
      title: "NEET Preparation",
      description: "Comprehensive medical entrance preparation with updated curriculum and extensive practice",
      duration: "1-2 Years",
      subjects: ["Physics", "Chemistry", "Biology"],
      features: ["Live Classes", "Mock Tests", "Doubt Sessions", "Study Material"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-green-500 to-green-600",
      link: "/classroom/neet",
      icon: Microscope,
    },
    {
      title: "JEE Preparation",
      description: "Complete engineering entrance coaching for JEE Main and Advanced with expert faculty",
      duration: "1-2 Years",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      features: ["IIT Faculty", "Regular Tests", "Problem Solving", "Concept Building"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-500 to-blue-600",
      link: "/classroom/jee",
      icon: Calculator,
    },
    {
      title: "Foundation Program",
      description: "Strong foundation building for classes 6-10 with focus on concept clarity",
      duration: "Ongoing",
      subjects: ["Mathematics", "Science", "Mental Ability"],
      features: ["Age-appropriate Teaching", "Interactive Learning", "Regular Assessment", "Parent Updates"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-orange-500 to-orange-600",
      link: "/classroom/foundation",
      icon: Medal,
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from IIT/AIIMS graduates with years of teaching experience",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Updated curriculum with latest exam patterns and question banks",
    },
    {
      icon: Target,
      title: "Regular Mock Tests",
      description: "Weekly tests and performance analysis to track your progress",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Thousands of successful students in top colleges across India",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200 px-4 py-2 text-sm font-medium">
            Classroom Programs
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Excellence in
            <span className="block text-blue-600">Classroom Teaching</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Interactive classroom sessions with expert faculty, comprehensive study material, and proven teaching
            methodology
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <p className="text-slate-600 font-medium text-sm sm:text-base">Students Taught</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-2">98%</div>
              <p className="text-slate-600 font-medium text-sm sm:text-base">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">200+</div>
              <p className="text-slate-600 font-medium text-sm sm:text-base">Expert Faculty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Classroom Programs</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our specialized programs designed to help you excel in competitive exams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>

                <div className="relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={300}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <program.icon className="h-12 w-12 text-white" />
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">{program.title}</h3>
                    <Badge variant="outline" className="text-slate-600">
                      {program.duration}
                    </Badge>
                  </div>

                  <p className="text-slate-600 mb-4 text-sm sm:text-base">{program.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={program.link}>
                    <Button
                      className={`w-full bg-gradient-to-r ${program.color} text-white hover:shadow-lg transition-all duration-300`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Why Choose Our Classroom Programs?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference with our proven teaching methodology and comprehensive support system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-100 mb-4">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who achieved their dreams through our classroom programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Free Demo Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/centers">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-transparent"
              >
                Find Nearest Center
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
