'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Que no mundo venha ter mais profissionais assim como você.",
    author: "Bruna"
  },
  {
    id: 2,
    text: "Que no mundo venha ter mais profissionais assim como você.",
    author: "Luana"
  },
  {
    id: 3,
    text: "Meu filho evoluiu muito com suas técnicas e abordagem personalizada.",
    author: "Michele"
  },
  {
    id: 4,
    text: "A Lorena transformou a vida da nossa família com sua dedicação e carinho.",
    author: "Patrícia"
  },
  {
    id: 5,
    text: "Profissional excepcional, fez toda diferença no desenvolvimento do meu filho.",
    author: "Ana"
  },
  {
    id: 6,
    text: "Gratidão por todo apoio e orientação. Você é uma luz em nossas vidas!",
    author: "Carla"
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3)
      setCurrentIndex(0) // Reset index when view changes
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalGroups = Math.ceil(testimonials.length / itemsPerView)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalGroups - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {/* Botão Anterior */}
        <button
          onClick={handlePrevious}
          className="bg-[#4A7A98] rounded-full p-2 sm:p-3 hover:bg-[#3a6a88] transition-colors cursor-pointer"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </button>

        {/* Container dos Cards */}
        <div className="overflow-hidden w-full max-w-5xl">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {/* Grupos de depoimentos */}
            {Array.from({ length: totalGroups }).map((_, groupIndex) => (
              <div key={groupIndex} className={`flex gap-4 sm:gap-6 min-w-full ${itemsPerView === 1 ? 'justify-center' : ''}`}>
                {testimonials
                  .slice(groupIndex * itemsPerView, (groupIndex + 1) * itemsPerView)
                  .map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 ${itemsPerView === 1 ? 'max-w-[320px] w-full' : 'flex-1 min-w-0'}`}
                    >
                      <p className="text-[#5B472B] text-sm sm:text-base mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <h4 className="font-bold text-[#5B472B] text-center text-base sm:text-lg">
                        {testimonial.author}
                      </h4>
                    </div>
                  ))}
                {/* Fill empty spaces in the last group if needed */}
                {groupIndex === totalGroups - 1 &&
                  Array.from({
                    length: itemsPerView - (testimonials.length % itemsPerView || itemsPerView)
                  }).map((_, emptyIndex) => (
                    <div key={`empty-${emptyIndex}`} className="flex-1 min-w-0" />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={handleNext}
          className="bg-[#4A7A98] rounded-full p-2 sm:p-3 hover:bg-[#3a6a88] transition-colors cursor-pointer"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-2 rounded-full transition-colors cursor-pointer ${
              index === currentIndex ? 'bg-[#4A7A98]' : 'bg-[#4A7A98]/30'
            }`}
            aria-label={`Ir para grupo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}