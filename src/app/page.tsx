import { BsChatLeftDots, BsHouse } from "react-icons/bs";
import { BiCake } from "react-icons/bi";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-space-header">
      <div className="flex relative h-banner">
        <img src="/Cedric.webp" alt="Descrição da imagem" className="w-9/12"/>
        <img src="/tartes.webp" alt="Descrição da imagem" className="w-1/4"/>
        <div className="bg-white text-brown-350 gap-28 rounded-tl-lg rounded-bl-lg h-80 w-1/3 p-9 absolute top-1/2 right-0 -translate-y-1/2">
          <h2 className="text-3xl p-1 border-b-2 border-brown-350">Saboreie a arte da confeitaria francesa em cada mordida</h2>
          <p className="p-3">Bem-vindo(a) à Grolet Patisserie</p>
          <div className="py-2 px-5">
            <Link href='/about' className="px-8 py-1 text-sm transition duration-500 text-white hover:bg-brown-900 bg-brown-350 rounded-full hover:bg-bro">
              NOSSO TIME
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-24">
        <div className="flex-col flex gap-3 items-center justify-center rounded-3xl text-center w-4/5 h-44 text-brown-350 border border-brown-350">
          <h2 className="text-5xl font-light">Você cozinha?</h2>
          <h3 className="text-base">Experimente nossos doces artesanais exclusivos hoje mesmo</h3>
          <Link href='/recipes' className="transition duration-500 bg-brown-350 text-white hover:bg-brown-900 py-0.5 px-12 rounded-full">
            EXPLORE NOSSAS RECEITAS
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-cover h-banner" style={{ backgroundImage: "url('/le-meurice-1.webp')" }}>
        <div className="flex p-11 text-center text-brown-350 rounded-3xl w-11/12 justify-around bg-white">
          <div className="flex gap-5 flex-col items-center w-1/3">
            <div className="flex justify-center p-5 w-4/5 border-b border-brown-350">
              <BsChatLeftDots className="text-5xl" />
            </div>
            <h3 className="text-2xl font-medium">Atendimento</h3>
            <p className="text-sm px-5">Como uma patisserie dedicada em criar experiências únicas, estamos comprometidos em fornecer a você, nosso cliente, resultados deliciosos e surpreendentes</p>
          </div>
          <div className="flex gap-5 flex-col items-center w-1/3">
          <div className="flex justify-center p-5 w-4/5 border-b border-brown-350">
              <BsHouse className="text-5xl" />
            </div>
            <h3 className="text-2xl font-medium">Entrega</h3>
            <p className="text-sm px-5">Entregamos doces e bolos personalizados com sabor e sofisticação. Desfrute da comodidade de saborear nossas criações únicas no conforto da sua casa ou no seu evento.</p>
          </div>
          <div className="flex gap-5 flex-col items-center w-1/3">
            <div className="flex justify-center p-5 w-4/5 border-b border-brown-350">
              <BiCake className="text-5xl" />
            </div>
            <h3 className="text-2xl font-medium">Produtos</h3>
            <p className="text-sm px-5">Nossos produtos são entregues em perfeitas condições, mantendo sua frescura e qualidade excepcionais. Desfrute de cada mordida, sabendo que cuidamos de cada detalhe para garantir sua total satisfação.</p>
          </div>
        </div>
      </div>
      <Testimonials />
    </main>
  )
}
