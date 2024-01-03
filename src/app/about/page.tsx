import { Testimonials } from "@/components/Testimonials";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center text-brown-350 pt-space-header">
      <div className="flex max-sm:flex-col-reverse py-16 max-sm:py-0 max-sm:pb-10 w-10/12 max-sm:w-full justify-evenly items-center">
        <img className="pt-10 w-1/2 max-sm:w-full h-[380px] max-sm:h-auto" src="/masterclass.webp" alt="Descrição da imagem" />
        <div className="flex flex-col w-2/5 max-sm:w-full gap-2 max-sm:bg-[#F7F7F5]">
          <h1 className="text-4xl max-sm:pt-10 max-sm:px-4">Nossos confeiteiros</h1>
          <h3 className="text-sm font-medium max-sm:px-4 max-sm:pb-5">SOBRE CEDRIC E SEU TIME DE CONFEITEIROS</h3>
          <div className="flex flex-col gap-2 pt-3 max-sm:p-4 text-xs max-sm:bg-white">
            <p>Cedric Grolet lidera uma equipe de talentosos chefs confeiteiros apaixonados por criar obras-primas gastronômicas. Com habilidades e expertise únicas, cada membro da equipe contribui para a excelência e originalidade das criações da Grolet Patisserie. Dos habilidosos padeiros aos especialistas em decoração, cada um desempenha um papel fundamental na entrega de produtos que encantam os paladares e os olhos dos clientes.</p>
            <p>O time da Grolet Patisserie compartilha um compromisso com a inovação e a busca contínua pela excelência. Eles estão sempre atualizados com as últimas tendências e técnicas no mundo da confeitaria, permitindo que criem sobremesas incríveis e exclusivas. Com trabalho em equipe, criatividade e atenção meticulosa aos detalhes, o time da Grolet Patisserie está dedicado a proporcionar uma experiência gastronômica excepcional para seus clientes, transformando cada doce em uma verdadeira obra de arte.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-cover w-full h-96" style={{ backgroundImage: "url('/le-meurice-1.webp')" }}>
        <Testimonials />
      </div>
      <div className="flex flex-col p-16 max-sm:py-16 max-sm:px-2 gap-2 items-center text-center bg-white">
        <h2 className="text-3xl">Expertise no mundo Gastronômico</h2>
        <h3 className="text-sm font-medium">DEIXE-NOS AJUDAR VOCÊ A ALCANÇAR SEUS OBJETIVOS GASTRONÔMICOS</h3>
        <p className="text-xs px-32 max-sm:px-4">Com uma equipe de renomados chefs confeiteiros liderada por Cedric Grolet, garantimos oferecer uma experiência única e deliciosa. Nossa expertise nos permite criar doces e bolos personalizados para todas as ocasiões, tornando seus momentos especiais ainda mais saborosos.</p>
        <div className="flex max-sm:flex-col text-xl py-5 w-5/6">
          <p className="border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:p-3 px-5 border-brown-350">Descubra a Delícia da Grolet Patisserie</p>
          <p className="border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:p-3 px-5 border-brown-350">Saboreie Nossas Delícias pela Primeira Vez</p>
          <p className="border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:p-3 px-5 border-brown-350">Uma Experiência Deliciosa para Cada Ocasião</p>
          <p className="py-10 max-sm:p-3 px-5">Encante-se com os Doces dos Seus Sonhos na Grolet Patisserie</p>
        </div>
        <Link href='/process' className="py-1 px-20 max-sm:px-10 text-xs transition duration-500 bg-brown-350 text-white hover:bg-brown-900 rounded-full">
          SAIBA MAIS SOBRE NOSSO PROCESSO
        </Link>
      </div>
    </main>
  )
}
