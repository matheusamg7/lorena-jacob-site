"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Instagram, Facebook, Check } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import ContactModal from "@/components/contact-modal"

// Navegação simplificada mantendo apenas os emojis essenciais de forma sutil
const nav = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre Mim" },
  { href: "/blog", label: "Blog" },
  { href: "#contato", label: "Contato", isContact: true },
  { href: "/shop", label: "Loja", isShop: true },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('pt-BR')
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  
  const languages = [
    { code: 'pt-BR', label: 'Português', flag: '🇧🇷' },
    { code: 'en-US', label: 'English', flag: '🇺🇸' },
    { code: 'es-ES', label: 'Español', flag: '🇪🇸' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Abre modal quando URL é /contato
  useEffect(() => {
    if (pathname === '/contato') {
      setIsContactModalOpen(true)
    }
  }, [pathname])

  return (
    <>
      {/* Menu Mobile Overlay - Fora do header */}
      <>
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-black z-[60] lg:hidden transition-opacity duration-300 ease-in-out",
            isSheetOpen ? "bg-opacity-50 pointer-events-auto" : "bg-opacity-0 pointer-events-none"
          )}
          onClick={() => setIsSheetOpen(false)}
        />

        {/* Menu Panel */}
        <div className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-[70] overflow-y-auto lg:hidden transform transition-transform duration-300 ease-in-out",
          isSheetOpen ? "translate-x-0" : "translate-x-full"
        )}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Image
                src="/logo-lorena-boa.webp"
                alt="Lorena Jacob"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsSheetOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-gray-100"
                aria-label="Fechar menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <div className="p-4">
              <div className="flex flex-col space-y-1">
                {/* Navegação mobile */}
                {nav.map((item) => (
                  item.isShop ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Button className="w-full bg-[#5179C8] hover:bg-[#4169B8] text-white rounded-2xl h-9 py-1 cursor-pointer">
                        {item.label}
                      </Button>
                    </Link>
                  ) : item.isContact ? (
                    <button
                      key={item.href}
                      onClick={() => {
                        setIsContactModalOpen(true)
                        setIsSheetOpen(false)
                      }}
                      className="px-3 py-3 text-sm font-medium transition-colors duration-200 rounded-lg text-slate-700 hover:text-[#6FB1CE] hover:bg-slate-50 text-left w-full cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-3 py-3 text-sm font-medium transition-colors duration-200 rounded-lg",
                        pathname === item.href
                          ? "text-[#6FB1CE] bg-sky-50 font-semibold"
                          : "text-slate-700 hover:text-[#6FB1CE] hover:bg-slate-50"
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
      </>

      <header 
        className={cn(
          "sticky top-0 z-50 w-full bg-white backdrop-blur-sm border-b border-slate-200/50 transition-all duration-300 lg:rounded-b-[2.5rem]",
          isScrolled && "shadow-sm"
        )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
          {/* Logo com hover sutil */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-lorena-boa.webp"
              alt="Lorena Jacob - Terapeuta Infantil"
              width={280}
              height={80}
              className="h-14 sm:h-16 lg:h-20 w-auto transition-transform duration-200 group-hover:scale-105"
              priority
              quality={100}
            />
          </Link>

          {/* Navegação desktop minimalista */}
          <nav className="hidden lg:flex items-center">
            {nav.map((item, index) => (
              <div key={item.href} className="flex items-center">
                {item.isShop ? (
                  <Link
                    href={item.href}
                    className="ml-3"
                  >
                    <Button
                      className="bg-[#5179C8] hover:bg-[#4169B8] text-white px-5 py-1 h-7 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md rounded-2xl cursor-pointer"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ) : item.isContact ? (
                  <>
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-[#6FB1CE] relative group text-slate-700 cursor-pointer"
                    >
                      {item.label}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#6FB1CE] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-[#6FB1CE] relative group",
                        pathname === item.href 
                          ? "text-[#6FB1CE] font-semibold" 
                          : "text-slate-700"
                      )}
                    >
                      {item.label}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#6FB1CE] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                    {index < nav.length - 1 && !nav[index + 1].isShop && (
                      <div className="h-4 w-px bg-slate-300 mx-2" />
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Ações do usuário */}
          <div className="hidden lg:flex items-center">
            {/* Entrar na Conta - maior e mais espaçado */}
            <Link href="/minha-conta" className="cursor-pointer transition-transform duration-200 hover:scale-105 inline-block">
              <Image
                src="/minha-conta.svg"
                alt="Minha Conta"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </Link>
            
            {/* Redes sociais maiores com espaçamento */}
            <div className="flex items-center gap-1 mx-12">
              <Link 
                href="https://instagram.com/lorenajacob.st" 
                target="_blank"
                className="p-1 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7 text-[#6FB1CE] hover:text-pink-500 transition-colors" />
              </Link>
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="p-1 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7 text-[#6FB1CE] hover:text-blue-600 transition-colors" />
              </Link>
            </div>
            
            {/* Seletor de idioma com dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  className="cursor-pointer transition-transform duration-200 hover:scale-105 p-2 focus:outline-none"
                  aria-label="Selecionar idioma"
                >
                  <span className="text-2xl">{languages.find(l => l.code === selectedLanguage)?.flag}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[150px] z-[100]">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setSelectedLanguage(language.code)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.label}</span>
                    </span>
                    {selectedLanguage === language.code && (
                      <Check className="w-4 h-4 text-[#6FB1CE]" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Menu mobile e tablet */}
          <div className="lg:hidden flex items-center gap-4">
            <Link
              href="/minha-conta"
              className="transition-transform duration-200 hover:scale-105"
              aria-label="Minha Conta"
            >
              <Image
                src="/minha-conta.svg"
                alt="Minha Conta"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </Link>
            <button
              onClick={() => setIsSheetOpen(true)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              aria-label="Abrir menu"
            >
              <div className="flex flex-col justify-center items-center w-6">
                <span className={cn(
                  "block h-0.5 w-6 bg-gray-700 rounded-sm transition-all duration-300 ease-in-out origin-center",
                  isSheetOpen && "rotate-45 translate-y-2"
                )}></span>
                <span className={cn(
                  "block h-0.5 w-6 bg-gray-700 rounded-sm mt-1.5 transition-all duration-300 ease-in-out",
                  isSheetOpen && "opacity-0"
                )}></span>
                <span className={cn(
                  "block h-0.5 w-6 bg-gray-700 rounded-sm mt-1.5 transition-all duration-300 ease-in-out origin-center",
                  isSheetOpen && "-rotate-45 -translate-y-2"
                )}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Faixa de Loja no Mobile - Dentro do Header */}
      <div className="lg:hidden bg-[#5179C8] py-2">
      <Link href="/shop" className="block">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-white font-medium text-sm">Acesse nossa Loja Online</span>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
      </div>
    </header>
    
    {/* Contact Modal */}
    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={() => setIsContactModalOpen(false)} 
    />
    </>
  )
}