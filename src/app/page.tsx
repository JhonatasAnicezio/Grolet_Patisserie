import { BsChatLeftDots, BsHouse } from "react-icons/bs";
import { BiCake } from "react-icons/bi";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-[115px]">
      <div className="flex relative h-[500px]">
        <img src="/Cedric.webp" alt="Descrição da imagem" className="w-9/12 bg-cover"/>
        <img src="/tartes.webp" alt="Descrição da imagem" className="w-1/4"/>
        <div className="bg-white text-brown-350 gap-28 rounded-tl-xl rounded-bl-lg h-64 w-[45%] p-9 absolute top-1/2 right-0 -translate-y-1/2">
          <h2 className="text-3xl w-10/12 py-1 border-b-2 border-brown-350">Saboreie a arte da confeitaria francesa em cada mordida</h2>
          <p className="py-3 font-semibold text-sm">Bem-vindo(a) à Grolet Patisserie</p>
          <div className="py-2">
            <Link href='/about' className="px-6 py-1 text-xs transition duration-500 text-white hover:bg-brown-900 bg-brown-350 rounded-full hover:bg-bro">
              NOSSO TIME
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-16">
        <div className="flex-col flex gap-2 py-6 items-center justify-center rounded-3xl text-center w-3/4 text-brown-350 border border-brown-350">
          <h2 className="text-3xl font-light">Você cozinha?</h2>
          <h3 className="text-sm">Experimente nossos doces artesanais exclusivos hoje mesmo</h3>
          <Link href='/recipes' className="text-sm py-0.5 px-12 transition duration-500 bg-brown-350 text-white hover:bg-brown-900 rounded-full">
            EXPLORE NOSSAS RECEITAS
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-cover h-[430px]" style={{ backgroundImage: "url('/le-meurice-1.webp')" }}>
        <div className="flex p-8 text-center text-brown-350 rounded-3xl w-3/4 justify-around bg-white">
          <div className="flex gap-2 flex-col items-center w-1/3">
            <div className="flex justify-center p-5 w-4/5 border-b border-brown-350">
              <BsChatLeftDots className="text-3xl" />
            </div>
            <h3 className="text-xl font-medium">Atendimento</h3>
            <p className="text-xs px-5">Como uma patisserie dedicada em criar experiências únicas, estamos comprometidos em fornecer a você, nosso cliente, resultados deliciosos e surpreendentes</p>
          </div>
          <div className="flex gap-2 flex-col items-center w-1/3">
          <div className="flex justify-center p-5 w-4/5 border-b border-brown-350">
              <BsHouse className="text-3xl" />
            </div>
            <h3 className="text-xl font-medium">Entrega</h3>
            <p className="text-xs px-5">Entregamos doces e bolos personalizados com sabor e sofisticação. Desfrute da comodidade de saborear nossas criações únicas no conforto da sua casa ou no seu evento.</p>
          </div>
          <div className="flex gap-2 flex-col items-center w-1/3">
            <div className="flex justify-center p-5 w-4/5 border-b border-brown-350">
              <BiCake className="text-3xl" />
            </div>
            <h3 className="text-xl font-medium">Produtos</h3>
            <p className="text-xs px-5">Nossos produtos são entregues em perfeitas condições, mantendo sua frescura e qualidade excepcionais. Desfrute de cada mordida, sabendo que cuidamos de cada detalhe para garantir sua total satisfação.</p>
          </div>
        </div>
      </div>
      <Testimonials />
    </main>
  )
}
