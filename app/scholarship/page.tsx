"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Star,
  Calendar,
  CheckCircle,
  Award,
  BookOpen,
  GraduationCap,
  Percent,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function ScholarshipPage() {

  const scholarshipPrograms = [
    {
      title: "MOST (Vector Open Scholarship Test)",
      subtitle: "Merit-based Scholarship Program",
      maxScholarship: "Up to 90%",
      eligibility: "Class 8th to 12th Pass",
      testDate: "Every Month",
      features: [
        "Monthly scholarship tests",
        "Merit-based selection",
        "Up to 90% fee waiver",
        "Valid for all programs",
        "Online and offline mode",
        "Instant result declaration",
      ],
      color: "border-blue-500",
      highlight: "Most Popular",
    },
    {
      title: "Academic Excellence Scholarship",
      subtitle: "For Board Exam Toppers",
      maxScholarship: "Up to 75%",
      eligibility: "85%+ in Board Exams",
      testDate: "Document Verification",
      features: [
        "Based on board exam marks",
        "No additional test required",
        "Direct admission process",
        "Applicable for all courses",
        "Additional benefits included",
        "Fast-track processing",
      ],
      color: "border-green-500",
      highlight: "Direct Entry",
    },
    {
      title: "Need-based Scholarship",
      subtitle: "Financial Assistance Program",
      maxScholarship: "Up to 60%",
      eligibility: "Income-based Criteria",
      testDate: "Document Review",
      features: [
        "Income-based assessment",
        "Family financial background",
        "Supporting documentation",
        "Case-by-case evaluation",
        "Flexible payment terms",
        "Counseling support",
      ],
      color: "border-orange-500",
      highlight: "Financial Aid",
    },
  ]

  const scholarshipBeneficiaries = [
    {
      name: "Aarav Sharma",
      scholarship: "90% MOST Scholarship",
      achievement: "JEE Advanced AIR 45",
      image: "/imgMotion/Testimonials/stud1.jpeg",
      quote: "MOST scholarship made my IIT dream affordable. Forever grateful to Vector Academy.",
      background: "Farmer's son from Rajasthan",
    },
    {
      name: "Priya Patel",
      scholarship: "75% Academic Excellence",
      achievement: "NEET AIR 156",
      image: "/imgMotion/Testimonials/stud4.jpeg",
      quote: "The scholarship program helped me focus on studies without financial stress.",
      background: "Single mother family",
    },
    {
      name: "Rohit Kumar",
      scholarship: "85% MOST Scholarship",
      achievement: "JEE Main 99.8%ile",
      image: "/imgMotion/Testimonials/stud3.jpeg",
      quote: "Vector's scholarship changed my life. Now I'm studying at IIT Delhi.",
      background: "Daily wage worker's son",
    },
  ]

  const eligibilityCriteria = [
    {
      category: "MOST Scholarship",
      criteria: [
        "Students from Class 8th to 12th Pass",
        "Minimum 60% marks in previous class",
        "Valid for all Vector Academy programs",
        "Test performance based selection",
        "No income limit restrictions",
      ],
    },
    {
      category: "Academic Excellence",
      criteria: [
        "85%+ marks in Class 10th/12th Board Exams",
        "Valid mark sheet and certificates",
        "Applicable for immediate enrollment",
        "No additional test required",
        "Merit list based selection",
      ],
    },
    {
      category: "Need-based Scholarship",
      criteria: [
        "Family income below ₹3 Lakhs per annum",
        "Income certificate from competent authority",
        "Academic performance above 70%",
        "Supporting financial documents",
        "Personal interview may be required",
      ],
    },
  ]

  const applicationProcess = [
    {
      step: "1",
      title: "Register Online",
      description: "Fill the scholarship application form with required details",
      icon: BookOpen,
    },
    {
      step: "2",
      title: "Submit Documents",
      description: "Upload necessary documents and certificates",
      icon: CheckCircle,
    },
    {
      step: "3",
      title: "Appear for Test/Review",
      description: "Take MOST or submit documents for review",
      icon: Trophy,
    },
    {
      step: "4",
      title: "Result Declaration",
      description: "Get scholarship result and admission confirmation",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">


            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Scholarships & Financial Aid
              <span className="block text-orange-600">Making Dreams Affordable</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Merit-based and need-based scholarships to ensure that financial constraints don't limit your potential
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹50+ Cr</div>
                <p className="text-slate-600 text-sm">Scholarships Awarded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
                <p className="text-slate-600 text-sm">Students Benefited</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <p className="text-slate-600 text-sm">Maximum Scholarship</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">16+</div>
                <p className="text-slate-600 text-sm">Years of Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Scholarship Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple scholarship opportunities designed to support students from all backgrounds
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {scholarshipPrograms.map((program, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${program.color} relative overflow-hidden`}
              >
                {program.highlight && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white border-0 z-10">
                    {program.highlight}
                  </Badge>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{program.title}</h3>
                    <p className="text-slate-600">{program.subtitle}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Max Scholarship:</span>
                      <span className="font-bold text-green-600 text-lg">{program.maxScholarship}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Eligibility:</span>
                      <span className="font-semibold text-slate-800">{program.eligibility}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Test/Review:</span>
                      <span className="font-semibold text-slate-800">{program.testDate}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Program Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Apply Now</Button>
                    <Button
                      variant="outline"
                      className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Scholarship Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories of students whose lives were transformed through our scholarship programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarshipBeneficiaries.map((student, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <Image
                    src={student.image || "/placeholder.svg"}
                    alt={student.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{student.name}</h4>
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-2">{student.scholarship}</Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-200 mb-3">{student.achievement}</Badge>
                  <p className="text-sm text-blue-600 font-semibold mb-4">{student.background}</p>
                  <p className="text-slate-600 italic text-sm">"{student.quote}"</p>
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

      {/* Eligibility Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Eligibility Criteria</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Detailed eligibility requirements for each scholarship program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-slate-800">{criteria.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {criteria.criteria.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Application Process</h2>
            <p className="text-xl text-slate-600">Simple 4-step process to apply for scholarships</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <step.icon className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                  {index < applicationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-orange-200 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Start Application Process
            </Button>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-br from-[#FFF9E6] to-[#FFEFD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Important Dates & Information</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Stay updated with scholarship test dates and application deadlines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/60 rounded-lg shadow-sm">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">MOST Test Dates</h3>
              <p className="text-slate-700 mb-2">Every 2nd Sunday of the month</p>
              <p className="text-slate-800 font-semibold">Next Test: 14th January 2024</p>
            </div>

            <div className="text-center p-6 bg-white/60 rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Application Deadline</h3>
              <p className="text-slate-700 mb-2">5 days before test date</p>
              <p className="text-slate-800 font-semibold">Register by: 9th January 2024</p>
            </div>

            <div className="text-center p-6 bg-white/60 rounded-lg shadow-sm">
              <Percent className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Result Declaration</h3>
              <p className="text-slate-700 mb-2">Within 48 hours of test</p>
              <p className="text-slate-800 font-semibold">SMS & Email notification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Ready to Apply for Scholarship?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Don't let financial constraints stop you from achieving your dreams. Apply for our scholarship programs
            today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold">
              Apply for Scholarship
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Check Eligibility
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-orange-500" />
              <span>No Application Fee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-orange-500" />
              <span>Multiple Attempts Allowed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-orange-500" />
              <span>Instant Result</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
