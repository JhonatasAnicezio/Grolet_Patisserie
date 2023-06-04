import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFacebook, BsInstagram } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="flex flex-col items-center relative">
      <div className="flex justify-center p-24 bg-gray-200 h-banner">
        <div className="flex flex-col gap-8 items-start p-8">
          <h2 className="text-4xl w-full py-3 border-b border-brown-color">Dedicated to our clients</h2>
          <p className="text-sm font-normal">Como uma patisserie dedicada em criar experiências únicas, estamos comprometidos em fornecer a você, nosso cliente, resultados deliciosos e surpreendentes. Temos orgulho em trabalhar de perto com nossos clientes para entender suas preferências e necessidades culinárias, entregando resultados saborosos em cada criação.</p>
          <button className="px-10 py-1 rounded-full text-sm bg-brown-color text-white">
            LEARN MORE ABOUT OUR TEAM
          </button>
        </div>
        <img src="/cedric-dedicated.webp" className="w-96 h-80" />
      </div>
      <div className="flex flex-col text-white px-36 justify-center items-center h-banner-regular w-full bg-brown-color">
        <div className="w-full p-2 border-b border-white">
          <h2 className="text-5xl">Grolet Patisserie</h2>
          <p>SABORES QUE ENCANTAM , MOMENTOS QUE FICAM</p>
        </div>
        <div className="flex gap-5 p-5">
          <p>Cathie Catalano Realtor® and Carly Catalano Morin Realtor® are licensed Realtors in Medicine Hat, fully committed to providing reliable and professional service to clients buying and selling homes. If you are new to Medicine Hat or an existing resident, contact Cathie and Carly for all your real estate needs.</p>
          <nav className="flex flex-col gap-2">
            <p className="border-b border-white">HOME</p>
            <p className="border-b border-white">ABOUT</p>
            <p className="border-b border-white">PROCESS</p>
            <p className="border-b border-white">LISTINGS</p>
            <p className="border-b border-white">CONTACT</p>
          </nav>
          <ul className="flex flex-col">
            <li className="flex p-1 gap-1 items-center"><BsFillTelephoneFill />+55 (16)99305-2849</li>
            <li className="flex p-1 gap-1 items-center"><BsFillEnvelopeFill />jhonatasanic@hotmail.com</li>
            <li className="flex p-1 gap-1 items-center"><BsFacebook />Cedric Grolet</li>
            <li className="flex p-1 gap-1 items-center"><BsInstagram />@cedricgrolet</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 rounded-3xl items-center py-10 px-16 w-3/4 text-brown-color bg-white absolute top-1/2 -translate-y-1/2">
        <h3 className="text-3xl">Nós estamos aqui para te ajudar</h3>
        <p className="text-center  text-sm">Para garantir a comodidade de nossos clientes, a Grolet Patisserie disponibiliza um serviço de entrega ágil e eficiente em toda a cidade, com horários flexíveis e o cuidado necessário para que nossas delícias cheguem até você com a qualidade e o frescor que merece.</p>
        <div className="flex w-full justify-around">
          <button className="text-xs rounded-full py-1 px-32 border border-brown-color">
            MY PROCESS
          </button>
          <button className="text-xs rounded-full py-1 px-20 border border-brown-color">
            AGENDE UMA CONSULTA GRATIS
          </button>
        </div>
      </div>
      <div className="flex justify-start px-10 py-1 text-sm w-full bg-gray-200">
        <p>&copy;JHONATAS ANICEZIO 2023 | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}