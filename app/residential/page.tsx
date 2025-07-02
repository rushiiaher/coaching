"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Users,
  BookOpen,
  Utensils,
  Shield,
  Heart,
  Trophy,
  Clock,
  CheckCircle,
  Building,
  Dumbbell,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function ResidentialPage() {

  const campusFeatures = [
    {
      icon: BookOpen,
      title: "Academic Infrastructure",
      features: [
        "Air-conditioned classrooms",
        "Digital smart boards",
        "Laboratory facilities",
        "Library with 10,000+ books",
        "Study halls for self-study",
      ],
    },
    {
      icon: Home,
      title: "Residential Facilities",
      features: [
        "Boys & Girls separate hostels",
        "2/3/4 sharing room options",
        "24/7 security and surveillance",
        "Mess facility with nutritious meals",
        "Medical facility on campus",
      ],
    },
    {
      icon: Dumbbell,
      title: "Sports & Recreation",
      features: [
        "Indoor games room",
        "Outdoor sports facilities",
        "Gym and fitness center",
        "Cultural activity rooms",
        "Recreation areas",
      ],
    },
  ]

  const residentialPackages = [
    {
      title: "JEE Residential Program",
      duration: "2 years (11th & 12th)",
      academicFee: "₹2,50,000",
      hostelFee: "₹1,80,000 per year",
      messFee: "₹60,000 per year",
      totalFee: "₹4,90,000 (2 years)",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      color: "border-blue-200 bg-blue-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "NEET Residential Program",
      duration: "2 years (11th & 12th)",
      academicFee: "₹2,20,000",
      hostelFee: "₹1,80,000 per year",
      messFee: "₹60,000 per year",
      totalFee: "₹4,60,000 (2 years)",
      subjects: ["Physics", "Chemistry", "Biology"],
      color: "border-green-200 bg-green-50",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Dropper Residential Program",
      duration: "1 year",
      academicFee: "₹1,50,000",
      hostelFee: "₹90,000",
      messFee: "₹30,000",
      totalFee: "₹2,70,000",
      subjects: ["JEE/NEET Subjects"],
      color: "border-orange-200 bg-orange-50",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
  ]

  const admissionSteps = [
    {
      step: "1",
      title: "Application Submission",
      description: "Submit your application form with required documents",
    },
    {
      step: "2",
      title: "Entrance Test (MOST)",
      description: "Appear for Motion Open Scholarship Test",
    },
    {
      step: "3",
      title: "Counseling & Seat Allocation",
      description: "Attend counseling session and get seat allocated",
    },
    {
      step: "4",
      title: "Fee Payment & Admission",
      description: "Complete fee payment and confirm admission",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Drona Residential Campus
            <span className="block text-blue-600">Premier Coaching with Accommodation</span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Complete Focus | Expert Faculty | World-Class Facilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-slate-600 font-medium">Campus Security</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-slate-600 font-medium">Hostel Capacity</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-slate-600 font-medium">Focused Environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Campus Overview</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              State-of-the-art facilities designed to provide the perfect environment for focused learning and holistic
              development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campusFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">{feature.title}</h3>
                  <ul className="space-y-3 text-left">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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

      {/* Campus Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Campus Gallery</h2>
            <p className="text-xl text-slate-600">Take a virtual tour of our world-class facilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Digital Classroom", image: "/imgMotion/residential/DigitalClassroom.png" },
              { title: "Student Rooms", image: "/imgMotion/residential/Room.png" },
              { title: "Library", image: "/imgMotion/residential/Library.webp" },
              { title: "Dining Hall", image: "/imgMotion/residential/DiningHall.png" },
              { title: "Sports Complex", image: "/imgMotion/residential/SportComplex.png" },
              { title: "Laboratory", image: "/imgMotion/residential/Laboratory.jpeg" },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Residential Packages</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive packages including academics, accommodation, and meals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residentialPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${pkg.color} relative overflow-hidden`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{pkg.title}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-slate-600">{pkg.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-slate-600">{pkg.subjects.join(", ")}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 p-4 bg-white rounded-lg border">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Academic Fee:</span>
                      <span className="font-semibold text-slate-800">{pkg.academicFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Hostel Fee:</span>
                      <span className="font-semibold text-slate-800">{pkg.hostelFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Mess Fee:</span>
                      <span className="font-semibold text-slate-800">{pkg.messFee}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-800">Total:</span>
                      <span className="font-bold text-lg text-green-600">{pkg.totalFee}</span>
                    </div>
                  </div>

                  <Button className={`w-full text-white ${pkg.buttonColor}`}>Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Admission Process</h2>
            <p className="text-xl text-slate-600">Simple 4-step process to secure your admission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < admissionSteps.length - 1 && (
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

      {/* Why Choose Residential */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Residential Program?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience focused learning in a supportive environment designed for success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe & Secure Environment",
                description: "24/7 security with CCTV surveillance and controlled access",
              },
              {
                icon: Users,
                title: "Peer Learning",
                description: "Learn and grow with like-minded students from across India",
              },
              {
                icon: Clock,
                title: "Structured Schedule",
                description: "Disciplined routine optimized for maximum learning efficiency",
              },
              {
                icon: Heart,
                title: "Holistic Development",
                description: "Focus on academics, sports, and personality development",
              },
              {
                icon: Utensils,
                title: "Nutritious Meals",
                description: "Healthy and balanced meals prepared by professional chefs",
              },
              {
                icon: Trophy,
                title: "Proven Results",
                description: "Higher success rates compared to day-scholar programs",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <benefit.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Get More Information</h2>
            <p className="text-xl text-slate-600">Have questions about our residential program? We're here to help!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="font-semibold text-slate-800">Admission Helpline</p>
                      <p className="text-slate-600">+91-744-2423456</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <p className="text-slate-600">residential@motion.ac.in</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Building className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="font-semibold text-slate-800">Campus Address</p>
                      <p className="text-slate-600">Drona Campus, Kota, Rajasthan</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Schedule Campus Visit</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Quick Inquiry</h3>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                      <option>Select Program</option>
                      <option>JEE Residential</option>
                      <option>NEET Residential</option>
                      <option>Dropper Program</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
