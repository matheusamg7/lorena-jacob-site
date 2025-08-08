import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import EbookCard from "@/components/ebook-card"
import { ebooks } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Shop eBooks</h1>
              <p className="text-muted-foreground">Instant downloads. Practical, gentle, and research‑informed.</p>
            </div>
            <Badge className="bg-[#FFFCB3] text-black hover:bg-[#FFFCB3]">New releases</Badge>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ebooks.map((item) => (
              <EbookCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
