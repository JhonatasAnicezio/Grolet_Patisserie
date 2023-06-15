import Link from "next/link";
import { BsFacebook, BsFillEnvelopeFill, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <main className="flex flex-col items-center  pt-space-header">
      <div className="flex flex-col gap-3 py-16 items-center text-center text-brown-color w-4/5">
        <h1 className="text-6xl">Entrar em contato</h1>
        <h2>CONTATO COM O NOSSO TIME DE ATENDIMENTO</h2>
        <p className="text-sm px-20">Está pronto para encomendar algo especial e exclusivo? Queremos ouvir suas ideias e transformá-las em realidade! Entre em contato conosco hoje mesmo e vamos trabalhar juntos para criar um pedido personalizado que atenda perfeitamente às suas expectativas.</p>
      </div>
      <div className="flex p-10 text-brown-350">
        <div className="flex p-10 gap-3">
          <img className="w-60 h-60 rounded-full" src="/cedric-grolet.webp" alt="Descrição da imagem" />
          <div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl">Cedric Grolet®</h2>
              <nav className="flex flex-col gap-3">
                <a className="flex items-center py-1 gap-1 border-b border-brown-350"><BsFillTelephoneFill />XXXX-XXX-XXX</a>
                <a className="flex items-center py-1 gap-1 border-b border-brown-350"><BsFillEnvelopeFill />cedricgrolet@fake.com</a>
                <Link href='https://www.facebook.com/cedricgrolet' className="transition duration-500 flex items-center py-1 gap-1 hover:text-brown-900 border-b border-brown-350">
                  <BsFacebook />Cedric Grolet
                </Link>
                <Link href='https://www.instagram.com/cedricgrolet/' className="transition duration-500 flex items-center py-1 gap-1 hover:text-brown-900 border-b border-brown-350">
                  <BsInstagram />@cedricgrolet
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex p-10 gap-3">
          <img className="w-60 h-60 rounded-full" src="/cedric-grolet.webp" alt="Descrição da imagem" />
          <div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl">Cedric Grolet®</h2>
              <nav className="flex flex-col gap-3">
                <a className="flex items-center py-1 gap-1 border-b border-brown-350"><BsFillTelephoneFill />XXXX-XXX-XXX</a>
                <a className="flex items-center py-1 gap-1 border-b border-brown-350"><BsFillEnvelopeFill />cedricgrolet@fake.com</a>
                <Link href='https://www.facebook.com/cedricgrolet' className="transition duration-500 hover:text-brown-900 flex items-center py-1 gap-1 border-b border-brown-350">
                  <BsFacebook />Cedric Grolet
                </Link>
                <Link href='https://www.instagram.com/cedricgrolet/' className="transition duration-500 hover:text-brown-900 flex items-center py-1 gap-1 border-b border-brown-350">
                  <BsInstagram />@cedricgrolet
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-cover h-banner w-full" style={{ backgroundImage: "url('/frutas.webp')" }}>
        <div className="flex flex-col gap-5 p-11 items-center text-center text-brown-color rounded-3xl w-11/12 bg-white">
          <h2 className="text-6xl font-light">Marque uma consulta gratuita</h2>
          <h3>NÃO SABE POR ONDE COMEÇAR? VAMOS CONVERSAR!</h3>
          <p className="px-7">Agende uma consulta através do link abaixo para uma conversa de 15 minutos, onde discutiremos suas preferências, expectativas e como podemos criar delícias personalizadas para tornar seus momentos especiais ainda mais memoráveis.</p>
          <button className="transition duration-500 px-10 py-0.5 rounded-full hover:bg-brown-900 bg-brown-color text-white">AGENDE UMA CHAMADA AGORA</button>
        </div>
      </div>
    </main>
  );
}