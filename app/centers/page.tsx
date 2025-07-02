"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Calendar, Users, Building, GraduationCap, Star, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/shared/Navigation"
import Footer from "@/components/shared/Footer"

export default function CentersPage() {
  const centers = [
    {
      city: "Kota",
      state: "Rajasthan",
      address: "Vector Education Pvt. Ltd, 394-A, Talwandi, Kota, Rajasthan - 324005",
      established: "2006 - Our Flagship Center",
      specialties: ["JEE Advanced", "NEET", "Residential Programs"],
      contact: "+91-744-2423456",
      features: ["5+ Campus Locations", "200+ Faculty", "Hostel Facilities"],
      image: "/imgMotion/Center/center1.jpg",
      isHeadquarters: true,
      students: "15,000+",
      results: "98% Success Rate",
    },
    {
      city: "Delhi",
      state: "Delhi",
      address: "Vector Education, Laxmi Nagar, Delhi - 110092",
      established: "2015",
      specialties: ["JEE Main", "NEET", "Foundation"],
      contact: "+91-11-4567-8901",
      features: ["3 Campus Locations", "80+ Faculty", "Digital Classrooms"],
      image: "/imgMotion/Center/center2.jpg",
      isHeadquarters: false,
      students: "8,000+",
      results: "95% Success Rate",
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Vector Education, Andheri West, Mumbai - 400058",
      established: "2018",
      specialties: ["JEE Main", "NEET", "Olympiad"],
      contact: "+91-22-2345-6789",
      features: ["2 Campus Locations", "60+ Faculty", "Modern Labs"],
      image: "/imgMotion/Center/center3.jpg",
      isHeadquarters: false,
      students: "6,500+",
      results: "94% Success Rate",
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      address: "Vector Education, Koramangala, Bangalore - 560034",
      established: "2019",
      specialties: ["JEE Main", "NEET", "Foundation"],
      contact: "+91-80-1234-5678",
      features: ["2 Campus Locations", "55+ Faculty", "Tech-Enabled Learning"],
      image: "/imgMotion/Center/center4.jpg",
      isHeadquarters: false,
      students: "5,500+",
      results: "93% Success Rate",
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      address: "Vector Education, Madhapur, Hyderabad - 500081",
      established: "2020",
      specialties: ["JEE Main", "NEET", "Foundation"],
      contact: "+91-40-9876-5432",
      features: ["1 Campus Location", "45+ Faculty", "Smart Classrooms"],
      image: "/imgMotion/Center/center5.jpg",
      isHeadquarters: false,
      students: "4,000+",
      results: "92% Success Rate",
    },
    {
      city: "Pune",
      state: "Maharashtra",
      address: "Vector Education, Baner, Pune - 411045",
      established: "2021",
      specialties: ["JEE Main", "NEET", "Foundation"],
      contact: "+91-20-8765-4321",
      features: ["1 Campus Location", "40+ Faculty", "Interactive Learning"],
      image: "/imgMotion/Center/center6.jpg",
      isHeadquarters: false,
      students: "3,500+",
      results: "91% Success Rate",
    },
  ]

  const upcomingCenters = [
    { city: "Chennai", state: "Tamil Nadu", launchDate: "March 2024" },
    { city: "Kolkata", state: "West Bengal", launchDate: "June 2024" },
    { city: "Ahmedabad", state: "Gujarat", launchDate: "August 2024" },
    { city: "Jaipur", state: "Rajasthan", launchDate: "October 2024" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Our <span className="text-orange-500">Centers</span> Across India
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              From our flagship center in Kota to major metropolitan cities, Motion Academy brings world-class coaching
              to your doorstep
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <p className="text-slate-600">Active Centers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">40,000+</div>
                <p className="text-slate-600">Students Enrolled</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <p className="text-slate-600">Expert Faculty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {centers.map((center, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="relative">
                  <Image
                    src={center.image || "/placeholder.svg"}
                    alt={`Motion Academy ${center.city}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {center.isHeadquarters && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white border-0">Headquarters</Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{center.results.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">
                        {center.city}, {center.state}
                      </h3>
                      <p className="text-sm text-slate-500">{center.established}</p>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                      {center.students}
                    </Badge>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-slate-600 leading-relaxed">{center.address}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <a href={`tel:${center.contact}`} className="text-sm text-blue-600 hover:text-blue-800">
                      {center.contact}
                    </a>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {center.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {center.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link href="/demo" className="flex-1">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Book Visit</Button>
                    </Link>
                    <Link href={`tel:${center.contact}`}>
                      <Button variant="outline" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Centers */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Expanding Our Reach</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're coming to more cities soon. Be the first to know when we launch in your city.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingCenters.map((center, index) => (
              <Card
                key={index}
                className="text-center border-2 border-dashed border-slate-300 bg-white hover:border-orange-300 transition-colors"
              >
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">{center.city}</h3>
                  <p className="text-sm text-slate-600 mb-3">{center.state}</p>
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {center.launchDate}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Don't see your city? Let us know where you'd like us next!</p>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent">
              Request New Center
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Centers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Choose Motion Academy Centers?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every Motion Academy center is designed to provide the best learning environment with consistent quality
              across all locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Faculty</h3>
              <p className="text-slate-600">
                IIT/AIIMS graduates and experienced teachers who understand student needs and exam patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Modern Infrastructure</h3>
              <p className="text-slate-600">
                State-of-the-art classrooms, laboratories, and digital learning facilities for enhanced education.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Proven Results</h3>
              <p className="text-slate-600">
                Consistent high success rates across all centers with thousands of students qualifying every year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
