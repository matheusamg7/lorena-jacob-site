import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Post } from "@/lib/data"
import { Button } from "@/components/ui/button"

const fallbackPost: Post = {
  slug: "mindful-mornings",
  title: "Mindful Mornings With Your Child",
  excerpt: "Simple routines to start the day with calm and connection.",
  date: "2025-06-01",
  image: "/placeholder.svg?height=400&width=640",
}

export default function PostCard({ post = fallbackPost }: { post?: Post }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-3">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={`Cover image for ${post.title}`}
          width={640}
          height={400}
          className="w-full aspect-[16/10] object-cover rounded-md border"
        />
        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</div>
        <Button asChild variant="outline">
          <Link href={`/blog`}>Read blog</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
