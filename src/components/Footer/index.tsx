import Link from "next/link";
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFacebook, BsInstagram } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="flex flex-col items-center text-brown-350 relative">
      <div className="flex max-lg:flex-col w-10/12 max-lg:w-full justify-center items-center py-36 max-lg:py-4 max-lg:pb-72 max-lg:bg-gradient-to-b max-lg:from-[#F7F7F5] max-lg:to-white">
        <div className="flex flex-col w-2/4 max-lg:w-4/5 max-sm:w-full gap-5 items-start max-lg:items-center max-lg:justify-center max-lg:text-center p-8 max-lg:px-4">
          <h2 className="text-3xl max-lg:text-[22px] w-full py-2 border-b border-gray-400">Dedicado aos nossos clientes</h2>
          <p className="text-xs font-normal">Como uma patisserie dedicada em criar experiências únicas, estamos comprometidos em fornecer a você, nosso cliente, resultados deliciosos e surpreendentes. Temos orgulho em trabalhar de perto com nossos clientes para entender suas preferências e necessidades culinárias, entregando resultados saborosos em cada criação.</p>
          <Link href='/about' className="transition duration-500 px-10 py-0.5 rounded-full text-sm bg-brown-350 text-white hover:bg-brown-900">
            SAIBA MAIS SOBRE NOSSA EQUIPE
          </Link>
        </div>
        <img src="/cedric-dedicated.webp" className="w-[480px] h-80 max-sm:p-8" />
      </div>
      <div className="flex flex-col text-white max-lg:pt-20 py-28 max-sm:py-0 px-36 max-sm:px-8 justify-center items-center w-full bg-brown-350">
        <div className="w-full py-3 border-b border-white">
          <h2 className="text-3xl max-sm:text-xl font-medium">Grolet Patisserie</h2>
          <p className="text-sm max-sm:text-xs">SABORES QUE ENCANTAM, MOMENTOS QUE FICAM</p>
        </div>
        <div className="flex max-lg:flex-col gap-5 py-5 min-h-[180px]">
          <p className="text-xs w-1/2 max-lg:w-full">GroletPatisserie®  é uma patisserie de renome, oferecendo criações únicas e saborosas. Com um compromisso total com a excelência, estamos prontos para atender às suas necessidades de confeitaria. Seja você um apaixonado por doces ou um conhecedor exigente, conte com a GroletPatisserie®  para uma experiência gastronômica inesquecível.</p>
          <nav className="flex flex-col font-medium text-xs flex-wrap w-1/5 max-lg:w-full max-h-[100px] gap-2">
            <Link href='/' className="py-0.5 transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">HOME</Link>
            <Link href='/about' className="py-0.5 transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">SOBRE</Link>
            <Link href='/process' className="py-0.5 transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">PROCESSO</Link>
            <Link href='/recipes' className="py-0.5 transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">RECEITAS</Link>
            <Link href='/contact' className="py-0.5 transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">CONTATO</Link>
          </nav>
          <ul className="flex flex-col text-xs">
            <li className="flex p-1 gap-1 items-center"><BsFillTelephoneFill />+55 (16)992219948</li>
            <li className="flex p-1 gap-1 items-center"><BsFillEnvelopeFill />jhonatasanic@hotmail.com</li>
            <Link className="transition duration-500 hover:text-brown-900" target="blank" href='https://www.facebook.com/cedricgrolet'>
              <li className="flex p-1 gap-1 items-center"><BsFacebook />Cedric Grolet</li>
            </Link>
            <Link className="transition duration-500 hover:text-brown-900" target="blank" href='https://www.instagram.com/cedricgroletopera/'>
              <li className="flex p-1 gap-1 items-center"><BsInstagram />@cedricgrolet</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-3xl items-center max-sm:text-center py-10 px-16 max-sm:px-10 border w-3/4 max-sm:w-[85%] text-brown-350 bg-white absolute top-[56%] max-sm:top-[56%] -translate-y-[56%] max-sm:-translate-y-[56%]">
        <h3 className="text-2xl">Nós estamos aqui para te ajudar</h3>
        <p className="text-center text-xs">Para garantir a comodidade de nossos clientes, a Grolet Patisserie disponibiliza um serviço de entrega ágil e eficiente em toda a cidade, com horários flexíveis e o cuidado necessário para que nossas delícias cheguem até você com a qualidade e o frescor que merece.</p>
        <div className="flex max-sm:flex-col text-xs text-center max-sm:items-center gap-2 w-full justify-around">
          <Link href='/process' className=" max-sm:w-full transition duration-500 rounded-full py-1 w-[48%] border border-gray-400 hover:bg-gray-400 hover:text-white">
            NOSSO PROCESSO
          </Link>
          <Link href='/contact' className=" max-sm:w-full transition duration-500 rounded-full py-1 w-[48%] border border-brown-350 hover:bg-brown-350 hover:text-white">
            AGENDE UMA CONSULTA GRATIS
          </Link>
        </div>
      </div>
      <div className="flex justify-start px-10 py-1 text-sm max-sm:text-xs max-sm:px-4 w-full bg-gray-200">
        <p>&copy;JHONATAS ANICEZIO 2023 | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}