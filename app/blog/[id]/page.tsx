'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { Heart, MessageCircle, Share2, Bookmark, Eye } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    slug: 'autismo-na-vida-adulta',
    title: 'Autismo na Vida Adulta',
    description: 'Nesse artigo, vamos falar sobre como o autismo pode aparecer na vida adulta, os problemas encarados e a importância de acolher e estar bem informado durante esse processo.',
    image: '/assets/blog-artigos/autismo-na-vida-adulta-1749044146435.jpg',
    author: 'Lorena Jacob',
    date: '04/06/2025',
    views: 180,
    likes: 3,
    comments: 0,
    content: `
      <p>Quando falamos de autismo, a maioria das pessoas pensa em crianças. Mas o autismo não desaparece com o tempo — ele acompanha o indivíduo por toda a vida.</p>
      
      <p>Muitos adultos são autistas, mesmo que nunca tenham recebido um diagnóstico. Outros descobriram somente na vida adulta o nome para sensações, dificuldades e modos de ser que estiveram com eles desde sempre.</p>
      
      <p>Nesse artigo, vamos falar sobre como o autismo pode aparecer na vida adulta, os problemas encarados e a importância de acolher e estar bem informado durante esse processo.</p>
      
      <h2>O que é a condição do autismo em adultos?</h2>
      
      <p>O autismo em adultos ainda é o mesmo transtorno de neurodesenvolvimento, com características que envolvem comunicação social, comportamento e processamento sensorial. A diferença é que, com o passar do tempo, muitas pessoas aprendem a esconder ou ajustar seus comportamentos para se encaixar às necessidades sociais – o que pode complicar a identificação, tanto para a própria pessoa quanto para quem vive com ela.</p>
      
      <p>Isso não quer dizer que os problemas foram resolvidos. Só ficaram mais calados ou foram lidados sozinho por muito tempo.</p>
      
      <h2>Quais sinais podem estar presentes em adultos autistas?</h2>
      
      <p>Os sinais mudam de pessoa pra pessoa, mas alguns comportamentos e sentidos são comuns:</p>
      
      <ul>
        <li>Dificuldade pra manter conversas casuais ou entender sutilezas sociais;</li>
        <li>Preferência por rotinas e incômodo com mudanças inesperadas;</li>
        <li>Sensibilidade a barulhos, cheiros, luzes ou certos tipos de toque;</li>
        <li>Tendência ao isolamento social ou dificuldade em fazer e manter amizades;</li>
        <li>Interesse intenso por assuntos específicos;</li>
        <li>Cansaço extremo depois de interações sociais (o chamado "esgotamento social");</li>
        <li>Sensação de estar se esforçando sempre para "agir do jeito certo".</li>
      </ul>
      
      <p>Muitas pessoas autistas adultas contaram que viveram achando ser "estranhas", "intensas" ou "inadequadas", até o diagnóstico trazer uma nova forma de entender a si mesmas.</p>
      
      <h2>Quanto a diagnóstico tardio?</h2>
      
      <p>Receber o diagnóstico de autismo na vida adulta pode gerar sentimentos diversos: alívio por finalmente entender certas dificuldades, luto pelo tempo que passou sem esse conhecimento, ou até raiva por não ter tido apoio antes.</p>
      
      <p>Mas o diagnóstico tardio também traz oportunidades:</p>
      
      <ul>
        <li><strong>Autoconhecimento:</strong> Entender melhor como funciona o próprio cérebro ajuda a fazer escolhas mais alinhadas com suas necessidades;</li>
        <li><strong>Acesso a recursos:</strong> Terapias, grupos de apoio e estratégias específicas para autistas podem melhorar muito a qualidade de vida;</li>
        <li><strong>Validação:</strong> Saber que existe uma razão neurológica para certas dificuldades alivia a culpa e a sensação de "não ser bom o suficiente";</li>
        <li><strong>Conexão:</strong> Encontrar outras pessoas autistas cria um senso de pertencimento que muitos nunca tiveram.</li>
      </ul>
      
      <h2>Por que falar sobre isso é tão importante?</h2>
      
      <p>Porque o autismo não é só uma fase da infância. Adultos autistas existem, sentem, sofrem, amam e têm direito ao diagnóstico, ao cuidado e à inclusão.</p>
      
      <p>Falar sobre isso, ajuda a lidar não só com o preconceito, mas também ajuda a diminuir o sofrimento oculto de quem passou a vida sem respostas, ajudando a promover um olhar mais carinhoso, respeitoso e real sobre o autismo.</p>
      
      <h2>Não está sozinho(a)</h2>
      
      <p>Se você acha que pode ser autista ou conhece alguém, saiba que nunca é tarde para procurar respostas! O diagnóstico não é um final, mas o início de uma jornada mais consciente, tranquila e cheia de opções.</p>
      
      <p>Aqui neste lugar, você sempre vai achar acolhimento, informação boa e apoio para seguir esse caminho com mais certeza.</p>
    `
  },
  {
    id: 2,
    slug: 'como-identificar-o-autismo',
    title: 'Como Identificar o Autismo',
    description: 'Descobertas e aprendizados sobre os sinais e características do autismo em diferentes idades.',
    image: '/assets/blog-artigos/como-identificar-o-autismo-1746639761424.jpg',
    author: 'Lorena Jacob',
    date: '10 de janeiro, 2025',
    views: 546,
    likes: 6,
    comments: 1,
    content: `
      <p>Identificar o autismo pode ser um processo complexo e cheio de nuances. Cada pessoa é única, e o autismo se manifesta de formas diferentes em cada indivíduo.</p>
      
      <h2>Primeiros Sinais</h2>
      
      <p>Os primeiros sinais do autismo geralmente aparecem na primeira infância, mas nem sempre são reconhecidos imediatamente...</p>
      
      <p>É importante estar atento a alguns comportamentos que podem indicar a necessidade de uma avaliação mais detalhada.</p>
    `
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [currentLikes, setCurrentLikes] = useState(0)
  
  // Find the post by ID
  const post = blogPosts.find(p => p.id === parseInt(params.id as string))
  
  useEffect(() => {
    if (post) {
      setCurrentLikes(post.likes)
    }
  }, [post])
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl">Artigo não encontrado</h1>
        </div>
        <SiteFooter />
      </div>
    )
  }
  
  const handleLike = () => {
    if (liked) {
      setCurrentLikes(currentLikes - 1)
    } else {
      setCurrentLikes(currentLikes + 1)
    }
    setLiked(!liked)
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
          {/* Background Image with Blur */}
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 backdrop-blur-sm bg-[#4A6FA5]/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-95">
              {post.description}
            </p>
          </div>
        </section>
        
        {/* Article Content */}
        <article className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Content Card with Paper Effect */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              {/* Author */}
              <p className="text-gray-500 text-sm mb-8">por {post.author}</p>
              
              {/* Content with spacing */}
              <div 
                className="prose prose-lg max-w-none article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            
              {/* Stats and Actions */}
              <div className="flex flex-wrap items-center gap-4 mt-12 pt-8 border-t">
              <span className="text-gray-500 flex items-center gap-1">
                {post.views} visualizações • {post.date}
              </span>
              
              <div className="flex items-center gap-4 ml-auto">
                {/* Comments */}
                <button 
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments} comentários</span>
                </button>
                
                {/* Share */}
                <button className="text-gray-600 hover:text-gray-800">
                  <Share2 className="w-5 h-5" />
                </button>
                
                {/* Like */}
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-1 transition-colors ${
                    liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span className="font-bold">{currentLikes}</span>
                </button>
                
                {/* Save */}
                <button 
                  onClick={() => setSaved(!saved)}
                  className={`flex items-center gap-1 transition-colors ${
                    saved ? 'text-[#6FB1CE]' : 'text-gray-600 hover:text-[#6FB1CE]'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
                  <span>Salvar</span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Comments Section */}
        <section className="py-16 bg-[#89BDD3]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center text-white mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle className="w-10 h-10" />
                <h3 className="text-3xl font-bold">Quer comentar?</h3>
              </div>
              <p className="mb-6">Entre com sua conta Google ou Conecte-se</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                  <Image
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                  Entrar com a Conta Google
                </button>
                <button className="bg-[#FFFBE2] text-gray-700 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-[#89BDD3] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">👤</span>
                  </div>
                  Já tenho conta
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comments Display */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Comentários</h3>
            
            {post.comments === 0 ? (
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-600 mb-2">
                  Nenhum comentário ainda
                </p>
                <p className="text-gray-500">
                  Faça login para deixar um comentário.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Comments would go here */}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
      <SiteFooter />
      
      <style jsx>{`
        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .article-content p {
          color: #333;
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }
        
        .article-content ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        
        .article-content ul li {
          color: #333;
          margin-bottom: 1rem;
          line-height: 1.9;
        }
        
        .article-content strong {
          font-weight: 600;
          color: #1a1a1a;
        }
      `}</style>
    </div>
  )
}