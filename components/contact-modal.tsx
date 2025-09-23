"use client"

import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      
      // Muda URL para /contato
      if (pathname !== '/contato') {
        window.history.pushState(null, '', '/contato')
      }
      
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
      const onPopState = () => onClose()
      
      window.addEventListener('keydown', onKey)
      window.addEventListener('popstate', onPopState)
      
      return () => {
        document.body.style.overflow = prev
        window.removeEventListener('keydown', onKey)
        window.removeEventListener('popstate', onPopState)
      }
    } else {
      // Volta para a URL anterior quando fechar
      if (pathname === '/contato') {
        router.back()
      }
    }
  }, [isOpen, onClose, pathname, router])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-4xl w-full">
        {/* Close Button - Círculo Ciano - Fora do overflow */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 bg-[#6FB1CE] hover:bg-[#5FA1BE] rounded-full flex items-center justify-center transition-colors shadow-lg z-50"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5 text-white" strokeWidth={3} />
        </button>
        
        {/* Container com overflow */}
        <div className="overflow-hidden rounded-[2rem]">

        {/* Flex Layout - Desktop: Logo Esquerda | Mobile: Logo em cima */}
        <div className="flex flex-col lg:flex-row">
          {/* Coluna Esquerda: Logo (visível apenas no desktop) */}
          <div className="hidden lg:flex items-center justify-center p-10 bg-gray-50/50 min-w-[350px] relative">
            <Image
              src="/logo-lorena-boa.webp"
              alt="Lorena Jacob - Terapeuta Infantil"
              width={260}
              height={100}
              className="w-64 h-auto"
            />
            
            {/* Separador com degradê nas pontas */}
            <div className="absolute right-0 top-0 bottom-0 w-px">
              <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>

          {/* Coluna Direita: Conteúdo */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col items-center">
            {/* Logo no mobile (visível apenas no mobile) */}
            <div className="lg:hidden mb-8 flex justify-center">
              <Image
                src="/logo-lorena-boa.webp"
                alt="Lorena Jacob - Terapeuta Infantil"
                width={200}
                height={70}
                className="w-48 h-auto"
              />
            </div>

            {/* Título */}
            <h2 className="text-center text-[32px] lg:text-[36px] font-bold text-[#2CD155] mb-4">
              Entre em Contato
            </h2>

            {/* Subtítulo */}
            <p className="text-center text-gray-600 mb-8 text-base">
              Entre em contato pelo WhatsApp
            </p>

            {/* Botões - com largura reduzida */}
            <div className="space-y-4 w-full max-w-sm">
              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/5527998206121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold py-3.5 px-5 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg text-base"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chamar no WhatsApp
              </Link>

              {/* Instagram Button - Ícone corrigido */}
              <Link
                href="https://instagram.com/lorenajacob.st"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#87CEEB] hover:bg-[#77BEDB] text-white font-bold py-3.5 px-5 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg text-base"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"/>
                </svg>
                Siga-me no Instagram
              </Link>
            </div>

            {/* Email */}
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <a 
                href="mailto:lorenajacobterapeuta@gmail.com" 
                className="text-gray-700 text-sm hover:text-[#6FB1CE] transition-colors cursor-pointer"
              >
                lorenajacobterapeuta@gmail.com
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}