"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Instagram, Facebook, Check, ShoppingCart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import ContactModal from "@/components/contact-modal"

const nav = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre Mim" },
  { href: "/blog", label: "Blog" },
  { href: "#contato", label: "Contato", isContact: true },
  { href: "/shop", label: "Loja", isShop: true },
]

export default function ShopHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('pt-BR')
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  
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

  return (
    <>
      <header 
        className={cn(
          "sticky top-0 z-50 w-full bg-[#5179c8] backdrop-blur-sm border-b border-[#4169b8]/50 transition-all duration-300 lg:rounded-b-[2.5rem]",
          isScrolled && "shadow-sm"
        )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-lorena-boa.webp"
              alt="Lorena Jacob - Terapeuta Infantil"
              width={280}
              height={80}
              className="h-14 sm:h-16 lg:h-20 w-auto transition-transform duration-200 group-hover:scale-105 brightness-0 invert"
              priority
              quality={100}
            />
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center">
            {nav.map((item, index) => (
              <div key={item.href} className="flex items-center">
                {item.isShop ? (
                  <Link
                    href={item.href}
                    className="ml-3"
                  >
                    <Button
                      className="bg-white hover:bg-gray-100 text-[#5179c8] px-5 py-1 h-7 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md rounded-2xl cursor-pointer"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ) : item.isContact ? (
                  <>
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-white/80 relative group text-white cursor-pointer"
                    >
                      {item.label}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-white/80 relative group",
                        pathname === item.href 
                          ? "text-white font-semibold" 
                          : "text-white"
                      )}
                    >
                      {item.label}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                    {index < nav.length - 1 && !nav[index + 1].isShop && (
                      <div className="h-4 w-px bg-white/30 mx-2" />
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Ações do usuário */}
          <div className="hidden lg:flex items-center">
            {/* Entrar na Conta */}
            <Link href="/minha-conta" className="cursor-pointer transition-transform duration-200 hover:scale-105 inline-block">
              <Image
                src="/minha-conta-shop.svg"
                alt="Minha Conta"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </Link>

            {/* Carrinho */}
            <button className="relative cursor-pointer transition-transform duration-200 hover:scale-105 ml-4">
              <ShoppingCart className="w-8 h-8 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FFD700] text-[#5179c8] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Redes sociais */}
            <div className="flex items-center gap-1 mx-12">
              <Link 
                href="https://instagram.com/lorenajacob.st" 
                target="_blank"
                className="p-1 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7 text-white hover:text-pink-200 transition-colors" />
              </Link>
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="p-1 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7 text-white hover:text-blue-200 transition-colors" />
              </Link>
            </div>
            
            {/* Seletor de idioma */}
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
                src="/minha-conta-shop.svg"
                alt="Minha Conta"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </Link>

            {/* Carrinho mobile */}
            <button className="relative transition-transform duration-200 hover:scale-105">
              <ShoppingCart className="w-7 h-7 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FFD700] text-[#5179c8] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className="hover:bg-white/10 transition-colors duration-200 p-2 rounded-lg" 
                  aria-label="Abrir menu"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center">
                    <Image
                      src="/logo-lorena-boa.webp"
                      alt="Lorena Jacob"
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                
                <div className="mt-8 flex flex-col space-y-1">
                  {/* Navegação mobile */}
                  {nav.map((item) => (
                    item.isShop ? (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2"
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
                          document.querySelector('[data-state="open"]')?.dispatchEvent(
                            new KeyboardEvent('keydown', { key: 'Escape' })
                          )
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
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                  
                  {/* Divisor */}
                  <div className="border-t border-slate-200 my-4" />
                  
                  {/* Entrar na Conta mobile */}
                  <Link href="/minha-conta">
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-3 py-3 text-slate-700 hover:text-[#6FB1CE] hover:bg-slate-50"
                    >
                      <Image
                        src="/minha-conta.svg"
                        alt="Minha Conta"
                        width={16}
                        height={16}
                        className="mr-3"
                      />
                      Entrar na conta
                    </Button>
                  </Link>
                  
                  {/* Redes Sociais mobile */}
                  <div className="flex items-center justify-center gap-4 py-4">
                    <Link 
                      href="https://instagram.com/lorenajacob.st" 
                      target="_blank"
                      className="p-2 transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-[#6FB1CE] hover:text-pink-500 transition-colors" />
                    </Link>
                    <Link 
                      href="https://facebook.com" 
                      target="_blank"
                      className="p-2 transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-[#6FB1CE] hover:text-blue-600 transition-colors" />
                    </Link>
                  </div>
                  
                  {/* Divisor */}
                  <div className="border-t border-slate-200 my-4" />
                  
                  {/* Seletor de idioma mobile */}
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-center px-3 py-3 hover:bg-slate-50 rounded-lg focus:outline-none"
                        aria-label="Selecionar idioma"
                      >
                        <span className="text-xl">{languages.find(l => l.code === selectedLanguage)?.flag}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="min-w-[150px] z-[100]">
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
                            <Check className="w-4 h-4 text-sky-600" />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
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