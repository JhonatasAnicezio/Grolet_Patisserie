import { Testimonials } from "@/components/Testimonials";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center text-brown-350 pt-space-header">
      <div className="flex py-16 w-11/12 justify-evenly">
        <img className="w-2/5 pt-10 h-96" src="/masterclass.webp" alt="Descrição da imagem" />
        <div className="flex flex-col w-2/5 gap-5">
          <h1 className="text-6xl">Nossos confeiteros</h1>
          <h3>SOBRE CEDRIC E SEU TIME DE CONFEITEIROS</h3>
          <div className="flex flex-col gap-2 text-xs">
            <p>Cedric Grolet lidera uma equipe de talentosos chefs confeiteiros apaixonados por criar obras-primas gastronômicas. Com habilidades e expertise únicas, cada membro da equipe contribui para a excelência e originalidade das criações da Grolet Patisserie. Dos habilidosos padeiros aos especialistas em decoração, cada um desempenha um papel fundamental na entrega de produtos que encantam os paladares e os olhos dos clientes.</p>
            <p>O time da Grolet Patisserie compartilha um compromisso com a inovação e a busca contínua pela excelência. Eles estão sempre atualizados com as últimas tendências e técnicas no mundo da confeitaria, permitindo que criem sobremesas incríveis e exclusivas. Com trabalho em equipe, criatividade e atenção meticulosa aos detalhes, o time da Grolet Patisserie está dedicado a proporcionar uma experiência gastronômica excepcional para seus clientes, transformando cada doce em uma verdadeira obra de arte.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-cover w-full h-banner" style={{ backgroundImage: "url('/le-meurice-1.webp')" }}>
        <Testimonials />
      </div>
      <div className="flex flex-col p-16 gap-2 items-center text-center bg-white">
        <h2 className="text-5xl font-light">Expertise no mundo Gastronômico</h2>
        <h3 className="text-xl">DEIXE-NOS AJUDAR VOCÊ A ALCANÇAR SEUS OBJETIVOS GASTRONÔMICOS</h3>
        <p className="text-sm px-32">Com uma equipe de renomados chefs confeiteiros liderada por Cedric Grolet, garantimos oferecer uma experiência única e deliciosa. Nossa expertise nos permite criar doces e bolos personalizados para todas as ocasiões, tornando seus momentos especiais ainda mais saborosos.</p>
        <div className="flex text-black text-xl py-10 w-5/6">
          <p className="border-r py-10 px-5 border-black">Descubra a Delícia da Grolet Patisserie</p>
          <p className="border-r py-10 px-5 border-black">Saboreie Nossas Delícias pela Primeira Vez</p>
          <p className="border-r py-10 px-5 border-black">Uma Experiência Deliciosa para Cada Ocasião</p>
          <p className="py-10 px-5">Encante-se com os Doces dos Seus Sonhos na Grolet Patisserie</p>
        </div>
        <Link href='/process' className="transition duration-500 bg-brown-350 text-white hover:bg-brown-900 rounded-full py-0.5 px-20">
          SAIBA MAIS SOBRE NOSSO PROCESSO
        </Link>
      </div>
    </main>
  )
}