import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { FaInstagram, FaFacebookSquare, FaEnvelope } from "react-icons/fa";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex justify-between items-center text-base px-16 py-1 bg-brown-350 text-white">
        <div className="flex gap-1 items-center">
          <AiOutlinePhone/>
          <p>LIGUE AGORA XXXX-XXXX</p>
        </div>
        <nav className="flex w-28 text-xl justify-between">
          <Link target="blank" href='https://www.instagram.com/cedricgroletopera/'>
            <FaInstagram className="transition duration-500 marker:hover:text-pink-500" />
          </Link>
          <Link target="blank" href='https://www.facebook.com/cedricgrolet'>
            <FaFacebookSquare className="transition duration-500 hover:text-blue-400" />
          </Link>
          <Link target="blank" href='mailto:jhonatasanic@hotmail.com'>
            <FaEnvelope className="transition duration-500 hover:text-red-400" />
          </Link>
        </nav>
      </div>
      <div className="flex text-brown-350 p-3 justify-around">
        <Link href='/'>
          <h1 className="text-4xl font-medium pt-3">Grolet Patisserie</h1>
          <h2 className="font-medium">SABORES QUE ENCANTAM, MOMENTOS QUE FICAM</h2>
        </Link>
        <nav className="flex w-2/5 justify-between items-center font-semibold text-sm text-gray-500">
          <Link className="transition duration-500 hover:text-brown-350 hover:border-b-2 hover:border-brown-350" href='/about'>SOBRE</Link>
          <Link className="transition duration-500 hover:text-brown-350 hover:border-b-2 hover:border-brown-350" href='/recipes'>RECEITAS</Link>
          <Link className="transition duration-500 hover:text-brown-350 hover:border-b-2 hover:border-brown-350" href='/process'>PROCESSO</Link>
          <Link className="transition duration-500 hover:text-brown-350 hover:border-b-2 hover:border-brown-350" href='/contact'>CONTATO</Link>
          <button className="transition duration-500 rounded-full py-1 px-5 border border-gray-500 hover:bg-brown-350 hover:text-white hover:border-brown-350">
            ENTRAR / CADASTRO
          </button>
        </nav>
      </div>
    </header>
  )
}