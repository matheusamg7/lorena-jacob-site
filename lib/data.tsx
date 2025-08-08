export type Ebook = {
  id: string
  title: string
  description: string
  price: number
  image: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
}

export const ebooks: Ebook[] = [
  {
    id: "calm-corners",
    title: "Calm Corners: A Parent’s Guide",
    description: "Create soothing spaces at home to help your child self-regulate with visuals and routines.",
    price: 12.99,
    image: "/placeholder.svg?height=560&width=840",
  },
  {
    id: "feelings-first",
    title: "Feelings First",
    description: "Playful activities to name, notice, and navigate big emotions together.",
    price: 15.0,
    image: "/placeholder.svg?height=560&width=840",
  },
  {
    id: "bedtime-bliss",
    title: "Bedtime Bliss",
    description: "Gentle bedtime scripts and rituals for better sleep and stronger bonds.",
    price: 9.99,
    image: "/placeholder.svg?height=560&width=840",
  },
  {
    id: "social-sparks",
    title: "Social Sparks",
    description: "Help your child build friendship skills with games and conversation starters.",
    price: 13.49,
    image: "/placeholder.svg?height=560&width=840",
  },
]

export const posts: Post[] = [
  {
    slug: "mindful-mornings",
    title: "Mindful Mornings With Your Child",
    excerpt: "Simple routines to start the day with calm and connection.",
    date: "2025-06-01",
    image: "/placeholder.svg?height=560&width=840",
  },
  {
    slug: "tantrum-toolkit",
    title: "Your Tantrum Toolkit",
    excerpt: "Understanding the why behind meltdowns and how to respond with empathy.",
    date: "2025-05-18",
    image: "/placeholder.svg?height=560&width=840",
  },
  {
    slug: "play-is-language",
    title: "Play Is Your Child’s First Language",
    excerpt: "How to use play to connect, co-regulate, and coach social skills.",
    date: "2025-04-29",
    image: "/placeholder.svg?height=560&width=840",
  },
]
