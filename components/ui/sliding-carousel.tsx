"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"

interface SlideItem {
  id: number
  image: string
  title?: string
  description?: string
}

interface SlidingCarouselProps {
  items: SlideItem[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  className?: string
}

export function SlidingCarousel({ 
  items, 
  autoPlay = true, 
  interval = 4000, 
  showControls = true,
  className = ""
}: SlidingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, items.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0 relative">
            <Image
              src={item.image}
              alt={`Slide ${item.id}`}
              width={1920}
              height={600}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-contain bg-gradient-to-r from-orange-500 to-red-500"
            />
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-300"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-300"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}