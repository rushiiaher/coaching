"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Clock,
  Users,
  CheckCircle,
  Video,
  Headphones,
  BookOpen,
  Star,
  Award,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function BookDemoPage() {
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")

  const demoOptions = [
    {
      title: "JEE Demo Class",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      duration: "90 minutes",
      features: [
        "Live interactive session",
        "Problem-solving techniques",
        "Doubt clearing",
        "Study material preview",
        "Faculty interaction",
      ],
      icon: Target,
      color: "border-blue-500",
    },
    {
      title: "NEET Demo Class",
      subjects: ["Physics", "Chemistry", "Biology"],
      duration: "90 minutes",
      features: [
        "NCERT focused approach",
        "Medical entrance strategies",
        "Concept clarity session",
        "Practice questions",
        "Career guidance",
      ],
      icon: BookOpen,
      color: "border-green-500",
    },
    {
      title: "Foundation Demo Class",
      subjects: ["Mathematics", "Science", "Mental Ability"],
      duration: "60 minutes",
      features: [
        "Age-appropriate teaching",
        "Conceptual foundation",
        "Interactive learning",
        "Skill development",
        "Parent counseling",
      ],
      icon: Award,
      color: "border-orange-500",
    },
  ]

  const timeSlots = [
    "9:00 AM - 10:30 AM",
    "11:00 AM - 12:30 PM",
    "2:00 PM - 3:30 PM",
    "4:00 PM - 5:30 PM",
    "6:00 PM - 7:30 PM",
    "8:00 PM - 9:30 PM",
  ]

  const demoFeatures = [
    {
      icon: Video,
      title: "Live Interactive Session",
      description: "Real-time interaction with expert faculty",
    },
    {
      icon: Users,
      title: "Small Group Setting",
      description: "Limited participants for personalized attention",
    },
    {
      icon: BookOpen,
      title: "Study Material Preview",
      description: "Get a glimpse of our comprehensive study material",
    },
    {
      icon: Headphones,
      title: "Doubt Resolution",
      description: "Ask questions and get instant clarifications",
    },
  ]

  const facultyHighlights = [
    {
      name: "Prof. Rajesh Kumar",
      subject: "Physics",
      qualification: "IIT Delhi, PhD",
      experience: "15+ Years",
      image: "/imgMotion/Proffesors/pro1.jpeg",
      specialization: "Mechanics & Thermodynamics",
    },
    {
      name: "Dr. Priya Singh",
      subject: "Chemistry",
      qualification: "AIIMS Delhi, MD",
      experience: "12+ Years",
      image: "/imgMotion/Proffesors/prof2.jpeg",
      specialization: "Organic Chemistry",
    },
    {
      name: "Prof. Amit Verma",
      subject: "Mathematics",
      qualification: "IIT Kanpur, M.Tech",
      experience: "18+ Years",
      image: "/imgMotion/Proffesors/prof3.jpeg",
      specialization: "Calculus & Algebra",
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
              Book Your Free Demo Class
              <span className="block text-blue-600">Experience Excellence</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Get a firsthand experience of our teaching methodology, faculty expertise, and learning environment
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Play className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">Live Interactive</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">90 Minutes</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">Expert Faculty</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">100% Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Choose Your Demo Class</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Select the program that matches your academic goals and experience our teaching excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {demoOptions.map((option, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${option.color} cursor-pointer`}
                onClick={() => setSelectedSubject(option.title)}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <option.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{option.title}</h3>
                    <p className="text-slate-600">Duration: {option.duration}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {option.subjects.map((subject, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-800 border-blue-200">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">What You'll Experience:</h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${
                      selectedSubject === option.title
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-slate-600 hover:bg-slate-700"
                    } text-white`}
                  >
                    {selectedSubject === option.title ? "Selected" : "Select This Demo"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Book Your Demo Class</h2>
            <p className="text-xl text-slate-600">Fill in your details to schedule your free demo session</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Student Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter student name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Parent/Guardian Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter parent/guardian name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Class/Status *</label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select class/status</option>
                      <option value="9th">Class 9th</option>
                      <option value="10th">Class 10th</option>
                      <option value="11th">Class 11th</option>
                      <option value="12th">Class 12th</option>
                      <option value="12th-pass">12th Pass (Dropper)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Demo Type *</label>
                    <select
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                      <option value="">Choose demo type</option>
                      <option value="JEE Demo Class">JEE Demo Class</option>
                      <option value="NEET Demo Class">NEET Demo Class</option>
                      <option value="Foundation Demo Class">Foundation Demo Class</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time Slot *</label>
                    <select
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    >
                      <option value="">Choose time slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any specific topics or questions you'd like to focus on..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-slate-700">
                    I agree to receive updates about the demo class and Motion Academy programs via SMS/Email
                  </label>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
                  Book Free Demo Class
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">What to Expect in Your Demo</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience our teaching methodology and get a taste of what makes Motion Academy special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Meet Our Demo Faculty</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Learn from experienced educators who will conduct your demo session
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyHighlights.map((faculty, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{faculty.name}</h4>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-2">{faculty.subject}</Badge>
                  <p className="text-green-600 font-semibold mb-2">{faculty.qualification}</p>
                  <p className="text-slate-600 text-sm mb-2">{faculty.experience}</p>
                  <p className="text-slate-500 text-xs">{faculty.specialization}</p>
                  <div className="flex justify-center mt-3">
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
      <section className="py-20 bg-gradient-to-br from-[#E6F0FF] to-[#D1E2FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Ready to Experience Excellence?</h2>
          <p className="text-xl text-slate-700 mb-8">
            Book your free demo class today and discover why thousands of students choose Vector Academy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Book Demo Class Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Call for Assistance
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>100% Free Demo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Expert Faculty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-bold mb-4">
                Vector<span className="text-orange-500">Academy</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Experience our world-class teaching methodology through a free demo class. No commitments, just
                excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Demo Classes</h4>
              <ul className="space-y-2 text-slate-300">
                <li>JEE Demo</li>
                <li>NEET Demo</li>
                <li>Foundation Demo</li>
                <li>Online Demo</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li>+91-744-2423456</li>
                <li>demo@motion.ac.in</li>
                <li>Live Chat Support</li>
                <li>
                  <Link href="/trial" className="hover:text-orange-400 transition-colors">
                    Free Trial
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Vector Academy. All rights reserved. | Experience excellence through our demo classes</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
