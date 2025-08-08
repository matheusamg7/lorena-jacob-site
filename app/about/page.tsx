import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <Image
              src="/placeholder.svg?height=700&width=900"
              alt="Portrait of Lorena Jacob, child therapist"
              width={900}
              height={700}
              className="w-full rounded-xl border bg-white"
            />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-[#FFFCB3] text-black text-sm mb-4">
              Hi, I’m Lorena
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About me</h1>
            <p className="mt-4 text-muted-foreground">
              I’m a child therapist specializing in play‑based and trauma‑informed approaches. Over the last decade,
              I’ve helped families build calm routines, emotional literacy, and deeper connection.
            </p>
            <p className="mt-4 text-muted-foreground">
              My eBooks transform evidence‑based techniques into practical, doable steps for busy caregivers. I believe
              small, consistent practices create big change.
            </p>
            <ul className="mt-6 grid gap-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#78BEE0]" aria-hidden="true" />
                <span>Licensed therapist with a focus on social‑emotional learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#78BEE0]" aria-hidden="true" />
                <span>Parent coach and classroom consultant</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#78BEE0]" aria-hidden="true" />
                <span>Author of practical guides for everyday moments</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
