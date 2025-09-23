'use client'

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
                    especialista em <span className="font-bold">transtornos do neurodesenvolvimento</span>.
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
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#6FB1CE] mb-6 font-[family:var(--font-nunito)]">
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
        {/* Portfolio Section - Redesigned */}
        <section className="relative pt-20 pb-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-5xl lg:text-6xl font-bold text-[#5B472B] mb-4 font-[family:var(--font-nunito)]">
                  Meu Portfólio
                </h2>
                <p className="text-lg text-[#5B472B] max-w-2xl mx-auto">
                  Conheça todos os serviços e formatos de atendimento que ofereço para ajudar no desenvolvimento infantil
                </p>
              </div>
              
              {/* Formatos de Atendimento */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#5B472B] mb-8 text-center">Formatos de Atendimento</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Atendimento Presencial */}
                  <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-[220px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6FB1CE] to-[#89BDD3]"></div>
                    <div className="flex flex-col items-center text-center justify-center h-full">
                      <div className="w-20 h-20 relative mb-4">
                        <Image
                          src="/assets/sobre-mim/meu-portfolio/atendimento.png"
                          alt="Atendimento Presencial"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-[#5B472B] mb-2">Atendimento Presencial</h4>
                      <p className="text-sm text-gray-600">
                        Em Londres.
                      </p>
                    </div>
                  </div>
                  
                  {/* Atendimento Domiciliar */}
                  <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-[220px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6FB1CE] to-[#89BDD3]"></div>
                    <div className="flex flex-col items-center text-center justify-center h-full">
                      <div className="w-20 h-20 relative mb-4">
                        <Image
                          src="/assets/sobre-mim/meu-portfolio/domicilio.png"
                          alt="Atendimento Domiciliar"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-[#5B472B] mb-2">Atendimento Domiciliar</h4>
                      <p className="text-sm text-gray-600">
                        Na casa da criança, quando necessário.
                      </p>
                    </div>
                  </div>
                  
                  {/* Atendimento Online */}
                  <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-[220px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#89BDD3] to-[#6FB1CE]"></div>
                    <div className="flex flex-col items-center text-center justify-center h-full">
                      <div className="w-20 h-20 relative mb-4">
                        <Image
                          src="/assets/sobre-mim/meu-portfolio/online.png"
                          alt="Atendimento Online"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-[#5B472B] mb-2">Atendimento Online</h4>
                      <p className="text-sm text-gray-600">
                        Para famílias, em qualquer lugar do mundo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section with Yellow Background */}
        <section className="relative pt-12 pb-8 bg-[#FAFFE7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Consultorias e Orientações */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#5B472B] mb-8 text-center">Consultorias e Orientações</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {/* Consultoria Escolar */}
                  <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-[220px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6FB1CE] to-[#89BDD3]"></div>
                    <div className="flex flex-col items-center text-center justify-center h-full">
                      <div className="text-5xl mb-4">🎓</div>
                      <h4 className="text-xl font-bold text-[#5B472B] mb-2">Consultoria para Escolas e Educadores</h4>
                      <p className="text-sm text-gray-600">
                        Treinamentos e suporte para inclusão escolar efetiva.
                      </p>
                    </div>
                  </div>
                  
                  {/* Orientação Parental */}
                  <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-[220px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6FB1CE] to-[#89BDD3]"></div>
                    <div className="flex flex-col items-center text-center justify-center h-full">
                      <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                      <h4 className="text-xl font-bold text-[#5B472B] mb-2">Orientação Parental e Consultoria Familiar</h4>
                      <p className="text-sm text-gray-600">
                        Apoio especializado para famílias navegarem os desafios do desenvolvimento infantil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Especialidades */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
                {/* Palestras e Workshops */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-[220px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6FB1CE] to-[#89BDD3]"></div>
                  <div className="flex flex-col items-center text-center justify-center h-full">
                    <div className="text-5xl mb-4">🎤</div>
                    <h4 className="text-xl font-bold text-[#5B472B] mb-2">Palestras, Treinamentos e Workshops</h4>
                    <p className="text-sm text-gray-600">
                      Seminários em igrejas e escolas, formações sobre inclusão e comunicação alternativa.
                    </p>
                  </div>
                </div>
                
                {/* Materiais Autorais */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-[220px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6FB1CE] to-[#89BDD3]"></div>
                  <div className="flex flex-col items-center text-center justify-center h-full">
                    <div className="text-5xl mb-4">📚</div>
                    <h4 className="text-xl font-bold text-[#5B472B] mb-2">Materiais Autorais e Publicações</h4>
                    <p className="text-sm text-gray-600">
                      Ebooks, Cartões de Comunicação Visual e atividades pedagógicas adaptadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Diferenciais Section - White Background with Blue */}
        <section className="relative py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Diferenciais Profissionais */}
              <div className="mb-8 bg-gradient-to-br from-[#6FB1CE]/5 to-[#8B7659]/5 rounded-3xl p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-[#5B472B] mb-12 text-center">Meus Diferenciais</h3>
                <div className="max-w-3xl mx-auto">
                  <div className="relative">
                    {/* Linha vertical conectora - apenas desktop */}
                    <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6FB1CE] via-[#8B7659] to-[#6FB1CE]"></div>
                    
                    {/* Trilha animada */}
                    <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-white to-transparent animate-trail"></div>
                    </div>
                    
                    <div className="space-y-8">
                      {/* Item 1 */}
                      <div className="flex items-start gap-6 group">
                        <div className="relative flex-shrink-0">
                          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                            <span className="text-3xl font-bold text-[#6FB1CE]">10+</span>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <h4 className="text-lg font-bold text-[#5B472B] mb-1">Anos de Experiência</h4>
                          <p className="text-gray-600">Mais de uma década dedicada ao atendimento de crianças neurodivergentes com resultados comprovados.</p>
                        </div>
                      </div>
                      
                      {/* Item 2 */}
                      <div className="flex items-start gap-6 group">
                        <div className="relative flex-shrink-0">
                          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                            <svg className="w-12 h-12 text-[#6FB1CE]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <h4 className="text-lg font-bold text-[#5B472B] mb-1">Mãe e Terapeuta</h4>
                          <p className="text-gray-600">Visão única que combina conhecimento técnico com a experiência prática de ser mãe atípica.</p>
                        </div>
                      </div>
                      
                      {/* Item 3 */}
                      <div className="flex items-start gap-6 group">
                        <div className="relative flex-shrink-0">
                          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                            <svg className="w-12 h-12 text-[#6FB1CE]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <h4 className="text-lg font-bold text-[#5B472B] mb-1">Abordagem Lúdica</h4>
                          <p className="text-gray-600">Método personalizado e baseado em evidências, tornando o desenvolvimento divertido e efetivo.</p>
                        </div>
                      </div>
                      
                      {/* Item 4 */}
                      <div className="flex items-start gap-6 group">
                        <div className="relative flex-shrink-0">
                          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                            <span className="text-lg font-bold text-[#6FB1CE]">PT/EN</span>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <h4 className="text-lg font-bold text-[#5B472B] mb-1">Atendimento Bilíngue</h4>
                          <p className="text-gray-600">Fluência em Português e Inglês para atender famílias de diferentes culturas.</p>
                        </div>
                      </div>
                      
                      {/* Item 5 */}
                      <div className="flex items-start gap-6 group">
                        <div className="relative flex-shrink-0">
                          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                            <svg className="w-12 h-12 text-[#6FB1CE]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <h4 className="text-lg font-bold text-[#5B472B] mb-1">Materiais Exclusivos</h4>
                          <p className="text-gray-600">Criação de recursos personalizados como Cartões de Comunicação Visual, rotinas visuais e atividades adaptadas.</p>
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
        <section className="relative pt-8 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center bg-[#F5F1E8] rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-[#5B472B] mb-4 font-[family:var(--font-comfortaa)]">
                  Vamos conversar?
                </h3>
                <p className="text-[#5B472B] mb-6">
                  Entre em contato para conhecer melhor meu trabalho e como posso ajudar sua família.
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
      
      <style jsx>{`
        @keyframes trail {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(calc(100vh + 100%));
          }
        }
        
        .animate-trail {
          animation: trail 3s linear infinite;
        }
      `}</style>
    </div>
  )
}