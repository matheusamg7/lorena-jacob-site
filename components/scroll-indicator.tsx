"use client"

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
      <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors duration-300">
        <div 
          className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          style={{
            animation: 'bounce 2s ease-in-out infinite'
          }}
        />
      </div>
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(16px);
          }
        }
      `}</style>
    </div>
  )
}