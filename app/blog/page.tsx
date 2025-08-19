'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { Search, Heart, Filter } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Autismo na Vida Adulta',
    description: 'Nesse artigo, vamos falar sobre como o autismo pode aparecer na vida adulta, os problemas encarados e a importância de acolher e estar bem informado durante esse processo.',
    image: '/assets/blog-artigos/autismo-na-vida-adulta-1749044146435.jpg',
    views: 180,
    comments: 0,
    likes: 3,
    author: 'Lorena Jacob',
    date: '15 de janeiro, 2025'
  },
  {
    id: 2,
    title: 'Como Identificar o Autismo',
    description: 'Descobertas e aprendizados',
    image: '/assets/blog-artigos/como-identificar-o-autismo-1746639761424.jpg',
    views: 546,
    comments: 1,
    likes: 6,
    author: 'Lorena Jacob',
    date: '10 de janeiro, 2025'
  }
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFFE7]">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {/* Blog Title */}
            <h1 className="text-7xl lg:text-8xl font-bold text-[#8B7659] text-center mb-12 italic font-[family:var(--font-playfair)]">
              Blog
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B7659]/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Pesquisar por palavra ou tema"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-[#F5F1E8] rounded-full text-[#5B472B] placeholder-[#8B7659]/50 focus:outline-none focus:ring-2 focus:ring-[#6FB1CE] transition-all"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B7659] hover:text-[#6FB1CE] transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Post Count */}
            <p className="text-center text-[#8B7659]/70 mb-12">
              {filteredPosts.length} POSTS EXIBIDOS
            </p>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-[#FAFFE7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
                  {/* Post Image */}
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Post Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#6FB1CE] mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-[#5B472B] text-sm mb-4 flex-grow line-clamp-2">
                      {post.description}
                    </p>
                    
                    <Link href={`/blog/${post.id}`}>
                      <button className="w-full bg-[#1e5a79] hover:bg-[#27769B] text-white font-bold py-3 rounded-lg cursor-pointer mb-4 transition-colors">
                        SAIBA MAIS
                      </button>
                    </Link>
                    
                    {/* Post Meta */}
                    <div className="flex items-center justify-between text-xs text-[#5B472B]">
                      <div className="flex items-center gap-2">
                        <span>{post.views} visualizações</span>
                        <span>•</span>
                        <span>{post.comments} comentário{post.comments !== 1 ? 's' : ''}</span>
                      </div>
                      
                      {/* Like Button */}
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-1 hover:scale-110 transition-transform"
                      >
                        <Heart 
                          className={`w-4 h-4 ${
                            likedPosts.includes(post.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-[#5B472B]/50'
                          }`}
                        />
                        <span className={`text-xs ${likedPosts.includes(post.id) ? 'text-red-500' : 'text-[#5B472B]/50'}`}>
                          {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-[#6FB1CE] hover:bg-[#5fa0bf] text-white font-bold px-8 py-3 rounded-full transition-colors">
                  Carregar Mais Posts
                </button>
              </div>
            )}
            
            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#8B7659] text-lg">
                  Nenhum post encontrado para sua pesquisa.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <SiteFooter />
    </div>
  )
}