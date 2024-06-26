import Link from "next/link";
import FormMessage from '../../components/Form/FormMessage';
import { BsFacebook, BsFillEnvelopeFill, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <main className="flex flex-col items-center  pt-space-header">
      <div className="flex flex-col gap-2 py-8 items-center text-center text-brown-350 w-4/5 max-sm:w-[90%]">
        <h1 className="text-4xl">Entrar em contato</h1>
        <h2 className="text-sm text-brown-300 font-semibold">CONTATO COM O NOSSO TIME DE ATENDIMENTO</h2>
        <p className="text-xs px-20 max-sm:px-10">Está pronto para encomendar algo especial e exclusivo? Queremos ouvir suas ideias e transformá-las em realidade! Entre em contato conosco hoje mesmo e vamos trabalhar juntos para criar um pedido personalizado que atenda perfeitamente às suas expectativas.</p>
      </div>
      <div className="flex max-lg:flex-col w-3/4 max-lg:w-full max-lg:items-center justify-between text-brown-350">
        <div className="flex p-12 max-lg:w-full max-lg:justify-center max-sm:p-2 gap-3">
          <img className="w-40 max-sm:w-28 h-40 max-sm:h-28 rounded-full" src="/cedric-grolet.webp" alt="Descrição da imagem" />
          <div className="max-lg:w-1/2">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl">Cedric Grolet®</h2>
              <nav className="flex flex-col text-xs">
                <a className="flex items-center py-2 gap-1 border-b border-brown-350"><BsFillTelephoneFill />XXXX-XXX-XXX</a>
                <a className="flex items-center py-2 gap-1 border-b border-brown-350"><BsFillEnvelopeFill />cedricgrolet@fake.com</a>
                <Link href='https://www.facebook.com/cedricgrolet' className="transition duration-500 flex items-center py-2 gap-1 hover:text-brown-900 border-b border-brown-350">
                  <BsFacebook />Cedric Grolet
                </Link>
                <Link href='https://www.instagram.com/cedricgrolet/' className="transition duration-500 flex items-center py-2 gap-1 hover:text-brown-900">
                  <BsInstagram />@cedricgrolet
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex p-12 max-lg:w-full max-lg:justify-center max-sm:p-2 gap-3">
          <img className="w-40 max-sm:w-28 h-40 max-sm:h-28 rounded-full" src="/jhonatas.webp" alt="Descrição da imagem" />
          <div className="max-lg:w-1/2">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl">Jhonatas Anicezio®</h2>
              <nav className="flex flex-col text-xs">
                <a className="flex items-center py-2 gap-1 border-b border-brown-350"><BsFillTelephoneFill />(16)992219948</a>
                <a className="flex items-center py-2 gap-1 border-b border-brown-350"><BsFillEnvelopeFill />jhonatasanic@hotmail.com</a>
                <Link href='https://www.facebook.com/cedricgrolet' className="transition duration-500 flex items-center py-2 gap-1 hover:text-brown-900 border-b border-brown-350">
                  <BsFacebook />Jhonatas Anicezio
                </Link>
                <Link href='https://www.instagram.com/_jhonatas_z/' className="transition duration-500 flex items-center py-2 gap-1 hover:text-brown-900">
                  <BsInstagram />@jhonatasanicezio
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <FormMessage />
      <div className="flex items-center justify-center bg-cover h-96 w-full" style={{ backgroundImage: "url('/frutas.webp')" }}>
        <div className="flex flex-col gap-3 p-11 max-sm:p-6 items-center text-center text-brown-350 rounded-3xl w-3/4 max-sm:w-[90%] bg-white">
          <h2 className="py-1 text-4xl max-sm:text-3xl font-normal">Marque uma consulta gratuita</h2>
          <h3 className="text-xs font-medium">NÃO SABE POR ONDE COMEÇAR? VAMOS CONVERSAR!</h3>
          <p className="px-20 max-sm:px-1 text-xs">Agende uma consulta através do link abaixo para uma conversa de 15 minutos, onde discutiremos suas preferências, expectativas e como podemos criar delícias personalizadas para tornar seus momentos especiais ainda mais memoráveis.</p>
          <a href="tel:+5516993052849" className="transition duration-500 text-xs px-12 py-1 rounded-full hover:bg-brown-900 bg-brown-350 text-white">AGENDE UMA CHAMADA AGORA</a>
        </div>
      </div>
    </main>
  );
}