import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Mail } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">About Lorena</h3>
          <p className="text-muted-foreground">
            Child therapist and author helping families nurture social-emotional skills through evidence‑based strategies,
            eBooks, and gentle guidance.
          </p>
          <div className="inline-block px-3 py-1 rounded-md bg-[#FFFCB3] text-black text-sm">
            Brand color: #78BEE0
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline underline-offset-4" href="/">Home</Link></li>
            <li><Link className="hover:underline underline-offset-4" href="/about">About me</Link></li>
            <li><Link className="hover:underline underline-offset-4" href="/blog">Blog</Link></li>
            <li><Link className="hover:underline underline-offset-4" href="/shop">Shop</Link></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-muted-foreground text-sm">Tips and new releases in your inbox.</p>
          <form className="flex gap-2">
            <Input type="email" placeholder="you@example.com" aria-label="Email address" />
            <Button className="bg-[#78BEE0] text-black hover:bg-[#69acd0]">Subscribe</Button>
          </form>
          <div className="flex items-center gap-3 pt-2">
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Email" className="text-muted-foreground hover:text-foreground">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Lorena Jacob. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline underline-offset-4">Privacy</Link>
            <Link href="#" className="hover:underline underline-offset-4">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
