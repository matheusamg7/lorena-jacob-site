"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const banners = [
  {
    id: 1,
    src: '/assets/banners/o_ambiente_certo.webp',
    srcMobile: '/assets/banners/o_ambiente_mobile.webp',
    alt: 'Anúncio 1',
    link: '/shop'
  },
  {
    id: 2,
    src: '/assets/banners/voce_conhece_banner.webp',
    srcMobile: '/assets/banners/voce_conhece_mobile.webp',
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
    <section className="py-10 sm:py-2 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {banners.map((banner) => (
                <div key={banner.id} className="w-full flex-shrink-0 px-2 sm:px-0">
                  <a href={banner.link} className="block cursor-pointer">
                    <div className="relative h-[500px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
                      {/* Desktop banner */}
                      <Image
                        src={banner.src}
                        alt={banner.alt}
                        fill
                        className="object-contain hidden sm:block"
                        priority={banner.id === 1}
                      />
                      {/* Mobile banner */}
                      <Image
                        src={banner.srcMobile}
                        alt={banner.alt}
                        fill
                        className="object-contain sm:hidden"
                        priority={banner.id === 1}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}