"use client"

import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PostCard from "@/components/post-card"
import { posts } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { useMemo, useState } from "react"

export default function BlogPage() {
  const [q, setQ] = useState("")

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return posts
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query)
    )
  }, [q])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
              <p className="text-muted-foreground">Gentle ideas, practical tools.</p>
            </div>
            <div className="w-full md:w-80">
              <Input
                placeholder="Search posts…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search blog posts"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-10 text-sm text-muted-foreground">
            Looking for more?{" "}
            <Link href="/" className="underline underline-offset-4">Go back home</Link>.
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
