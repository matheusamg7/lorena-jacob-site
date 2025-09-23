"use client"

import { useEffect } from 'react'

export default function ScrollIndicator() {
  useEffect(() => {
    // Adiciona a animação via CSS quando o componente monta
    const style = document.createElement('style')
    style.textContent = `
      @keyframes mouseScrollAnimation {
        0%, 100% {
          transform: translateY(0);
          opacity: 1;
        }
        50% {
          transform: translateY(10px);
          opacity: 0.3;
        }
      }
      .mouse-scroll-dot {
        animation: mouseScrollAnimation 1.5s ease-in-out infinite;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
      <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors duration-300">
        <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mouse-scroll-dot" />
      </div>
    </div>
  )
}