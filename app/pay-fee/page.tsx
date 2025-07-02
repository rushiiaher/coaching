"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  Smartphone,
  Building,
  Percent,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  Clock,
  Calculator,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function PayFeePage() {
  const [selectedFeeType, setSelectedFeeType] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Credit/Debit Cards",
      description: "Visa, Mastercard, RuPay accepted",
      color: "text-blue-600",
    },
    {
      icon: Building,
      title: "Net Banking",
      description: "All major banks supported",
      color: "text-green-600",
    },
    {
      icon: Smartphone,
      title: "UPI Payment",
      description: "GPay, PhonePe, Paytm, BHIM",
      color: "text-purple-600",
    },
    {
      icon: Calculator,
      title: "EMI Options",
      description: "6-24 months EMI available",
      color: "text-orange-600",
    },
  ]

  const feeTypes = [
    "Classroom Program Fee",
    "Residential Program Fee",
    "Online Course Fee",
    "Hostel Fee",
    "Mess Fee",
    "Test Series Fee",
    "Study Material Fee",
    "Registration Fee",
  ]

  const installmentOptions = [
    {
      title: "Full Payment",
      discount: "5% Discount",
      description: "Pay complete fee at once and save 5%",
      color: "bg-green-50 border-green-200",
      textColor: "text-green-800",
    },
    {
      title: "Two Installments",
      discount: "No Extra Charge",
      description: "Split payment into 2 equal parts",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-800",
    },
    {
      title: "Four Installments",
      discount: "3% Processing Fee",
      description: "Pay in 4 quarterly installments",
      color: "bg-orange-50 border-orange-200",
      textColor: "text-orange-800",
    },
    {
      title: "EMI Options",
      discount: "6-24 Months",
      description: "Flexible EMI with bank partnerships",
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-800",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">


            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Pay Your Fees
              <span className="block text-blue-600">Quick & Secure</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Multiple payment options with secure processing and instant confirmation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">100% Secure</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">Instant Processing</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-medium">Auto Confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Payment Methods</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from multiple secure payment options for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg cursor-pointer"
                onClick={() => setPaymentMethod(method.title)}
              >
                <CardContent className="p-6 text-center">
                  <method.icon className={`h-12 w-12 ${method.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{method.title}</h3>
                  <p className="text-sm text-slate-600">{method.description}</p>
                  {paymentMethod === method.title && <CheckCircle className="h-6 w-6 text-green-500 mx-auto mt-3" />}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Fee Payment Form</h2>
            <p className="text-xl text-slate-600">Fill in your details to proceed with the payment</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Student ID / Registration Number *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your student ID"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Student Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter student name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Fee Type *</label>
                    <select
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedFeeType}
                      onChange={(e) => setSelectedFeeType(e.target.value)}
                    >
                      <option value="">Choose fee type</option>
                      {feeTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Course Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., JEE 2-Year Program"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Fee Amount (₹) *</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Additional Notes (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any additional information..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-slate-700">
                    I agree to the{" "}
                    <Link href="#" className="text-blue-600 hover:text-blue-500">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-blue-600 hover:text-blue-500">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
                  Proceed to Pay
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Installment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Installment Options</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible payment plans to make education affordable for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installmentOptions.map((option, index) => (
              <Card key={index} className={`border-2 ${option.color} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <Percent className={`h-10 w-10 mx-auto mb-4 ${option.textColor}`} />
                  <h3 className={`text-lg font-bold mb-2 ${option.textColor}`}>{option.title}</h3>
                  <Badge className={`mb-3 ${option.color} ${option.textColor} border-0`}>{option.discount}</Badge>
                  <p className="text-sm text-slate-600">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Support */}
      <section className="py-20 bg-gradient-to-br from-[#EFF8FF] to-[#D6EBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Need Help with Payment?</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our support team is available to assist you with any payment-related queries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/60 rounded-lg shadow-sm">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Call Support</h3>
              <p className="text-slate-700 mb-3">Speak directly with our payment support team</p>
              <p className="text-slate-800 font-semibold">+91-744-6677889</p>
              <p className="text-slate-600 text-sm">Mon-Sat: 9 AM - 8 PM</p>
            </div>

            <div className="text-center p-6 bg-white/60 rounded-lg shadow-sm">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Email Support</h3>
              <p className="text-slate-700 mb-3">Send us your payment queries via email</p>
              <p className="text-slate-800 font-semibold">payments@motion.ac.in</p>
              <p className="text-slate-600 text-sm">Response within 24 hours</p>
            </div>

            <div className="text-center p-6 bg-white/60 rounded-lg shadow-sm">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Live Chat</h3>
              <p className="text-slate-700 mb-3">Get instant help through live chat</p>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 mt-2">Start Chat</Button>
              <p className="text-slate-600 text-sm mt-2">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Information */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Your Payment is Secure</h2>
          <p className="text-xl text-slate-600 mb-8">
            We use industry-standard security measures to protect your financial information
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">SSL Encryption</h3>
              <p className="text-slate-600">256-bit SSL encryption for all transactions</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">PCI Compliant</h3>
              <p className="text-slate-600">Payment Card Industry compliant processing</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">Instant Confirmation</h3>
              <p className="text-slate-600">Immediate payment confirmation and receipt</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
