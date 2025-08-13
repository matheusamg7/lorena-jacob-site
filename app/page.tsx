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
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Título fora do card marrom */}
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#8B7659] font-[family:var(--font-comfortaa)]">
                  SOBRE MIM
                </h2>
              </div>
              
              <div className="relative">
                {/* Foto da Lorena posicionada no canto */}
                <div className="absolute left-4 lg:left-8 top-0 z-20 hidden lg:block">
                  <div className="relative w-[350px] h-[400px]">
                    <Image
                      src="/assets/sobre-lorena.png"
                      alt="Lorena Jacob"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                
                {/* Card marrom */}
                <div className="bg-[#8B7659] rounded-[3rem] overflow-hidden relative z-10">
                  <div className="flex flex-col lg:flex-row items-center py-8">
                    {/* Espaçador para a foto no desktop */}
                    <div className="hidden lg:block lg:w-1/3"></div>
                    
                    {/* Foto no mobile */}
                    <div className="lg:hidden p-4">
                      <div className="relative w-full h-[280px]">
                        <Image
                          src="/assets/sobre-lorena.png"
                          alt="Lorena Jacob"
                          fill
                          className="object-contain drop-shadow-2xl"
                          priority
                        />
                      </div>
                    </div>
                    
                    {/* Texto */}
                    <div className="lg:w-2/3 p-6 lg:pr-12">
                      <div className="text-white space-y-3 max-w-3xl">
                        <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                          <p className="text-base leading-relaxed">
                            Sou <span className="font-bold text-[#FFFCB2]">Lorena Jacob</span>, terapeuta infantil e mãe de duas crianças autistas, em formação como <span className="font-bold text-[#FFFCB2]">Terapeuta Ocupacional</span>.
                          </p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                          <p className="text-base leading-relaxed">
                            Há <span className="font-bold text-[#FFFCB2]">mais de 10 anos</span> atuo com TEA, TDAH, TOD, seletividade alimentar e deficiência intelectual, entre outros. Atendo presencialmente em <span className="font-bold text-[#FFFCB2]">Londres</span> e também online.
                          </p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                          <p className="text-base leading-relaxed">
                            Ajudo famílias a compreender o autismo com <span className="font-bold text-[#FFFCB2]">abordagens lúdicas e personalizadas</span>, promovendo avanços no comportamento, linguagem, socialização, autonomia e habilidades cognitivas e motoras.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview com Cards Customizados */}
        <section className="relative pt-12 pb-16 mt-8 -mb-8 z-10">
          <div className="absolute inset-0 bg-gray-50 rounded-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"></div>
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

        {/* Seção Redes Sociais */}
        <section className="relative py-20 bg-white -mt-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="relative bg-[#8B7659] rounded-[3rem] overflow-hidden h-[500px] lg:h-[600px]">
                {/* Imagem de fundo com overlay */}
                <div className="absolute inset-0">
                  <Image
                    src="/assets/lorena-redes.jpg"
                    alt="Lorena Jacob"
                    fill
                    className="object-cover object-center opacity-40 blur-[2px]"
                  />
                </div>
                
                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center p-8 lg:p-12 gap-8 h-full">
                  {/* Texto à esquerda */}
                  <div className="flex-1 text-white lg:pl-12">
                    <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                      SIGA-ME NAS
                    </h2>
                    <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-[#FFFCB3] -mt-2">
                      REDES SOCIAIS
                    </h2>
                    
                    <div className="flex items-center gap-3 mb-8 text-2xl">
                      {/* Instagram */}
                      <Link href="https://instagram.com/lorenajacob.st" target="_blank" className="text-white hover:text-[#FFFCB3] transition-colors">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="28" 
                          height="28" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M7.0301 0.00012207C2.22174 0.00012207 0 2.5218 0 7.0301V16.9699C0 21.7783 2.22174 24 7.0301 24H16.9699C21.7783 24 24 21.7783 24 16.9699V7.0301C24 2.22174 21.4779 0 16.9699 0L7.0301 0.00012207ZM19 4C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6C18.4477 6 18 5.55228 18 5C18 4.44772 18.4477 4 19 4ZM12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"/>
                        </svg>
                      </Link>
                      {/* Facebook */}
                      <Link href="https://facebook.com/lorenajacob.st" target="_blank" className="text-white hover:text-[#FFFCB3] transition-colors">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </Link>
                      <span className="font-bold">/@lorenajacob.st</span>
                    </div>
                    
                    <Link href="https://instagram.com/lorenajacob.st" target="_blank">
                      <Button className="bg-[#FFFCB3] hover:bg-[#f5f2a0] text-[#8B7659] font-bold px-10 py-6 rounded-full text-xl">
                        SIGA O MEU PERFIL
                      </Button>
                    </Link>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-6 left-6">
                      <svg className="w-24 h-24 text-white/20" viewBox="0 0 100 100">
                        <path d="M10 50 Q 30 10, 50 50 T 90 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Mockup do Instagram à direita */}
                  <div className="relative flex items-center">
                    <div className="relative w-[300px] h-[600px] lg:w-[340px] lg:h-[680px]">
                      <Image
                        src="/assets/mockinsta.webp"
                        alt="Instagram Lorena Jacob"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="w-full">
          <Image
            src="/assets/separador.png"
            alt="Separador"
            width={1920}
            height={80}
            className="w-full h-auto"
          />
        </div>

        {/* Seção de Depoimentos */}
        <section className="py-20" style={{ backgroundColor: '#FAFFE7' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#6FB1CE] font-[family:var(--font-comfortaa)]">
                DEPOIMENTOS
              </h2>
            </div>

            {/* Carousel de Depoimentos */}
            <div className="relative max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-4">
                {/* Botão Anterior */}
                <button className="bg-[#6FB1CE] rounded-full p-3 hover:bg-[#5fa0bf] transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Cards de Depoimentos */}
                <div className="flex gap-6 overflow-hidden">
                  {/* Depoimento 1 */}
                  <div className="bg-white rounded-2xl p-8 min-w-[320px] max-w-[320px] flex-shrink-0">
                    <p className="text-gray-700 text-base mb-4 italic">
                      "Que no mundo venha ter mais profissionais assim como você."
                    </p>
                    <h4 className="font-bold text-gray-900 text-center text-lg">Bruna</h4>
                  </div>

                  {/* Depoimento 2 */}
                  <div className="bg-white rounded-2xl p-8 min-w-[320px] max-w-[320px] flex-shrink-0">
                    <p className="text-gray-700 text-base mb-4 italic">
                      "Que no mundo venha ter mais profissionais assim como você."
                    </p>
                    <h4 className="font-bold text-gray-900 text-center text-lg">Luana</h4>
                  </div>

                  {/* Depoimento 3 */}
                  <div className="bg-white rounded-2xl p-8 min-w-[320px] max-w-[320px] flex-shrink-0">
                    <p className="text-gray-700 text-base mb-4 italic">
                      "Meu filho evoluiu muito com suas técnicas e abordagem personalizada."
                    </p>
                    <h4 className="font-bold text-gray-900 text-center text-lg">Michele</h4>
                  </div>
                </div>

                {/* Botão Próximo */}
                <button className="bg-[#6FB1CE] rounded-full p-3 hover:bg-[#5fa0bf] transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Indicadores */}
              <div className="flex justify-center gap-2 mt-8">
                <span className="w-8 h-2 bg-[#6FB1CE] rounded-full"></span>
                <span className="w-8 h-2 bg-[#6FB1CE]/30 rounded-full"></span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
