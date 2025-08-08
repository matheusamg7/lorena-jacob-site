import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactDialog from "@/components/contact-dialog"
import EbookCard from "@/components/ebook-card"
import PostCard from "@/components/post-card"
import { ebooks, posts } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,_#78BEE0_0%,_transparent_60%)]" />
          </div>
          <div className="container mx-auto px-4 py-12 md:py-20 grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-md bg-[#FFFCB3] text-black text-sm mb-4">
                Lorena Jacob — Child Therapist
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Nurturing young minds with care and science‑backed tools
              </h1>
              <p className="mt-4 text-muted-foreground text-lg">
                Practical eBooks and gentle insights to help families build calm routines, emotional literacy, and stronger
                connections.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[#78BEE0] text-black hover:bg-[#69acd0]">
                  <Link href="/shop">Shop eBooks</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">Read the blog</Link>
                </Button>
                <ContactDialog>
                  <Button variant="outline">Contact me</Button>
                </ContactDialog>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Illustration of a therapist and child engaging in play-based therapy"
                width={800}
                height={600}
                className="w-full rounded-xl border bg-white"
              />
            </div>
          </div>
        </section>

        {/* Featured eBooks */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Featured eBooks</h2>
              <p className="text-muted-foreground">Practical guides for everyday parenting moments.</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/shop">View all</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ebooks.slice(0, 4).map((item) => (
              <EbookCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* From the blog */}
        <section className="bg-[#FFFCB3]/40">
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">From the blog</h2>
                <p className="text-muted-foreground">Gentle ideas for calm, connected days.</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/blog">All posts</Link>
              </Button>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="rounded-2xl border bg-white p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#78BEE0] opacity-30" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#FFFCB3] opacity-60" />
            <h3 className="text-2xl md:text-3xl font-bold">Ready to start a calmer routine?</h3>
            <p className="mt-2 text-muted-foreground">
              Explore step-by-step guides crafted for real life with little ones.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[#78BEE0] text-black hover:bg-[#69acd0]">
                <Link href="/shop">Browse the shop</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
