"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  CheckCircle,
  Video,
  Download,
  BookOpen,
  Star,
  Zap,
  Shield,
  Gift,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function FreeTrialPage() {
  const [selectedPlan, setSelectedPlan] = useState("")

  const trialPlans = [
    {
      title: "JEE Free Trial",
      duration: "7 Days",
      originalPrice: "₹5,000",
      trialPrice: "FREE",
      features: [
        "5 Live Classes",
        "Complete Study Material",
        "Mock Test Access",
        "Doubt Resolution",
        "Performance Analytics",
        "Mobile App Access",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
      icon: Zap,
      color: "border-blue-500",
      highlight: "Most Popular",
    },
    {
      title: "NEET Free Trial",
      duration: "7 Days",
      originalPrice: "₹4,500",
      trialPrice: "FREE",
      features: [
        "5 Live Classes",
        "NCERT Based Content",
        "Biology Practicals",
        "Test Series",
        "Study Notes",
        "Expert Guidance",
      ],
      subjects: ["Physics", "Chemistry", "Biology"],
      icon: BookOpen,
      color: "border-green-500",
      highlight: "High Success Rate",
    },
    {
      title: "Foundation Free Trial",
      duration: "5 Days",
      originalPrice: "₹3,000",
      trialPrice: "FREE",
      features: [
        "3 Live Classes",
        "Concept Building",
        "Interactive Sessions",
        "Practice Problems",
        "Parent Updates",
        "Learning Games",
      ],
      subjects: ["Mathematics", "Science", "Mental Ability"],
      icon: Gift,
      color: "border-orange-500",
      highlight: "Foundation Building",
    },
  ]

  const trialBenefits = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      description: "Attend real classes with expert faculty and interact in real-time",
    },
    {
      icon: Download,
      title: "Complete Study Material",
      description: "Access to comprehensive study material and practice questions",
    },
    {
      icon: Users,
      title: "Doubt Resolution",
      description: "Get your doubts cleared by expert faculty during trial period",
    },
    {
      icon: Shield,
      title: "No Hidden Charges",
      description: "Completely free trial with no credit card required",
    },
  ]

  const trialIncludes = [
    "Live interactive classes with expert faculty",
    "Complete access to study material and notes",
    "Mock tests and practice questions",
    "Performance tracking and analytics",
    "Mobile app access for learning on-the-go",
    "Doubt resolution sessions",
    "Parent progress updates",
    "Career counseling session",
  ]

  const studentTestimonials = [
    {
      name: "Aarav Sharma",
      class: "Class 11th",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "The free trial convinced me that Motion Academy was the right choice. The teaching quality is exceptional!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      class: "Class 12th",
      image: "/placeholder.svg?height=60&width=60",
      quote: "I was amazed by the interactive classes and doubt resolution. Enrolled immediately after the trial.",
      rating: 5,
    },
    {
      name: "Rohit Kumar",
      class: "Dropper",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "The trial period helped me understand their teaching methodology. It's exactly what I needed for JEE prep.",
      rating: 5,
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
              Start Your Free Trial
              <span className="block text-green-600">Experience Before You Commit</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Get full access to our premium courses for 7 days absolutely free. No credit card required, no hidden
              charges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">7 Days Free</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">No Credit Card</p>
              </div>
              <div className="text-center">
                <Video className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">Live Classes</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">Full Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Choose Your Free Trial</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Select the program that matches your goals and start learning immediately
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trialPlans.map((plan, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${plan.color} relative overflow-hidden cursor-pointer`}
                onClick={() => setSelectedPlan(plan.title)}
              >
                {plan.highlight && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white border-0 z-10">{plan.highlight}</Badge>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <plan.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.title}</h3>
                    <p className="text-slate-600">{plan.duration} Free Access</p>
                  </div>

                  <div className="text-center mb-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-green-600">{plan.trialPrice}</span>
                      <span className="text-lg text-slate-500 line-through">{plan.originalPrice}</span>
                    </div>
                    <p className="text-sm text-slate-600">Complete {plan.duration} Access</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Subjects Included:</h4>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {plan.subjects.map((subject, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-800 border-blue-200">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Trial Includes:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${
                      selectedPlan === plan.title
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-slate-600 hover:bg-slate-700"
                    } text-white`}
                  >
                    {selectedPlan === plan.title ? "Selected" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Start Your Free Trial</h2>
            <p className="text-xl text-slate-600">
              Fill in your details to get instant access to your chosen trial program
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Student Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter student name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Parent/Guardian Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter parent/guardian name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Class/Status *</label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                      <option value="">Select class/status</option>
                      <option value="9th">Class 9th</option>
                      <option value="10th">Class 10th</option>
                      <option value="11th">Class 11th</option>
                      <option value="12th">Class 12th</option>
                      <option value="12th-pass">12th Pass (Dropper)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Selected Trial Program *</label>
                    <select
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    >
                      <option value="">Choose trial program</option>
                      <option value="JEE Free Trial">JEE Free Trial</option>
                      <option value="NEET Free Trial">NEET Free Trial</option>
                      <option value="Foundation Free Trial">Foundation Free Trial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How did you hear about us? (Optional)
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option value="">Select source</option>
                    <option value="google">Google Search</option>
                    <option value="facebook">Facebook</option>
                    <option value="youtube">YouTube</option>
                    <option value="friend">Friend/Family</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-slate-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-slate-700">
                    I agree to receive updates about the trial and Motion Academy programs via SMS/Email/WhatsApp
                  </label>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold">
                  Start My Free Trial Now
                </Button>

                <p className="text-center text-sm text-slate-500">
                  By starting the trial, you agree to our Terms of Service and Privacy Policy. No payment required.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trial Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">What's Included in Your Free Trial</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get complete access to our premium features during your trial period
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {trialBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Complete Trial Access Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trialIncludes.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">What Students Say About Our Trial</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from students who experienced our teaching quality through the free trial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{testimonial.name}</h4>
                  <Badge className="bg-green-100 text-green-800 border-green-200 mb-3">{testimonial.class}</Badge>
                  <p className="text-slate-600 italic text-sm mb-4">"{testimonial.quote}"</p>
                  <div className="flex justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of students who discovered their potential through our free trial program
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Start Free Trial Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="/demo">Book Demo First</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-300" />
              <span>7 Days Completely Free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-300" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-300" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
