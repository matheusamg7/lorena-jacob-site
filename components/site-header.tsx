"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Mail, User, Instagram, Facebook } from 'lucide-react'
import ContactDialog from "./contact-dialog"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"

// Navegação simplificada mantendo apenas os emojis essenciais de forma sutil
const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre mim" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Loja" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(72)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }
    
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [])

  return (
    <>
      <header 
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200/50 transition-all duration-300",
          isScrolled && "shadow-sm"
        )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
          {/* Logo com hover sutil */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/assets/logoLorena.svg"
              alt="Lorena Jacob - Terapeuta Infantil"
              width={150}
              height={40}
              className="h-10 sm:h-12 w-auto transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          {/* Navegação desktop minimalista */}
          <nav className="hidden lg:flex items-center space-x-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-sky-500 relative",
                  pathname === item.href 
                    ? "text-sky-500" 
                    : "text-slate-600"
                )}
              >
                {item.label}
                {/* Indicador sutil para página ativa */}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Ações do usuário */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Redes sociais minimalistas */}
            <div className="flex items-center space-x-2">
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="p-2 text-slate-500 hover:text-sky-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="p-2 text-slate-500 hover:text-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Divisor sutil */}
            <div className="h-5 w-px bg-slate-300" />
            
            {/* Minha Conta */}
            <Link href="/minha-conta">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-sky-500 hover:bg-sky-50 transition-colors duration-200"
              >
                <User className="w-4 h-4 mr-2" />
                Minha Conta
              </Button>
            </Link>

            {/* Botão de contato destacado */}
            <ContactDialog>
              <Button
                size="sm"
                className="bg-sky-500 hover:bg-sky-600 text-white shadow-sm hover:shadow-md transition-all duration-200 px-6"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contato
              </Button>
            </ContactDialog>
          </div>

          {/* Menu mobile e tablet */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="p-2 text-slate-500 hover:text-sky-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank"
              className="p-2 text-slate-500 hover:text-blue-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-slate-300 hover:bg-slate-50 transition-colors duration-200" 
                  aria-label="Abrir menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center">
                    <Image
                      src="/assets/logoLorena.svg"
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
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-3 py-3 text-sm font-medium transition-colors duration-200 rounded-lg",
                        pathname === item.href 
                          ? "text-sky-500 bg-sky-50" 
                          : "text-slate-700 hover:text-sky-500 hover:bg-slate-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Divisor */}
                  <div className="border-t border-slate-200 my-4" />
                  
                  {/* Minha Conta mobile */}
                  <Link href="/minha-conta">
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-3 py-3 text-slate-700 hover:text-sky-500 hover:bg-slate-50"
                    >
                      <User className="w-4 h-4 mr-3" />
                      Minha Conta
                    </Button>
                  </Link>

                  {/* Botão de contato mobile */}
                  <div className="pt-2 px-4">
                    <ContactDialog>
                      <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-lg">
                        <Mail className="w-4 h-4 mr-2" />
                        Fale Comigo
                      </Button>
                    </ContactDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    
    {/* Botão ACESSE A LOJA - Visível em mobile e tablet, abaixo da header */}
    <div 
      className="lg:hidden sticky z-40"
      style={{ top: `${headerHeight}px` }}
    >
      <Link href="/shop">
        <Button
          className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white font-bold py-3 text-sm uppercase tracking-wide rounded-none border-0 transition-all duration-300"
        >
          ACESSE A LOJA
        </Button>
      </Link>
    </div>
    </>
  )
}