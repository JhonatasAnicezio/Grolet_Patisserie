import Link from "next/link";
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFacebook, BsInstagram } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="flex flex-col items-center text-brown-350 relative">
      <div className="flex justify-center p-24 bg-gray-200 h-banner">
        <div className="flex flex-col gap-8 items-start p-8">
          <h2 className="text-4xl w-full py-3 border-b border-brown-350">Dedicado aos nossos clientes</h2>
          <p className="text-sm font-normal">Como uma patisserie dedicada em criar experiências únicas, estamos comprometidos em fornecer a você, nosso cliente, resultados deliciosos e surpreendentes. Temos orgulho em trabalhar de perto com nossos clientes para entender suas preferências e necessidades culinárias, entregando resultados saborosos em cada criação.</p>
          <Link href='/about' className="transition duration-500 px-10 py-1 rounded-full text-sm bg-brown-350 text-white hover:bg-brown-900">
            SAIBA MAIS SOBRE NOSSA EQUIPE
          </Link>
        </div>
        <img src="/cedric-dedicated.webp" className="w-96 h-80" />
      </div>
      <div className="flex flex-col text-white px-36 justify-center items-center h-banner-regular w-full bg-brown-350">
        <div className="w-full p-2 border-b border-white">
          <h2 className="text-5xl">Grolet Patisserie</h2>
          <p>SABORES QUE ENCANTAM , MOMENTOS QUE FICAM</p>
        </div>
        <div className="flex gap-5 p-5">
          <p>GroletPatisserie®  é uma patisserie de renome, oferecendo criações únicas e saborosas. Com um compromisso total com a excelência, estamos prontos para atender às suas necessidades de confeitaria. Seja você um apaixonado por doces ou um conhecedor exigente, conte com a GroletPatisserie®  para uma experiência gastronômica inesquecível.</p>
          <nav className="flex flex-col gap-2">
            <Link href='/' className="transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">HOME</Link>
            <Link href='/about' className="transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">SOBRE</Link>
            <Link href='/process' className="transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">PROCESSO</Link>
            <Link href='/recipes' className="transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">RECEITAS</Link>
            <Link href='/contact' className="transition duration-500 border-b border-white hover:text-brown-900 hover:border-brown-900">CONTATO</Link>
          </nav>
          <ul className="flex flex-col">
            <li className="flex p-1 gap-1 items-center"><BsFillTelephoneFill />+55 (16)99305-2849</li>
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
      <div className="flex flex-col gap-6 rounded-3xl items-center py-10 px-16 w-3/4 text-brown-350 bg-white absolute top-1/2 -translate-y-1/2">
        <h3 className="text-3xl">Nós estamos aqui para te ajudar</h3>
        <p className="text-center  text-sm">Para garantir a comodidade de nossos clientes, a Grolet Patisserie disponibiliza um serviço de entrega ágil e eficiente em toda a cidade, com horários flexíveis e o cuidado necessário para que nossas delícias cheguem até você com a qualidade e o frescor que merece.</p>
        <div className="flex w-full justify-around">
          <Link href='/process' className="transition duration-500 text-xs rounded-full py-1 px-28 border border-gray-400 hover:bg-gray-400 hover:text-white">
            NOSSO PROCESSO
          </Link>
          <Link href='/contact' className="transition duration-500 text-xs rounded-full py-1 px-20 border border-brown-350 hover:bg-brown-350 hover:text-white">
            AGENDE UMA CONSULTA GRATIS
          </Link>
        </div>
      </div>
      <div className="flex justify-start px-10 py-1 text-sm w-full bg-gray-200">
        <p>&copy;JHONATAS ANICEZIO 2023 | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}