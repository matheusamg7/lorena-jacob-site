import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t-2 border-[#6FB1CE] rounded-t-[2.5rem]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 mb-6">
          {/* Mobile Layout - Logo, redes e bandeira na mesma linha */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-6">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/assets/Logo.png"
                  alt="Lorena Jacob - Terapeuta Infantil"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              
              {/* Redes sociais */}
              <div className="flex items-center gap-3">
                <Link href="https://instagram.com/lorenajacob.st" target="_blank" className="text-[#6FB1CE] hover:text-pink-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://facebook.com/lorenajacob.st" target="_blank" className="text-[#6FB1CE] hover:text-blue-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
              
              {/* Bandeira */}
              <button className="text-2xl">
                🇧🇷
              </button>
            </div>
          </div>
          
          {/* Desktop Layout - Left column */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Logo */}
            <Link href="/" className="mb-2">
              <Image
                src="/assets/Logo.png"
                alt="Lorena Jacob - Terapeuta Infantil"
                width={280}
                height={90}
                className="h-24 w-auto"
              />
            </Link>
            
            {/* Idioma */}
            <button className="flex items-center gap-2 text-base text-gray-700 hover:text-gray-900">
              <span className="text-xl">🇧🇷</span>
              <span>Português</span>
            </button>
            
            {/* Redes sociais */}
            <div className="flex items-center gap-3">
              <Link href="https://instagram.com/lorenajacob.st" target="_blank" className="text-[#6FB1CE] hover:text-pink-500 transition-colors">
                <Instagram className="w-7 h-7" />
              </Link>
              <Link href="https://facebook.com/lorenajacob.st" target="_blank" className="text-[#6FB1CE] hover:text-blue-600 transition-colors">
                <Facebook className="w-7 h-7" />
              </Link>
            </div>
          </div>

          {/* Right column - Links sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-2">
          {/* Institucional */}
          <div>
            <h3 className="font-bold text-[#6FB1CE] mb-2 text-base">Institucional</h3>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Sobre a Lorena</Link></li>
              <li><Link href="/visao-de-mae" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Visão de Mãe</Link></li>
              <li><Link href="/trajetoria" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Trajetória</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Portfólio</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold text-[#6FB1CE] mb-2 text-base">Serviços</h3>
            <ul className="space-y-1">
              <li><Link href="/suporte-personalizado" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Suporte Personalizado</Link></li>
              <li><Link href="/pais-educadores" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Pais e Educadores</Link></li>
              <li><Link href="/palestras" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Palestras</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-[#6FB1CE] mb-2 text-base">Contato</h3>
            <ul className="space-y-1">
              <li><Link href="/atendimento" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Atendimento</Link></li>
              <li><Link href="/suporte" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Suporte de Produto</Link></li>
              <li><Link href="/duvidas" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Dúvidas</Link></li>
            </ul>
          </div>

          {/* Contas */}
          <div>
            <h3 className="font-bold text-[#6FB1CE] mb-2 text-base">Contas</h3>
            <ul className="space-y-1">
              <li><Link href="/login" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Fazer Login</Link></li>
              <li><Link href="/criar-conta" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Criar Conta</Link></li>
              <li><Link href="/meus-pedidos" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Meus Pedidos</Link></li>
            </ul>
          </div>

          {/* Loja */}
          <div>
            <h3 className="font-bold text-[#6FB1CE] mb-2 text-base">Loja</h3>
            <ul className="space-y-1">
              <li><Link href="/shop" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Acessar Loja Online</Link></li>
              <li><Link href="/brinquedos-sensoriais" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Brinquedos Sensoriais</Link></li>
              <li><Link href="/jogos" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Jogos</Link></li>
              <li><Link href="/montessorianos" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Brinquedos Montessorianos</Link></li>
              <li><Link href="/pecs" className="text-gray-600 hover:text-[#6FB1CE] text-sm">PECS e Comunicação Alternativa</Link></li>
              <li><Link href="/ebooks" className="text-gray-600 hover:text-[#6FB1CE] text-sm">E-BOOKS</Link></li>
              <li><Link href="/materiais" className="text-gray-600 hover:text-[#6FB1CE] text-sm">Materiais Pedagógicos</Link></li>
            </ul>
          </div>
          </div>
        </div>

        {/* Payment methods and copyright in same row */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Payment methods */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8H4V6h16m0 12H4v-6h16m0-8H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2z"/>
                </svg>
                <span>Frete Grátis</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
                <span>Parcelamento</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
                <span>Segurança</span>
              </div>
            </div>

            {/* Copyright and legal */}
            <div className="flex flex-col lg:flex-row items-center text-center gap-2 lg:gap-4 text-sm text-gray-500 w-full lg:w-auto">
              <span className="hidden lg:inline">Termos de Uso</span>
              <span className="hidden lg:inline">•</span>
              <span className="hidden lg:inline">Políticas de Privacidade</span>
              <span className="hidden lg:inline">•</span>
              <span className="text-center w-full lg:w-auto">©2025 • Lorena Jacob • Todos os Direitos Reservados</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}