import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { FaInstagram, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
import { LinkHeader } from "./components/link";
import { Button } from "./components/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex justify-between items-center text-xs px-16 py-1 bg-brown-350 text-white">
        <div className="flex gap-1 items-center">
          <AiOutlinePhone className="text-base"/>
          <p>LIGUE AGORA XXXX-XXXX</p>
        </div>
        <nav className="flex w-28 text-base justify-between">
          <Link target="blank" href='https://www.instagram.com/cedricgroletopera/'>
            <FaInstagram className="transition duration-500 hover:text-pink-500" />
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
          <h1 className="text-3xl font-medium pt-3">Grolet Patisserie</h1>
          <h2 className="text-xs font-medium">SABORES QUE ENCANTAM, MOMENTOS QUE FICAM</h2>
        </Link>
        <nav className="flex gap-4 justify-between items-center font-medium text-xs text-gray-500">
          <LinkHeader name="SOBRE" route="/about" />
          <LinkHeader name="RECEITAS" route="/recipes" />
          <LinkHeader name="PROCESSO" route="/process" />
          <LinkHeader name="CONTATO" route="/contact" />
          <Button />
        </nav>
      </div>
    </header>
  )
}