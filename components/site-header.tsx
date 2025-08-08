"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Mail, User, Instagram, Facebook, Heart, Sparkles } from 'lucide-react'
import ContactDialog from "./contact-dialog"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
]

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Banner superior com animação */}
      <div className="w-full bg-gradient-to-r from-[#FFFCB3] via-[#FFE5B4] to-[#FFFCB3] text-black text-sm relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-around opacity-20">
          <Heart className="w-4 h-4 animate-pulse" />
          <Sparkles className="w-4 h-4 animate-pulse delay-100" />
          <Heart className="w-4 h-4 animate-pulse delay-200" />
          <Sparkles className="w-4 h-4 animate-pulse delay-300" />
        </div>
        <div className="container mx-auto px-4 py-2.5 text-center relative font-medium">
          ✨ Gentle care for growing minds — by Lorena Jacob 🌱
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo com hover effect */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#78BEE0] to-[#FFFCB3] rounded-lg opacity-0 group-hover:opacity-30 transition-opacity blur"></div>
              <Image
                src="/assets/logoLorena.svg"
                alt="Lorena Jacob"
                width={150}
                height={40}
                className="h-10 w-auto relative transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Navigation com design melhorado */}
          <nav className="hidden lg:flex items-center gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  pathname === item.href 
                    ? "bg-gradient-to-r from-[#78BEE0] to-[#69acd0] text-white shadow-md" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Botões de ação */}
          <div className="hidden md:flex items-center gap-2">
            {/* Redes sociais */}
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="p-2 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank"
              className="p-2 rounded-full hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            
            <div className="w-px h-6 bg-gray-200 mx-1" />
            
            {/* Minha Conta */}
            <Link href="/minha-conta">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full hover:bg-gray-100"
              >
                <User className="w-4 h-4 mr-2" />
                Minha Conta
              </Button>
            </Link>

            {/* Contact */}
            <ContactDialog>
              <Button
                className="bg-gradient-to-r from-[#78BEE0] to-[#69acd0] text-white hover:shadow-lg transition-all rounded-full"
                size="sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contato
              </Button>
            </ContactDialog>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="p-2 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Open menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/assets/logoLorena.svg"
                      alt="Lorena Jacob"
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-3">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-4 py-2.5 rounded-full text-sm font-medium transition-all",
                        pathname === item.href 
                          ? "bg-gradient-to-r from-[#78BEE0] to-[#69acd0] text-white" 
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="border-t pt-3 mt-2">
                    <Link href="/minha-conta">
                      <Button
                        variant="ghost"
                        className="w-full justify-start rounded-full"
                        size="sm"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Minha Conta
                      </Button>
                    </Link>
                  </div>

                  <ContactDialog>
                    <Button className="w-full bg-gradient-to-r from-[#78BEE0] to-[#69acd0] text-white rounded-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Contato
                    </Button>
                  </ContactDialog>
                  
                  <div className="flex gap-2 justify-center pt-4 border-t">
                    <Link 
                      href="https://instagram.com" 
                      target="_blank"
                      className="p-2.5 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="https://facebook.com" 
                      target="_blank"
                      className="p-2.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
