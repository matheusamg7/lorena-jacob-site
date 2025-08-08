"use client"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Ebook } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"

const fallbackItem: Ebook = {
  id: "ebook-0",
  title: "Gentle Beginnings",
  description: "A starter guide for parents to support emotional regulation at home.",
  price: 14.99,
  image: "/placeholder.svg?height=400&width=640",
}

export default function EbookCard({ item = fallbackItem }: { item?: Ebook }) {
  const { toast } = useToast()

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-3">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={`Cover image for ${item.title}`}
          width={640}
          height={400}
          className="w-full aspect-[16/10] object-cover rounded-md border"
        />
        <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-lg font-semibold">${item.price.toFixed(2)}</div>
        <Button
          className="bg-[#78BEE0] text-black hover:bg-[#69acd0]"
          onClick={() =>
            toast({
              title: "Added to cart",
              description: `${item.title} was added to your cart.`,
            })
          }
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
