import React, { useEffect } from 'react'
import './About.css'
const About = () => {
  useEffect(() => {window.scrollTo(0, 0) ;
  },[]);
  return (
    <div className='about  bg-slate-900'>
      <h1 className='font-bold text-white text-8xl pt-20 pb-10'>ALL IN ONE</h1>
      <div className='px-4 pb-16'>
        <p className='text-white mt-2 '>A ALL IN ONE é uma agência de marketing digital especializada em Performance de Mídia, Inbound Marketing, Produção de Conteúdo e SEO e criamos
          estratégias customizadas para as empresas, de acordo com suas metas e objetivos de crescimento.</p>
        <p className='text-white mt-2'>Em nossa longa jornada aprendemos que cada canal digital tem sua particularidade e benefício, mas que se combinado com outros canais, os resultados são potencializados. Por esse motivo, para obter mais resultados em visibilidade,
          conversões e vendas, desenvolvemos estratégias utilizando várias plataformas digitais combinadas.</p>
        <p className='text-white mt-2'> Além dos canais e ferramentas tradicionais de mercado, desenvolvemos soluções exclusivas, como o DashFlow, nossa ferramenta proprietária que auxilia no gerenciamento
          dos projetos, das equipes, a mensurar com detalhes os resultados e oferecer informações em tempo real e total transparência aos nossos clientes.</p>
      </div>
      <div className='vision flex-row bg-slate-800 items-center justify-center'>
        <h2 className='font-bold   text-center text-white text-3xl pt-20'>UM POUCO SOBRE NOS</h2>
        <div className='px-4 pb-16'>
          <p className='text-white mt-2 '>A ALL IN ONE é uma agência de marketing digital especializada em Performance de Mídia, Inbound Marketing, Produção de Conteúdo e SEO e criamos
            estratégias customizadas para as empresas, de acordo com suas metas e objetivos de crescimento.</p>
          <p className='text-white mt-2'>Em nossa longa jornada aprendemos que cada canal digital tem sua particularidade e benefício, mas que se combinado com outros canais, os resultados são potencializados. Por esse motivo, para obter mais resultados em visibilidade,
            conversões e vendas, desenvolvemos estratégias utilizando várias plataformas digitais combinadas.</p>
          <p className='text-white mt-2'> Além dos canais e ferramentas tradicionais de mercado, desenvolvemos soluções exclusivas, como o DashFlow, nossa ferramenta proprietária que auxilia no gerenciamento
            dos projetos, das equipes, a mensurar com detalhes os resultados e oferecer informações em tempo real e total transparência aos nossos clientes.</p>
        </div>
      </div>
      <div className='about bg-slate-900 px-4 pb-16'>
        <h2 className='font-bold text-white text-5xl pt-20 pb-10'>QUEM SOMOS</h2>
        <p className='text-white'>Uma equipe formada por desenvolvedores de software,  criador de media social, analista de negocio</p>
        <h2 className='font-bold text-white text-5xl pt-20 pb-10'>VISÃO</h2>
        <p className='text-white'>Fornecer soluções, serviços , produtos de alta qualidade para nossos clientes.</p>
        <h2 className='font-bold text-white text-5xl pt-20 pb-10'>OBJETIVO</h2>
        <p className='text-white'>Nós como equipe temos como visão, fornecer ao nosso cliente total satisfação de ter adquirido nosso produoto .Podendo sempre contar com nossa equipe'</p>
      </div>
    </div>
  )
}

export default About