"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const pathname = usePathname()

  const handleSupportClick = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 1000)
    }
  }

  useEffect(() => {
    if (isBlinking) {
      const footer = document.querySelector('footer')
      if (footer) {
        footer.classList.add('animate-pulse')
        setTimeout(() => footer.classList.remove('animate-pulse'), 1000)
      }
    }
  }, [isBlinking])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const getLinkClass = (path: string) => {
    return isActive(path)
      ? "text-orange-500 px-3 py-2 text-sm font-medium"
      : "text-slate-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
  }

  const getMobileLinkClass = (path: string) => {
    return isActive(path)
      ? "block px-3 py-2 text-base font-medium text-orange-500 bg-orange-50 rounded-md"
      : "block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-800">
                Vector<span className="text-orange-500">Academy</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1">
            <div className="flex items-center justify-center space-x-6">
              <Link href="/" className={getLinkClass("/")}>
                Home
              </Link>
              <Link href="/centers" className={getLinkClass("/centers")}>
                Our Centers
              </Link>
              <div className="relative group">
                <button
                  className={`${isActive("/classroom") ? "text-orange-500" : "text-slate-700 hover:text-orange-500"} px-3 py-2 text-sm font-medium transition-colors flex items-center`}
                >
                  Classroom
                  <ChevronRight className="ml-1 h-4 w-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                  <Link
                    href="/classroom/neet"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    NEET
                  </Link>
                  <Link
                    href="/classroom/jee"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    JEE
                  </Link>
                  <Link
                    href="/classroom/foundation"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Foundation
                  </Link>
                </div>
              </div>
              <Link href="/residential" className={getLinkClass("/residential")}>
                Residential
              </Link>
              <Link href="/online" className={getLinkClass("/online")}>
                Online
              </Link>
              <Link href="/pay-fee" className={getLinkClass("/pay-fee")}>
                Pay Fee
              </Link>
              <Link href="/scholarship" className={getLinkClass("/scholarship")}>
                Scholarship
              </Link>
              <Link href="/results" className={getLinkClass("/results")}>
                Results
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            <Button 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              onClick={handleSupportClick}
            >
              Support
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              {pathname === "/demo" ? (
                <Link href="/trial">Start Trial</Link>
              ) : (
                <Link href="/demo">Book Demo</Link>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 hover:bg-orange-50 transition-colors duration-200"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t shadow-lg">
          <Link href="/" className={`${getMobileLinkClass("/")} transition-all duration-200 hover:scale-105`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/centers" className={`${getMobileLinkClass("/centers")} transition-all duration-200 hover:scale-105`} onClick={() => setIsMenuOpen(false)}>
            Our Centers
          </Link>
          <div className="px-3 py-2">
            <div className={`text-base font-medium mb-2 transition-colors duration-200 ${isActive("/classroom") ? "text-orange-500 bg-orange-50 rounded-md px-3 py-2" : "text-slate-700"}`}>
              Classroom Programs
            </div>
            <div className="pl-4 space-y-1">
              <Link
                href="/classroom/neet"
                className="block py-2 text-sm text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-md px-2 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                NEET Preparation
              </Link>
              <Link
                href="/classroom/jee"
                className="block py-2 text-sm text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-md px-2 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                JEE Preparation
              </Link>
              <Link
                href="/classroom/foundation"
                className="block py-2 text-sm text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-md px-2 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Foundation
              </Link>
            </div>
          </div>
          <Link href="/residential" className={`${getMobileLinkClass("/residential")} transition-all duration-200 hover:scale-105`} onClick={() => setIsMenuOpen(false)}>
            Residential
          </Link>
          <Link href="/online" className={`${getMobileLinkClass("/online")} transition-all duration-200 hover:scale-105`} onClick={() => setIsMenuOpen(false)}>
            Online
          </Link>
          <Link href="/pay-fee" className={`${getMobileLinkClass("/pay-fee")} transition-all duration-200 hover:scale-105`} onClick={() => setIsMenuOpen(false)}>
            Pay Fee
          </Link>
          <Link href="/scholarship" className={`${getMobileLinkClass("/scholarship")} transition-all duration-200 hover:scale-105`} onClick={() => setIsMenuOpen(false)}>
            Scholarship
          </Link>
          <Link href="/results" className={`${getMobileLinkClass("/results")} transition-all duration-200 hover:scale-105`} onClick={() => setIsMenuOpen(false)}>
            Results
          </Link>
          
          <div className="pt-4 border-t border-slate-200">
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1 border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-300 transition-all duration-200"
                onClick={() => {
                  handleSupportClick()
                  setIsMenuOpen(false)
                }}
              >
                Support
              </Button>
              <Button 
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {pathname === "/demo" ? (
                  <Link href="/trial">Start Trial</Link>
                ) : (
                  <Link href="/demo">Book Demo</Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
