'use client'

import { useState } from 'react'
import Image from 'next/image'
import ShopHeader from '@/components/shop-header'
import SiteFooter from '@/components/site-footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { ChevronDown, Filter, Star, ShoppingCart, X } from 'lucide-react'

// Produtos de exemplo
const products = [
  {
    id: 1,
    name: 'Kit Sensorial Completo - Texturas e Cores',
    price: 149.90,
    originalPrice: 199.90,
    image: '/assets/shop/produto1.jpg',
    category: 'Brinquedos Sensoriais',
    rating: 5,
    reviews: 23,
    badge: 'Mais Vendido'
  },
  {
    id: 2,
    name: 'Kit de Cartões de Comunicação Visual',
    price: 89.90,
    originalPrice: 129.90,
    image: '/assets/shop/produto2.jpg',
    category: 'Cartões de Comunicação Visual',
    rating: 5,
    reviews: 18
  },
  {
    id: 3,
    name: 'Atividades de Coordenação Motora',
    price: 39.90,
    image: '/assets/shop/produto3.jpg',
    category: 'Material Pedagógico',
    rating: 4.5,
    reviews: 12,
    badge: 'Novo'
  },
  {
    id: 4,
    name: 'Ebook: Rotinas Visuais para Autistas',
    price: 29.90,
    image: '/assets/shop/produto4.jpg',
    category: 'Ebooks',
    rating: 5,
    reviews: 45
  },
  {
    id: 5,
    name: 'Cartões de Emoções e Sentimentos',
    price: 34.90,
    originalPrice: 49.90,
    image: '/assets/shop/produto5.jpg',
    category: 'Cartões de Comunicação Visual',
    rating: 4.8,
    reviews: 15
  },
  {
    id: 6,
    name: 'Brinquedo Sensorial - Fidget Cube',
    price: 59.90,
    image: '/assets/shop/produto6.jpg',
    category: 'Brinquedos Sensoriais',
    rating: 5,
    reviews: 20
  },
  {
    id: 7,
    name: 'Material Pedagógico - Alfabetização',
    price: 79.90,
    image: '/assets/shop/produto7.jpg',
    category: 'Material Pedagógico',
    rating: 4.9,
    reviews: 32
  },
  {
    id: 8,
    name: 'Ebook: Guia de Atividades Sensoriais',
    price: 19.90,
    originalPrice: 39.90,
    image: '/assets/shop/produto8.jpg',
    category: 'Ebooks',
    rating: 5,
    reviews: 28,
    badge: 'Promoção'
  }
]

const categories = [
  { 
    id: 1, 
    name: 'Brinquedos Sensoriais',
    image: '/assets/shop/categoria-brinquedos.jpg',
    count: 15 
  },
  { 
    id: 2, 
    name: 'Cartões de Comunicação Visual',
    image: '/assets/shop/categoria-cartoes.jpg',
    count: 28 
  },
  { 
    id: 3, 
    name: 'Material Pedagógico',
    image: '/assets/shop/categoria-material.jpg',
    count: 12 
  },
  { 
    id: 4, 
    name: 'Ebooks',
    image: '/assets/shop/categoria-ebooks.jpg',
    count: 8 
  }
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 500])
  const [maxPrice, setMaxPrice] = useState(500)
  const [minAge, setMinAge] = useState(0)
  const [maxAge, setMaxAge] = useState(12)
  const [sortBy, setSortBy] = useState('relevance')
  const [showFilters, setShowFilters] = useState(true)

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false
    }
    if (product.price > maxPrice) {
      return false
    }
    return true
  })

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <ShopHeader />
      
      <main className="flex-1">
        {/* Banner */}
        <section className="relative mt-4">
          <div className="container mx-auto px-4">
            <div className="relative h-[200px] lg:h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/banner1.webp"
                alt="Materiais Terapêuticos"
                fill
                className="object-cover object-[center_15%]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className="group flex flex-col transition-all hover:transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl">
                    {category.id === 1 ? (
                      <>
                        <Image
                          src="/unnamed(193).png"
                          alt="Brinquedos Sensoriais"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-bold text-xl">
                            {category.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {category.count} produtos
                          </p>
                        </div>
                      </>
                    ) : category.id === 2 ? (
                      <>
                        <Image
                          src="/unnamed(783).png"
                          alt="Cartões de Comunicação Visual"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-bold text-xl">
                            {category.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {category.count} produtos
                          </p>
                        </div>
                      </>
                    ) : category.id === 3 ? (
                      <>
                        <Image
                          src="/unnamed(269).png"
                          alt="Material Pedagógico"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-bold text-xl">
                            {category.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {category.count} produtos
                          </p>
                        </div>
                      </>
                    ) : category.id === 4 ? (
                      <>
                        <Image
                          src="/2024-Amazon-Kindle-Paperwhite-in-hand-with-dark-mode-4-of-8.jpg"
                          alt="Ebooks"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-bold text-xl">
                            {category.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {category.count} produtos
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Category image placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                          {/* Placeholder for other categories */}
                        </div>
                      </>
                    )}
                  </div>
                  {(category.id !== 1 && category.id !== 2 && category.id !== 3 && category.id !== 4) && (
                    <>
                      <h3 className="mt-3 text-gray-800 font-bold text-lg text-center">
                        {category.name}
                      </h3>
                      <p className="text-gray-500 text-sm text-center">
                        {category.count} produtos
                      </p>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters Sidebar */}
                <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  <div className="bg-[#F8F9FA] rounded-xl p-4">
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-1">Filtrar por</p>
                      <h3 className="text-base font-bold text-gray-900">Categorias</h3>
                    </div>

                    {/* Categories */}
                    <div className="mb-3">
                      <div className="space-y-1">
                        <button 
                          onClick={() => setSelectedCategory('all')}
                          className={`block w-full text-left text-xs py-0.5 ${selectedCategory === 'all' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          Todos
                        </button>
                        <button 
                          onClick={() => setSelectedCategory('Brinquedos Montessorianos')}
                          className={`block w-full text-left text-xs py-0.5 ${selectedCategory === 'Brinquedos Montessorianos' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          Brinquedos Montessorianos
                        </button>
                        <button 
                          onClick={() => setSelectedCategory('Brinquedos Sensoriais')}
                          className={`block w-full text-left text-xs py-0.5 ${selectedCategory === 'Brinquedos Sensoriais' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          Brinquedos Sensoriais
                        </button>
                        <button 
                          onClick={() => setSelectedCategory('Ebooks')}
                          className={`block w-full text-left text-xs py-0.5 ${selectedCategory === 'Ebooks' ? 'text-[#4A6FA5] font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          Ebooks
                        </button>
                        <button 
                          onClick={() => setSelectedCategory('Jogos')}
                          className={`block w-full text-left text-xs py-0.5 ${selectedCategory === 'Jogos' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          Jogos
                        </button>
                        <button 
                          onClick={() => setSelectedCategory('Material Pedagógico')}
                          className={`block w-full text-left text-xs py-0.5 ${selectedCategory === 'Material Pedagógico' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          Material Pedagógico
                        </button>
                        <button 
                          onClick={() => setSelectedCategory('Cartões de Comunicação Visual')}
                          className={`block w-full text-left text-xs py-0.5 ${selectedCategory === 'Cartões de Comunicação Visual' ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          Cartões de Comunicação Visual
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 my-3"></div>

                    {/* Price Range */}
                    <div className="mb-3">
                      <h3 className="text-base font-bold text-gray-900 mb-2">Preço</h3>
                      <div className="relative mb-2">
                        <input 
                          type="range" 
                          min="0" 
                          max="500" 
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-[#4A6FA5]/20 rounded-lg appearance-none cursor-pointer slider"
                          style={{
                            background: `linear-gradient(to right, #4A6FA5 0%, #4A6FA5 ${(maxPrice/500)*100}%, #e5e7eb ${(maxPrice/500)*100}%, #e5e7eb 100%)`
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>R$ 0</span>
                        <span className="text-[#4A6FA5] font-medium">Até R$ {maxPrice}</span>
                        <span>R$ 500</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 my-3"></div>

                    {/* Age Range */}
                    <div className="mb-3">
                      <h3 className="text-base font-bold text-gray-900 mb-2">Idade</h3>
                      
                      {/* Min Age */}
                      <div className="mb-2">
                        <p className="text-xs text-gray-600 mb-1">Idade Mínima: {minAge} anos</p>
                        <input 
                          type="range" 
                          min="0" 
                          max="12" 
                          value={minAge}
                          onChange={(e) => setMinAge(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-[#4A6FA5]/20 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #4A6FA5 0%, #4A6FA5 ${(minAge/12)*100}%, #e5e7eb ${(minAge/12)*100}%, #e5e7eb 100%)`
                          }}
                        />
                      </div>
                      
                      {/* Max Age */}
                      <div className="mb-2">
                        <p className="text-xs text-gray-600 mb-1">Idade Máxima: {maxAge} anos</p>
                        <input 
                          type="range" 
                          min="0" 
                          max="12" 
                          value={maxAge}
                          onChange={(e) => setMaxAge(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-[#4A6FA5]/20 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #4A6FA5 0%, #4A6FA5 ${(maxAge/12)*100}%, #e5e7eb ${(maxAge/12)*100}%, #e5e7eb 100%)`
                          }}
                        />
                      </div>
                      
                      <div className="text-center">
                        <span className="text-[#4A6FA5] font-medium text-xs">{minAge} - {maxAge} anos</span>
                      </div>
                    </div>
                  </div>
                  
                  <style jsx>{`
                    input[type="range"]::-webkit-slider-thumb {
                      appearance: none;
                      width: 16px;
                      height: 16px;
                      background: #4A6FA5;
                      border-radius: 50%;
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    }
                    input[type="range"]::-moz-range-thumb {
                      width: 16px;
                      height: 16px;
                      background: #4A6FA5;
                      border-radius: 50%;
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    }
                  `}</style>
                </aside>

                {/* Products Grid */}
                <div className="flex-1">
                  {/* Toolbar */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
                      >
                        <Filter className="w-4 h-4" />
                        Filtros
                      </button>
                      <span className="text-gray-600">
                        {filteredProducts.length} produtos encontrados
                      </span>
                    </div>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 border rounded-lg bg-white"
                    >
                      <option value="relevance">Mais Relevantes</option>
                      <option value="price-low">Menor Preço</option>
                      <option value="price-high">Maior Preço</option>
                      <option value="rating">Melhor Avaliados</option>
                      <option value="newest">Mais Recentes</option>
                    </select>
                  </div>

                  {/* Products */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="group cursor-pointer">
                        <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                          {/* Product Image */}
                          <div className="relative aspect-square bg-gray-100">
                            {product.badge && (
                              <span className="absolute top-2 left-2 z-10 px-2 py-1 bg-[#FFD700] text-xs font-bold rounded">
                                {product.badge}
                              </span>
                            )}
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              [Imagem do Produto]
                            </div>
                            <button className="absolute bottom-2 right-2 bg-[#4A6FA5] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                              <ShoppingCart className="w-5 h-5" />
                            </button>
                          </div>

                          {/* Product Info */}
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
                              {product.name}
                            </h3>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${
                                      i < Math.floor(product.rating) 
                                        ? 'fill-yellow-400 text-yellow-400' 
                                        : 'text-gray-300'
                                    }`} 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">
                                ({product.reviews})
                              </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold text-[#4A6FA5]">
                                R$ {product.price.toFixed(2)}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">
                                  R$ {product.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More */}
                  <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-[#4A6FA5] text-white rounded-full font-medium hover:bg-[#3d5c8a] transition-colors">
                      Carregar Mais Produtos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <SiteFooter />
    </div>
  )
}