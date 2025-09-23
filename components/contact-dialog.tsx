"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

type ContactDialogProps = {
  children?: React.ReactNode
  defaultOpen?: boolean
}

export default function ContactDialog({ children, defaultOpen = false }: ContactDialogProps) {
  const { toast } = useToast()
  const [open, setOpen] = useState(defaultOpen)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const subject = String(formData.get("subject") || "")
    const message = String(formData.get("message") || "")

    if (!name || !email || !message) {
      toast({ title: "Please fill in your name, email, and message.", variant: "destructive" })
      return
    }

    setLoading(true)
    // Front-end only demo: show a toast as a fake "send"
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. Lorena will get back to you soon.",
      })
      form.reset()
    }, 800)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children ?? <Button className="bg-[#78BEE0] text-black hover:bg-[#69acd0]">Contact</Button>}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact Lorena</DialogTitle>
          <DialogDescription>Send a note and Lorena will reply as soon as possible.</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="How can I help?" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Write your message…" className="min-h-[120px]" />
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="submit"
              className="bg-[#78BEE0] text-black hover:bg-[#69acd0]"
              disabled={loading}
            >
              {loading ? "Sending…" : "Send message"}
            </Button>
            <span className="text-xs text-muted-foreground">Response time: typically within 1–2 days</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
