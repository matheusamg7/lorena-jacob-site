import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactDialog from "@/components/contact-dialog"
import EbookCard from "@/components/ebook-card"
import PostCard from "@/components/post-card"
import ScrollIndicator from "@/components/scroll-indicator"
import BannerCarousel from "@/components/banner-carousel"
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
              <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] font-[family:var(--font-comfortaa)]">
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

        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Sobre Mim */}
        <section className="py-20 pb-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                {/* Card marrom */}
                <div className="bg-[#8B7659] rounded-[2.5rem] min-h-[400px] p-12 pr-12 lg:pr-[200px] lg:mr-[200px] flex items-center">
                  <div className="text-white max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FFFCB2] mb-6 font-[family:var(--font-comfortaa)]">
                      SOBRE MIM
                    </h2>
                    <div className="space-y-3 text-base leading-relaxed">
                      <p>
                        Sou <span className="font-bold">Lorena Jacob</span>, <span className="font-bold">terapeuta infantil</span> e mãe de duas crianças autistas, em formação como <span className="font-bold">Terapeuta Ocupacional</span>. Há <span className="font-bold">mais de 10 anos</span> atuo com <span className="font-bold">TEA, TDAH, TOD, seletividade alimentar e deficiência intelectual</span>, entre outros.
                      </p>
                      <p>
                        Atendo <span className="font-bold">presencialmente em Londres</span> e também <span className="font-bold">online</span>.
                      </p>
                      <p>
                        Ajudo famílias a <span className="font-bold">compreender o autismo</span> com <span className="font-bold">abordagens lúdicas e personalizadas</span>, promovendo avanços no <span className="font-bold">comportamento, linguagem, socialização, autonomia e habilidades cognitivas e motoras</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Imagem da Lorena - Desktop */}
                <div className="absolute right-0 lg:right-4 bottom-12 hidden lg:block">
                  <div className="relative w-[400px] h-[450px]">
                    <Image
                      src="/assets/sobre-lorena.png"
                      alt="Lorena Jacob"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Imagem mobile */}
                <div className="mt-8 flex justify-center lg:hidden">
                  <div className="relative w-[300px] h-[350px]">
                    <Image
                      src="/assets/sobre-lorena.png"
                      alt="Lorena Jacob"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview com Cards Customizados */}
        <section className="relative pt-12 pb-16 mt-8 -mb-8 z-10">
          <div className="absolute inset-0 bg-gray-50 rounded-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.1)]"></div>
          <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Título */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#8B7659] leading-tight font-[family:var(--font-comfortaa)]">
                  Esses e <span className="text-[#8B7659]">outros temas</span> você<br />
                  <span className="text-[#8B7659] italic text-5xl md:text-6xl">encontra no blog</span>
                </h2>
              </div>

              {/* Cards de Artigos com navegação */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
                    <div className="relative h-48">
                      <Image
                        src="/assets/blog-artigos/autismo-na-vida-adulta-1749044146435.jpg"
                        alt="Autismo na Vida Adulta"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#6FB1CE] mb-3">
                        Autismo na Vida Adulta
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
                        Nesse artigo, vamos falar sobre como o autismo pode aparecer na vida adulta, os problemas encarados e a importância de acolher e estar bem informado durante esse processo.
                      </p>
                      <Link href="/blog/autismo-na-vida-adulta">
                        <Button 
                          className="w-full bg-[#1e5a79] hover:bg-[#27769B] text-white font-bold py-3 rounded-lg cursor-pointer mb-4"
                        >
                          SAIBA MAIS
                        </Button>
                      </Link>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>176 visualizações</span>
                        <span>•</span>
                        <span>0 comentários</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
                    <div className="relative h-48">
                      <Image
                        src="/assets/blog-artigos/como-identificar-o-autismo-1746639761424.jpg"
                        alt="Como Identificar o Autismo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#6FB1CE] mb-3">
                        Como Identificar o Autismo
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
                        Descobertas e aprendizados sobre os sinais e características do autismo, ajudando pais e profissionais a identificarem precocemente.
                      </p>
                      <Link href="/blog/como-identificar-o-autismo">
                        <Button 
                          className="w-full bg-[#1e5a79] hover:bg-[#27769B] text-white font-bold py-3 rounded-lg cursor-pointer mb-4"
                        >
                          SAIBA MAIS
                        </Button>
                      </Link>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>542 visualizações</span>
                        <span>•</span>
                        <span>0 comentários</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Setas de navegação */}
                <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  <svg className="w-6 h-6 text-[#8B7659]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  <svg className="w-6 h-6 text-[#8B7659]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Botão CTA */}
              <div className="text-center">
                <Link href="/blog">
                  <Button 
                    className="bg-[#8B7659] hover:bg-[#7A654A] text-white font-bold px-16 py-5 rounded-full text-xl cursor-pointer"
                  >
                    ACESSE O BLOG
                  </Button>
                </Link>
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
