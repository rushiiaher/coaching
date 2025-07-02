"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  CheckCircle,
  Star,
  Trophy,
  Target,
  Menu,
  X,
  ChevronRight,
  Brain,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function FoundationClassroomPage() {

  const foundationCourses = [
    {
      title: "Class 9th Foundation Program",
      subtitle: "Building Strong Academic Foundation",
      duration: "1 Academic Year",
      fee: "₹65,000",
      originalFee: "₹75,000",
      discount: "13% OFF",
      features: [
        "Mathematics Foundation",
        "Science Concepts",
        "Mental Ability Development",
        "Regular Assessments",
        "Study Skills Training",
        "Career Guidance",
      ],
      subjects: ["Mathematics", "Science", "Mental Ability"],
      batchSize: "20-25 Students",
      highlight: "Early Start",
      color: "border-orange-500",
    },
    {
      title: "Class 10th Foundation Program",
      subtitle: "Board + Competition Preparation",
      duration: "1 Academic Year",
      fee: "₹75,000",
      originalFee: "₹85,000",
      discount: "12% OFF",
      features: [
        "Advanced Mathematics",
        "Science Concepts",
        "Board Exam Preparation",
        "Competition Foundation",
        "Problem Solving Skills",
        "Time Management",
      ],
      subjects: ["Mathematics", "Science", "Aptitude"],
      batchSize: "20-25 Students",
      highlight: "Board + Competition",
      color: "border-green-500",
    },
    {
      title: "Integrated Foundation Program",
      subtitle: "Complete 9th & 10th Preparation",
      duration: "2 Academic Years",
      fee: "₹1,30,000",
      originalFee: "₹1,50,000",
      discount: "13% OFF",
      features: [
        "Complete Foundation Coverage",
        "Progressive Difficulty Level",
        "Regular Mock Tests",
        "Personality Development",
        "Leadership Skills",
        "Scholarship Preparation",
      ],
      subjects: ["Mathematics", "Science", "Aptitude", "English"],
      batchSize: "15-20 Students",
      highlight: "Complete Package",
      color: "border-blue-500",
    },
  ]

  const successStories = [
    {
      name: "Aarav Sharma",
      achievement: "JEE Advanced AIR 45",
      image: "/imgMotion/Testimonials/stud1.jpeg",
      foundation: "Started from Class 9th Foundation",
      quote: "Foundation program gave me the confidence and strong base for JEE preparation.",
    },
    {
      name: "Diya Patel",
      achievement: "NEET AIR 89",
      image: "/imgMotion/Testimonials/stud2.jpeg",
      foundation: "Class 10th Foundation Graduate",
      quote: "The conceptual clarity from foundation helped me excel in NEET.",
    },
    {
      name: "Rohan Kumar",
      achievement: "Olympiad Gold Medal",
      image: "/imgMotion/Testimonials/stud3.jpeg",
      foundation: "Foundation + Olympiad Training",
      quote: "Foundation program developed my problem-solving abilities significantly.",
    },
  ]

  const facultyMembers = [
    {
      name: "Prof. Anita Sharma",
      subject: "Mathematics",
      qualification: "IIT Delhi, M.Tech",
      experience: "12+ Years",
      image: "/imgMotion/Proffesors/prof2.webp",
    },
    {
      name: "Dr. Vikram Singh",
      subject: "Science",
      qualification: "PhD Physics",
      experience: "15+ Years",
      image: "/imgMotion/Proffesors/prof1.webp",
    },
    {
      name: "Prof. Ritu Gupta",
      subject: "Mental Ability",
      qualification: "M.Ed, Psychology",
      experience: "10+ Years",
      image: "/imgMotion/Proffesors/prof4.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">


            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Foundation Programs
              <span className="block text-orange-600">Building Tomorrow's Leaders</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Early preparation for competitive exams with strong conceptual foundation and skill development for Class
              9th & 10th students
            </p>

            <div className="grid grid-cols-1 m d:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5,000+</div>
                <p className="text-slate-600 text-sm">Foundation Students</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">88%</div>
                <p className="text-slate-600 text-sm">Board Exam Success</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                <p className="text-slate-600 text-sm">Competition Success</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Choose Your Foundation Program</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive foundation programs designed to build strong academic base and competitive exam readiness
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {foundationCourses.map((course, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${course.color} relative overflow-hidden`}
              >
                {course.highlight && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white border-0 z-10">
                    {course.highlight}
                  </Badge>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <GraduationCap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
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
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center mb-6 p-4 bg-orange-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-orange-600">{course.fee}</span>
                      <span className="text-lg text-slate-500 line-through">{course.originalFee}</span>
                    </div>
                    <Badge className="bg-red-100 text-red-800 border-red-200">{course.discount}</Badge>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Enroll Now</Button>
                    <Button
                      variant="outline"
                      className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Foundation Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Students who started their journey with our foundation programs and achieved remarkable success
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
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-3">{story.achievement}</Badge>
                  <p className="text-sm font-semibold text-blue-600 mb-4">{story.foundation}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Expert Foundation Faculty</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced educators specializing in foundation-level teaching and student development
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
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-2">{faculty.subject}</Badge>
                  <p className="text-blue-600 font-semibold mb-2">{faculty.qualification}</p>
                  <p className="text-slate-600 text-sm">{faculty.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Foundation at Motion */}
      <section className="py-20 bg-gradient-to-br from-[#FFE1B6] to-[#FFCF8D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Why Choose Motion Foundation?</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Comprehensive foundation building approach for academic excellence and competitive exam success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Conceptual Clarity",
                description: "Strong foundation in fundamental concepts across all subjects",
              },
              {
                icon: Lightbulb,
                title: "Problem Solving Skills",
                description: "Development of analytical and logical thinking abilities",
              },
              {
                icon: Trophy,
                title: "Early Competition Prep",
                description: "Introduction to competitive exam patterns and strategies",
              },
              {
                icon: Users,
                title: "Small Batch Size",
                description: "Individual attention with limited students per batch",
              },
              {
                icon: Target,
                title: "Skill Development",
                description: "Focus on study skills, time management, and exam techniques",
              },
              {
                icon: CheckCircle,
                title: "Regular Assessment",
                description: "Continuous evaluation and feedback for improvement",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/60 rounded-lg shadow-sm">
                <feature.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Start Your Foundation Journey</h2>
          <p className="text-xl text-slate-600 mb-8">
            Give your child the best start with our comprehensive foundation programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
              Enroll in Foundation Program
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="/demo">Book Free Demo Class</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-orange-500" />
              <span>Age-Appropriate Teaching</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-orange-500" />
              <span>Parent Counseling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-orange-500" />
              <span>Scholarship Available</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
