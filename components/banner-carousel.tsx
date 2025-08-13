"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const banners = [
  {
    id: 1,
    src: '/assets/banners/banner-1753819105738.jpg',
    alt: 'Anúncio 1',
    link: '/shop'
  },
  {
    id: 2,
    src: '/assets/banners/banner-1753819796962.jpg',
    alt: 'Anúncio 2',
    link: '/shop'
  }
]

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      )
    }, 8000) // Muda a cada 8 segundos

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-3 sm:pt-8 sm:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {banners.map((banner) => (
                <div key={banner.id} className="w-full flex-shrink-0 px-4 sm:px-0">
                  <a href={banner.link} className="block cursor-pointer">
                    <div className="relative h-[200px] sm:h-[280px] md:h-[380px] lg:h-[450px] overflow-hidden rounded-2xl sm:rounded-none">
                      <Image
                        src={banner.src}
                        alt={banner.alt}
                        fill
                        className="object-contain"
                        priority={banner.id === 1}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>

          </div>
          
          {/* Indicadores - apenas desktop */}
          <div className="hidden sm:flex justify-center gap-3 mt-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'w-12 bg-[#6FB1CE]' 
                    : 'w-2 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Ir para banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}