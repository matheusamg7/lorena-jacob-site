"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, HeartHandshake, Mail } from 'lucide-react'
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
    <header className="w-full border-b bg-white">
      <div className="w-full bg-[#FFFCB3] text-black text-sm">
        <div className="container mx-auto px-4 py-2 text-center">
          Gentle care for growing minds — by Lorena Jacob
        </div>
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-md p-2 bg-[#78BEE0] text-black">
            <HeartHandshake className="w-5 h-5" />
          </span>
          <span className="font-semibold tracking-tight">Lorena Jacob</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium hover:underline underline-offset-4",
                pathname === item.href ? "text-black bg-[#FFFCB3]" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}

          <ContactDialog>
            <Button
              className="ml-2 bg-[#78BEE0] text-black hover:bg-[#69acd0]"
              size="sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </ContactDialog>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-md p-2 bg-[#78BEE0] text-black">
                    <HeartHandshake className="w-5 h-5" />
                  </span>
                  Lorena Jacob
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium",
                      pathname === item.href ? "text-black bg-[#FFFCB3]" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <ContactDialog>
                  <Button className="mt-2 bg-[#78BEE0] text-black hover:bg-[#69acd0]">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </ContactDialog>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
