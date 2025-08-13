import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactDialog from "@/components/contact-dialog"
import EbookCard from "@/components/ebook-card"
import PostCard from "@/components/post-card"
import ScrollIndicator from "@/components/scroll-indicator"
import { ebooks, posts } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden min-h-[calc(100vh-72px)]">
          {/* Imagem de fundo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-banner.jpeg"
              alt="Lorena Jacob - Terapeuta Infantil"
              fill
              className="object-cover object-center scale-110 animate-slow-zoom"
              priority
            />
            {/* Gradiente de transição na parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent" />
          </div>
          
          {/* Indicador de scroll */}
          <ScrollIndicator />
          
          {/* Conteúdo */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-72px)] flex items-center">
            <div className="max-w-3xl py-12 pb-32 lg:pl-12">
              <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-bold text-white leading-[1.1]">
                Suporte Personalizado<br />
                para o <span className="text-[#FFFCB3]">Desenvolvimento Infantil</span>
              </h1>
              
              <p className="mt-6 text-[1.125rem] md:text-[1.25rem] text-white/90 max-w-2xl">
                Terapia especializada em crianças com{" "}
                <span className="text-[#FFFCB3] font-semibold">autismo</span>,{" "}
                <span className="text-[#FFFCB3] font-semibold">TDAH</span>
                {" "}e outras necessidades{" "}
                <span className="text-[#FFFCB3] font-semibold">especiais</span>.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <ContactDialog>
                  <Button 
                    className="bg-white hover:bg-gray-100 text-[#6FB1CE] font-bold px-8 py-3 h-auto text-base shadow-lg hover:shadow-xl transition-all duration-200 rounded-full cursor-pointer"
                  >
                    Agende uma avaliação
                  </Button>
                </ContactDialog>
                
                <Link 
                  href="/about"
                  className="text-white font-medium text-base hover:text-[#FFFCB3] underline underline-offset-4 decoration-1 transition-colors duration-200"
                >
                  Conheça a Lorena Jacob
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Serviços */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 - Acompanhamento Personalizado */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src="/Acompanhamento-card.jpg"
                  alt="Acompanhamento Personalizado"
                  fill
                  className="object-cover object-center"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white from-0% via-white/70 via-40% to-transparent to-70%"></div>
                <div className="relative p-8 h-[400px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#27769B] text-center">
                      Acompanhamento<br />Personalizado
                    </h3>
                  </div>
                  <Button 
                    className="w-full bg-[#27769B] hover:bg-[#1e5a79] text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    SAIBA MAIS
                  </Button>
                </div>
              </div>

              {/* Card 2 - Treinamento para Pais & Educadores */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src="/treinamento-card.png"
                  alt="Treinamento para Pais & Educadores"
                  fill
                  className="object-cover object-center"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white from-0% via-white/70 via-40% to-transparent to-70%"></div>
                <div className="relative p-8 h-[400px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#27769B] text-center">
                      Treinamento para<br />Pais & Educadores
                    </h3>
                  </div>
                  <Button 
                    className="w-full bg-[#27769B] hover:bg-[#1e5a79] text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    SAIBA MAIS
                  </Button>
                </div>
              </div>

              {/* Card 3 - Palestras & Consultorias */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src="/palestras.jpg"
                  alt="Palestras & Consultorias"
                  fill
                  className="object-cover object-center scale-110"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white from-0% via-white/70 via-40% to-transparent to-70%"></div>
                <div className="relative p-8 h-[400px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#27769B] text-center">
                      Palestras &<br />Consultorias
                    </h3>
                  </div>
                  <Button 
                    className="w-full bg-[#27769B] hover:bg-[#1e5a79] text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    SAIBA MAIS
                  </Button>
                </div>
              </div>
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
