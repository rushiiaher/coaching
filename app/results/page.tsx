"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Star,
  TrendingUp,
  Award,
  Users,
  Target,
  BookOpen,
  Medal,
  Crown,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState("2024")

  const topResults2024 = [
    {
      name: "Arjun Gupta",
      exam: "JEE Advanced",
      rank: "AIR 1",
      college: "IIT Bombay - Computer Science",
      image: "/imgMotion/Testimonials/testimonial1.webp",
      program: "2-Year Classroom Program",
      center: "Kota",
    },
    {
      name: "Priya Sharma",
      exam: "NEET",
      rank: "AIR 1",
      college: "AIIMS Delhi - MBBS",
      image: "/imgMotion/Testimonials/testimonial2.webp",
      program: "2-Year Classroom Program",
      center: "Delhi",
    },
    {
      name: "Karan Singh",
      exam: "JEE Advanced",
      rank: "AIR 3",
      college: "IIT Delhi - Electrical Engineering",
      image: "/imgMotion/Testimonials/testimonial3.webp",
      program: "Residential Program",
      center: "Kota",
    },
    {
      name: "Sneha Patel",
      exam: "NEET",
      rank: "AIR 5",
      college: "JIPMER Puducherry - MBBS",
      image: "/imgMotion/Testimonials/testimonial4.webp",
      program: "Online Live Classes",
      center: "Mumbai",
    },
  ]

  const overallStats = [
    {
      title: "JEE Advanced 2024",
      stats: [
        { label: "Total Selections", value: "2,847", color: "text-blue-600" },
        { label: "Top 100 AIRs", value: "45", color: "text-green-600" },
        { label: "Top 1000 AIRs", value: "312", color: "text-orange-600" },
        { label: "Success Rate", value: "92.3%", color: "text-purple-600" },
      ],
      icon: Trophy,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "NEET 2024",
      stats: [
        { label: "Total Selections", value: "3,156", color: "text-green-600" },
        { label: "Top 100 AIRs", value: "38", color: "text-blue-600" },
        { label: "Top 1000 AIRs", value: "287", color: "text-orange-600" },
        { label: "Success Rate", value: "94.7%", color: "text-purple-600" },
      ],
      icon: Medal,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "JEE Main 2024",
      stats: [
        { label: "99%ile+ Students", value: "1,245", color: "text-orange-600" },
        { label: "95%ile+ Students", value: "4,567", color: "text-blue-600" },
        { label: "90%ile+ Students", value: "8,934", color: "text-green-600" },
        { label: "Qualified Students", value: "15,678", color: "text-purple-600" },
      ],
      icon: Award,
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const centerWiseResults = [
    { center: "Kota", jeeSelections: 1245, neetSelections: 1456, totalStudents: 3200 },
    { center: "Delhi", jeeSelections: 567, neetSelections: 678, totalStudents: 1500 },
    { center: "Mumbai", jeeSelections: 345, neetSelections: 456, totalStudents: 1000 },
    { center: "Pune", jeeSelections: 234, neetSelections: 345, totalStudents: 800 },
    { center: "Hyderabad", jeeSelections: 189, neetSelections: 234, totalStudents: 650 },
  ]

  const yearWiseProgress = [
    { year: "2020", jeeSelections: 1890, neetSelections: 2100 },
    { year: "2021", jeeSelections: 2156, neetSelections: 2345 },
    { year: "2022", jeeSelections: 2456, neetSelections: 2678 },
    { year: "2023", jeeSelections: 2678, neetSelections: 2890 },
    { year: "2024", jeeSelections: 2847, neetSelections: 3156 },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">


            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Results That Speak
              <span className="block text-green-600">Excellence & Success</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Consistent top ranks in JEE, NEET, and other competitive exams with record-breaking success rates
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">6,000+</div>
                <p className="text-slate-600 text-sm">Total Selections 2024</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">83</div>
                <p className="text-slate-600 text-sm">Top 100 AIRs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">93.5%</div>
                <p className="text-slate-600 text-sm">Average Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">16+</div>
                <p className="text-slate-600 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rankers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Top Rankers 2024</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Celebrating our students who achieved top ranks in India's most competitive exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topResults2024.map((student, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={student.image || "/placeholder.svg"}
                      alt={student.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto"
                    />
                    <Crown className="h-6 w-6 text-yellow-500 absolute -top-2 -right-2" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{student.name}</h4>
                  <Badge className="bg-red-100 text-red-800 border-red-200 mb-2">
                    {student.exam} {student.rank}
                  </Badge>
                  <p className="text-sm font-semibold text-blue-600 mb-2">{student.college}</p>
                  <p className="text-xs text-slate-600 mb-1">{student.program}</p>
                  <p className="text-xs text-slate-500">{student.center} Center</p>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Statistics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">2024 Overall Statistics</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive performance analysis across all major competitive exams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {overallStats.map((stat, index) => (
              <Card key={index} className={`border-2 ${stat.color} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <stat.icon className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-slate-800">{stat.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {stat.stats.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-slate-600">{item.label}:</span>
                        <span className={`font-bold text-lg ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Center-wise Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Center-wise Performance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Outstanding results across all Motion Academy centers nationwide
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Center</th>
                  <th className="px-6 py-4 text-center font-semibold">JEE Selections</th>
                  <th className="px-6 py-4 text-center font-semibold">NEET Selections</th>
                  <th className="px-6 py-4 text-center font-semibold">Total Students</th>
                  <th className="px-6 py-4 text-center font-semibold">Success Rate</th>
                </tr>
              </thead>
              <tbody>
                {centerWiseResults.map((center, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-800">{center.center}</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">{center.jeeSelections}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">{center.neetSelections}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{center.totalStudents}</td>
                    <td className="px-6 py-4 text-center">
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                        {(((center.jeeSelections + center.neetSelections) / center.totalStudents) * 100).toFixed(1)}%
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Year-wise Progress */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Year-wise Progress</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Consistent growth in student selections over the years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {yearWiseProgress.map((year, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold mb-3">{year.year}</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-blue-200">JEE</div>
                      <div className="text-lg font-bold text-blue-300">{year.jeeSelections}</div>
                    </div>
                    <div>
                      <div className="text-sm text-green-200">NEET</div>
                      <div className="text-lg font-bold text-green-300">{year.neetSelections}</div>
                    </div>
                  </div>
                  {index > 0 && (
                    <div className="mt-3">
                      <TrendingUp className="h-5 w-5 text-green-400 mx-auto" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Success Factors</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key elements that contribute to our students' outstanding performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Faculty",
                description: "IIT/AIIMS graduates with extensive teaching experience",
                color: "text-blue-600",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Material",
                description: "Updated study material covering complete syllabus",
                color: "text-green-600",
              },
              {
                icon: Target,
                title: "Regular Testing",
                description: "Frequent mock tests and performance analysis",
                color: "text-orange-600",
              },
              {
                icon: Zap,
                title: "Doubt Resolution",
                description: "24/7 doubt clearing and personalized attention",
                color: "text-purple-600",
              },
              {
                icon: Trophy,
                title: "Proven Methodology",
                description: "16+ years of refined teaching methodology",
                color: "text-red-600",
              },
              {
                icon: Award,
                title: "Motivational Environment",
                description: "Competitive yet supportive learning atmosphere",
                color: "text-indigo-600",
              },
            ].map((factor, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <factor.icon className={`h-12 w-12 ${factor.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{factor.title}</h3>
                  <p className="text-slate-600">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Be Part of Our Success Story</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of successful students who achieved their dreams with Motion Academy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Download Detailed Results
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-green-500" />
              <span>Proven Track Record</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-green-500" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-green-500" />
              <span>Consistent Results</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
