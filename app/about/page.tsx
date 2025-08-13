import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Instagram, Facebook } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Global Split Background */}
      <div className="fixed inset-0 flex z-0">
        <div className="w-1/2 bg-[#A8D5E5]"></div>
        <div className="w-1/2 bg-white"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <SiteHeader />
        
        <main className="flex-1">
        {/* Hero Section com Layout Split */}
        <section className="relative min-h-[80vh] flex items-center py-12 lg:py-0 -mt-8">
          {/* Background Split - Extended to go behind header */}
          <div className="absolute inset-0 flex" style={{ top: '-2rem' }}>
            {/* Mobile - Full Blue Background */}
            <div className="lg:hidden w-full bg-[#A8D5E5]"></div>
            
            {/* Desktop - Split Background */}
            {/* Left Side - Blue */}
            <div className="hidden lg:block w-1/2 bg-[#A8D5E5] relative overflow-hidden">
              <div className="absolute left-12 top-1/2 -translate-y-1/2 -rotate-90 flex flex-col items-start">
                <h1 className="text-[8rem] font-bold text-white/30 tracking-wider leading-none">
                  Lorena
                </h1>
                <h1 className="text-[8rem] font-bold text-[#9CCDE1] tracking-wider leading-none -mt-12 ml-4">
                  Jacob
                </h1>
              </div>
            </div>
            {/* Right Side - White */}
            <div className="hidden lg:block w-1/2 bg-white"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-center">
              {/* Wrapper for proper positioning */}
              <div className="relative w-full flex items-center justify-center">
                {/* Card - Positioned on the border */}
                <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 bg-[#F4F1E2] rounded-3xl shadow-2xl p-8 lg:p-10 w-full max-w-sm z-20">
                  {/* Profile Photo - No border */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-44 h-44">
                      <Image
                        src="/assets/sobre-mim/lorena perfil 1.png"
                        alt="Lorena Jacob"
                        fill
                        className="object-cover rounded-full"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Name - Reduced line height */}
                  <div className="text-center mb-2">
                    <h2 className="text-[2.5rem] leading-[1] font-bold text-[#5B472B] font-[family:var(--font-comfortaa)]">
                      Lorena<br />Jacob
                    </h2>
                  </div>
                  
                  {/* Cyan Line */}
                  <div className="flex justify-center mb-3">
                    <div className="w-20 h-1 bg-[#6FB1CE]"></div>
                  </div>
                  
                  {/* Title */}
                  <div className="text-center mb-8">
                    <p className="text-xs text-[#5B472B] tracking-[0.3em] uppercase">
                      Terapeuta Infantil
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center items-center gap-2">
                    <Link 
                      href="https://facebook.com/lorenajacob.st" 
                      target="_blank"
                      className="text-[#6FB1CE] hover:opacity-70 transition-opacity"
                    >
                      <Facebook className="w-7 h-7" />
                    </Link>
                    <Link 
                      href="https://instagram.com/lorenajacob.st" 
                      target="_blank"
                      className="text-[#6FB1CE] hover:opacity-70 transition-opacity"
                    >
                      <Instagram className="w-7 h-7" />
                    </Link>
                    <span className="text-[#6FB1CE] text-base font-bold ml-1">/@lorenajacob.st</span>
                  </div>
                </div>
                
                {/* Spacer for desktop to push text to the right */}
                <div className="hidden lg:block lg:w-1/2"></div>
                
                {/* Text Content - Right Side (Desktop Only) */}
                <div className="hidden lg:block lg:absolute lg:left-[70%] lg:w-[28%] lg:top-1/2 lg:-translate-y-1/2 z-30 lg:pr-4">
                  <p className="text-lg text-[#5B472B] mb-4">
                    <span className="font-bold">Eu sou</span> Lorena Jacob, Terapeuta Infantil,
                    especialista em autismo e comorbidades.
                  </p>
                  <p className="text-lg text-[#5B472B] mb-4">
                    <span className="font-bold">Há mais de 10 anos atuo com crianças autistas</span>,
                    ajudando famílias a construírem caminhos mais leves, funcionais e afetivos
                    no desenvolvimento infantil. <span className="font-bold">Estou me formando como 
                    Terapeuta Ocupacional</span> e possuo diversas especializações na área, o
                    que me permite unir técnica, experiência e sensibilidade em cada atendimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* A visão de mãe Section */}
        <section className="py-1 lg:py-2 bg-[#FFFDF2] relative overflow-visible">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Foto à esquerda - maior e sem card */}
                <div className="lg:w-5/12 flex justify-center lg:justify-start relative lg:-ml-8">
                  <div className="relative transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300">
                    <Image
                      src="/assets/sobre-mim/foto filhos.png"
                      alt="Lorena com seus filhos"
                      width={600}
                      height={700}
                      className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-cover"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                </div>
                
                {/* Texto à direita */}
                <div className="lg:w-6/12 text-center lg:text-left relative lg:pr-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#6FB1CE] mb-6 font-[family:var(--font-comfortaa)]">
                    A visão de mãe
                  </h2>
                  
                  <p className="text-lg text-[#5B472B] mb-4">
                    Sou mãe de duas crianças autistas, e essa vivência me permite enxergar o desenvolvimento infantil sob uma perspectiva completa — técnica, prática e emocional.
                  </p>
                  
                  <p className="text-lg text-[#5B472B] mb-8">
                    <span className="font-bold">Eu sei, na prática, o que funciona, o que precisa ser ajustado</span> e como conduzir cada família com empatia, escuta e conhecimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cards Section with Split Background */}
        <section className="relative py-16">
          {/* Split Background */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-[#A8D5E5]"></div>
            <div className="w-1/2 bg-white"></div>
          </div>
          
          {/* Cards Container */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1 - O QUE FAÇO */}
                <div className="relative mt-10">
                  <div className="bg-[#FFFCB3] rounded-t-[60px] rounded-b-3xl p-6 h-full">
                    {/* Icon Container */}
                    <div className="flex justify-center -mt-14 mb-4">
                      <div className="bg-white rounded-2xl p-4 shadow-lg border-[6px] border-[#FFFCB3] hover:scale-110 transition-transform duration-200">
                        <Image
                          src="/assets/sobre-mim/oq-faco.png"
                          alt="O que faço"
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#5B472B] mb-3 text-center">O QUE FAÇO</h3>
                    <p className="text-[#5B472B] text-sm">
                      Há mais de 10 anos, ajudo famílias de <strong>crianças autistas</strong> a construírem um desenvolvimento mais <strong>leve, funcional e efetivo</strong>, com atendimentos personalizados online e presenciais em Londres.
                    </p>
                  </div>
                </div>
                
                {/* Card 2 - COMO CHEGUEI ATÉ AQUI */}
                <div className="relative mt-10">
                  <div className="bg-[#8B7659] rounded-t-[60px] rounded-b-3xl p-6 h-full text-white">
                    {/* Icon Container */}
                    <div className="flex justify-center -mt-14 mb-4">
                      <div className="bg-white rounded-2xl p-4 shadow-lg border-[6px] border-[#8B7659] hover:scale-110 transition-transform duration-200">
                        <Image
                          src="/assets/sobre-mim/como-cheguei.png"
                          alt="Como cheguei"
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">COMO CHEGUEI ATÉ AQUI</h3>
                    <p className="text-sm">
                      Sou mãe de <span className="font-bold">duas crianças autistas</span>, e essa vivência, somada à minha formação em <span className="font-bold">Terapia Ocupacional</span> e especializações na área, me deu uma visão completa — <span className="font-bold">técnica, prática e emocional</span> — sobre o desenvolvimento infantil.
                    </p>
                  </div>
                </div>
                
                {/* Card 3 - ONDE AINDA QUERO CHEGAR */}
                <div className="relative mt-10">
                  <div className="bg-[#FFFCB3] rounded-t-[60px] rounded-b-3xl p-6 h-full">
                    {/* Icon Container */}
                    <div className="flex justify-center -mt-14 mb-4">
                      <div className="bg-white rounded-2xl p-4 shadow-lg border-[6px] border-[#FFFCB3] hover:scale-110 transition-transform duration-200">
                        <Image
                          src="/assets/sobre-mim/onde-qro-chegar.png"
                          alt="Onde quero chegar"
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#5B472B] mb-3 text-center">ONDE QUERO CHEGAR</h3>
                    <p className="text-[#5B472B] text-sm">
                      Quero <strong>ampliar meu alcance</strong>, levando conhecimento e estratégias práticas para <strong>mais famílias</strong>, fortalecendo o cuidado personalizado e tornando o desenvolvimento infantil mais <strong>acessível e significativo</strong>.
                    </p>
                  </div>
                </div>
                
                {/* Card 4 - MEUS SERVIÇOS */}
                <div className="relative mt-10">
                  <div className="bg-[#8B7659] rounded-t-[60px] rounded-b-3xl p-6 h-full text-white">
                    {/* Icon Container */}
                    <div className="flex justify-center -mt-14 mb-4">
                      <div className="bg-white rounded-2xl p-4 shadow-lg border-[6px] border-[#8B7659] hover:scale-110 transition-transform duration-200">
                        <Image
                          src="/assets/sobre-mim/icon-services.png"
                          alt="Serviços"
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">MEUS SERVIÇOS</h3>
                    <p className="text-sm">
                      Experiência, conhecimento técnico e empatia, com <span className="font-bold">escuta ativa</span> e estratégias adaptadas à realidade de cada família. Também realizo palestras, consultorias, adaptação de ambientes e produzo <span className="font-bold">materiais personalizados</span>, como rotinas visuais e PECs.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio Section */}
        <section className="relative py-20 mb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Main Card with Background */}
              <div className="relative bg-[#8B7659] rounded-3xl overflow-hidden min-h-[750px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/assets/sobre-mim/meu-portfolio/pexels-mikhail-nilov-8924163 1.png"
                    alt="Portfolio Background"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 lg:p-12">
                  {/* Header with Title and Logo */}
                  <div className="flex flex-col items-center mb-12">
                    <h2 className="text-5xl lg:text-6xl italic text-[#FFFBE2] mb-4 font-[family:var(--font-playfair)] text-center">
                      <span className="font-medium">Meu</span>{" "}
                      <span className="font-semibold">Portfólio</span>
                    </h2>
                    <div className="mt-4">
                      <Image
                        src="/assets/logoLorena.svg"
                        alt="Lorena Jacob"
                        width={200}
                        height={60}
                        className="h-14 w-auto brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  {/* Portfolio Cards Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* Left Column - 2 equal cards */}
                    <div className="space-y-6">
                      {/* Acompanhamento Personalizado */}
                      <div className="relative rounded-2xl overflow-hidden h-[200px] lg:h-[280px] group cursor-pointer">
                        <Image
                          src="/assets/sobre-mim/meu-portfolio/acomp.personalizado.png"
                          alt="Acompanhamento Personalizado"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-lg font-bold text-center leading-tight">
                            Acompanhamento<br />Personalizado
                          </h3>
                        </div>
                      </div>
                      
                      {/* Implementação e Treinamento com PECs */}
                      <div className="relative rounded-2xl overflow-hidden h-[200px] lg:h-[340px] group cursor-pointer">
                        <Image
                          src="/assets/sobre-mim/meu-portfolio/PECS.png"
                          alt="Implementação e Treinamento com PECs"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-lg font-bold text-center leading-tight">
                            Implementação e<br />Treinamento com PECs
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - 1 small + 1 large */}
                    <div className="space-y-6">
                      {/* Orientação para Pais e Cuidadores (smaller) */}
                      <div className="relative rounded-2xl overflow-hidden h-[200px] lg:h-[220px] group cursor-pointer">
                        <Image
                          src="/assets/sobre-mim/meu-portfolio/orientacao.png"
                          alt="Orientação para Pais e Cuidadores"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-white text-base font-bold text-center leading-tight">
                            Orientação para<br />Pais e Cuidadores
                          </h3>
                        </div>
                      </div>
                      
                      {/* Atividades Recreativas Terapêuticas (larger) */}
                      <div className="relative rounded-2xl overflow-hidden h-[200px] lg:h-[400px] group cursor-pointer">
                        <Image
                          src="/assets/sobre-mim/meu-portfolio/ativ-terap.png"
                          alt="Atividades Recreativas Terapêuticas"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-lg font-bold text-center leading-tight">
                            Atividades Recreativas<br />Terapêuticas
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-12 mb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center bg-[#F5F1E8] rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-[#5B472B] mb-4 font-[family:var(--font-comfortaa)]">
                  Vamos conversar?
                </h3>
                <p className="text-[#5B472B] mb-6">
                  Entre em contato para conhecer melhor meu trabalho e como posso ajudar sua família
                </p>
                <Link href="/contato">
                  <button className="bg-[#6FB1CE] hover:bg-[#5fa0bf] text-white font-bold px-8 py-3 rounded-full transition-colors">
                    Entrar em Contato
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        </main>
        
        <WhatsAppButton />
        
        <SiteFooter />
      </div>
    </div>
  )
}