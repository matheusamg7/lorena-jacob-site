"use client"

import { useState } from "react"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    aceitaTermos: false,
    aceitaNewsletter: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dados do formulário:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Criar conta</h1>
            <p className="mt-2 text-muted-foreground">
              Preencha os dados abaixo para criar sua conta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Mínimo 8 caracteres"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmarSenha">Confirmar senha</Label>
                <Input
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  required
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  placeholder="Digite a senha novamente"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="aceitaTermos"
                  name="aceitaTermos"
                  checked={formData.aceitaTermos}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, aceitaTermos: checked as boolean }))
                  }
                />
                <label
                  htmlFor="aceitaTermos"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Li e aceito os{" "}
                  <Link href="/termos-de-uso" className="text-[#78BEE0] hover:underline">
                    Termos de Uso
                  </Link>{" "}
                  e{" "}
                  <Link href="/politicas-de-privacidade" className="text-[#78BEE0] hover:underline">
                    Políticas de Privacidade
                  </Link>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="aceitaNewsletter"
                  name="aceitaNewsletter"
                  checked={formData.aceitaNewsletter}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, aceitaNewsletter: checked as boolean }))
                  }
                />
                <label
                  htmlFor="aceitaNewsletter"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Quero receber novidades e ofertas por e-mail
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#78BEE0] text-black hover:bg-[#69acd0]"
              disabled={!formData.aceitaTermos}
            >
              Criar conta
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Já tem uma conta? </span>
              <Link href="/login" className="text-[#78BEE0] hover:underline">
                Fazer login
              </Link>
            </div>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}