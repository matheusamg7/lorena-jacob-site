"use client"

import { useState } from "react"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  User, 
  MapPin, 
  Bookmark, 
  ShoppingBag, 
  HelpCircle, 
  LogOut,
  Shield,
  ChevronRight
} from 'lucide-react'
import { cn } from "@/lib/utils"

type Section = 
  | 'meus-dados' 
  | 'enderecos' 
  | 'posts-salvos' 
  | 'pedidos' 
  | 'ajuda' 
  | 'admin' 
  | null

export default function MinhaContaPage() {
  const [activeSection, setActiveSection] = useState<Section>('meus-dados')
  
  // Simulando um usuário admin para demonstração
  const isAdmin = true
  const userName = "Maria Silva"
  const userEmail = "maria.silva@email.com"

  const menuItems = [
    {
      id: 'meus-dados' as Section,
      label: 'Meus Dados',
      icon: User,
      description: 'Gerencie suas informações pessoais'
    },
    {
      id: 'enderecos' as Section,
      label: 'Meus Endereços',
      icon: MapPin,
      description: 'Gerencie seus endereços de entrega'
    },
    {
      id: 'posts-salvos' as Section,
      label: 'Posts Salvos',
      icon: Bookmark,
      description: 'Posts do blog que você salvou'
    },
    {
      id: 'pedidos' as Section,
      label: 'Meus Pedidos',
      icon: ShoppingBag,
      description: 'Acompanhe seus pedidos'
    },
    {
      id: 'ajuda' as Section,
      label: 'Ajuda e Suporte',
      icon: HelpCircle,
      description: 'Central de ajuda e suporte'
    },
  ]

  if (isAdmin) {
    menuItems.push({
      id: 'admin' as Section,
      label: 'Painel Admin',
      icon: Shield,
      description: 'Acesso ao painel administrativo'
    })
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'meus-dados':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Informações Pessoais</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Nome completo</label>
                  <p className="text-base font-medium">{userName}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">E-mail</label>
                  <p className="text-base font-medium">{userEmail}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Telefone</label>
                  <p className="text-base font-medium">(11) 98765-4321</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">CPF</label>
                  <p className="text-base font-medium">***.***.***-**</p>
                </div>
              </div>
              <Button className="mt-6 bg-[#78BEE0] text-black hover:bg-[#69acd0]">
                Editar Informações
              </Button>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Segurança</h3>
              <Button variant="outline">Alterar Senha</Button>
            </div>
          </div>
        )
      
      case 'enderecos':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Meus Endereços</h3>
              <Button size="sm" className="bg-[#78BEE0] text-black hover:bg-[#69acd0]">
                Adicionar Endereço
              </Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Casa</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Rua das Flores, 123<br />
                        Jardim Primavera<br />
                        São Paulo - SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Editar</Button>
                      <Button variant="ghost" size="sm">Excluir</Button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-xs bg-[#FFFCB3] text-black px-2 py-1 rounded">
                      Endereço Principal
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      
      case 'posts-salvos':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Posts Salvos</h3>
            <div className="grid gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Como ajudar crianças a expressar suas emoções</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Salvo em 15 de janeiro de 2024
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">Remover</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Rotina de sono para crianças pequenas</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Salvo em 10 de janeiro de 2024
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">Remover</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      
      case 'pedidos':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Histórico de Pedidos</h3>
            <div className="grid gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Pedido #0001</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Realizado em 20 de janeiro de 2024
                      </p>
                      <p className="text-sm mt-2">
                        2 eBooks • Total: R$ 89,90
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Concluído
                      </span>
                      <Button variant="ghost" size="sm" className="mt-2">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      
      case 'ajuda':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Central de Ajuda</h3>
            <div className="grid gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Perguntas Frequentes</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Encontre respostas para as dúvidas mais comuns
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Fale Conosco</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Entre em contato com nosso suporte
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Políticas e Termos</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Termos de uso e políticas de privacidade
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      
      case 'admin':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Painel Administrativo</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#78BEE0]/20 rounded-lg">
                      <User className="w-5 h-5 text-[#78BEE0]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Gerenciar Usuários</h4>
                      <p className="text-sm text-muted-foreground">125 usuários cadastrados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#78BEE0]/20 rounded-lg">
                      <ShoppingBag className="w-5 h-5 text-[#78BEE0]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Gerenciar Pedidos</h4>
                      <p className="text-sm text-muted-foreground">48 pedidos este mês</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#78BEE0]/20 rounded-lg">
                      <Bookmark className="w-5 h-5 text-[#78BEE0]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Gerenciar Blog</h4>
                      <p className="text-sm text-muted-foreground">32 posts publicados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#78BEE0]/20 rounded-lg">
                      <Shield className="w-5 h-5 text-[#78BEE0]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Configurações</h4>
                      <p className="text-sm text-muted-foreground">Configurações do sistema</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="pt-4">
              <Link href="/admin">
                <Button className="w-full sm:w-auto bg-[#78BEE0] text-black hover:bg-[#69acd0]">
                  Acessar Painel Completo
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Minha Conta</h1>
            <p className="text-muted-foreground mt-2">
              Olá, {userName}! Gerencie suas informações e preferências.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Menu Lateral */}
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                      activeSection === item.id
                        ? "bg-[#78BEE0]/20 text-black"
                        : "hover:bg-gray-100 text-muted-foreground"
                    )}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{item.label}</p>
                      <p className="text-xs opacity-75 hidden sm:block truncate">
                        {item.description}
                      </p>
                    </div>
                  </button>
                )
              })}
              
              <button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors hover:bg-red-50 text-red-600 mt-4"
                onClick={() => console.log('Logout')}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sair da Conta</span>
              </button>
            </div>

            {/* Conteúdo */}
            <Card>
              <CardContent className="p-6">
                {renderContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}