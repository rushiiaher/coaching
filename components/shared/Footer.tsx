import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, Twitter, Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl sm:text-3xl font-bold mb-4">
              Vector<span className="text-orange-500">Academy</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Vector Education Pvt. Ltd. is India's leading coaching institute for JEE, NEET, and competitive exam
              preparation. Founded in 2006 in Kota, we have helped over 50,000 students achieve their dreams with our
              proven teaching methodology.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="https://www.facebook.com/motionkota"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors duration-300"
              >
                <Facebook className="h-4 w-4" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/c/MotionEducation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-red-600 px-3 py-2 rounded-lg transition-colors duration-300"
              >
                <Youtube className="h-4 w-4" />
                <span className="text-sm">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/motion_education"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-pink-600 px-3 py-2 rounded-lg transition-colors duration-300"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://twitter.com/motion_edu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-blue-400 px-3 py-2 rounded-lg transition-colors duration-300"
              >
                <Twitter className="h-4 w-4" />
                <span className="text-sm">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/company/motion-education"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">Programs</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/classroom/jee" className="hover:text-orange-400 transition-colors flex items-center">
                  JEE Preparation
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/classroom/neet" className="hover:text-orange-400 transition-colors flex items-center">
                  NEET Preparation
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/classroom/foundation"
                  className="hover:text-orange-400 transition-colors flex items-center"
                >
                  Foundation Program
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/residential" className="hover:text-orange-400 transition-colors flex items-center">
                  Residential Program
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="/online" className="hover:text-orange-400 transition-colors flex items-center">
                  Online Courses
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/centers" className="hover:text-orange-400 transition-colors">
                  Our Centers
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-orange-400 transition-colors">
                  Results & Achievements
                </Link>
              </li>
              <li>
                <Link href="/scholarship" className="hover:text-orange-400 transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-orange-400 transition-colors">
                  Free Demo Class
                </Link>
              </li>
              <li>
                <Link href="/trial" className="hover:text-orange-400 transition-colors">
                  Free Trial
                </Link>
              </li>
              <li>
                <Link href="/pay-fee" className="hover:text-orange-400 transition-colors">
                  Pay Fees Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">Contact Us</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Head Office</p>
                  <p className="text-sm leading-relaxed">
                    Vector Education Pvt. Ltd.
                    <br />
                    394-A, Talwandi, Kota
                    <br />
                    Rajasthan - 324005, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+917442423456" className="text-sm hover:text-orange-400 transition-colors">
                    +91-744-2423456
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@motion.ac.in" className="text-sm hover:text-orange-400 transition-colors">
                    info@vector.ac.in
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-white mb-2">Student Helpline</p>
                <p className="text-sm text-slate-300">
                  Mon-Sat: 9:00 AM - 8:00 PM
                  <br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>&copy; 2024 Vector Education Pvt. Ltd. All rights reserved.</p>
              <p className="mt-1">CIN: U80302RJ2006PTC024625 | GSTIN: 08AABCM1234F1Z5</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="hover:text-orange-400 transition-colors">
                Refund Policy
              </Link>
              <Link href="/careers" className="hover:text-orange-400 transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
