import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { FaInstagram, FaFacebookSquare, FaEnvelope } from "react-icons/fa";

export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center text-base px-16 py-1 bg-brown-color text-white">
        <div className="flex gap-1 items-center"><AiOutlinePhone/>LIGUE AGORA XXXX-XXXX</div>
        <nav className="flex w-28 text-xl justify-between">
          <Link target="blank" href='https://www.instagram.com/cedricgroletopera/'>
            <FaInstagram />
          </Link>
          <Link target="blank" href='https://www.facebook.com/cedricgrolet'>
            <FaFacebookSquare />
          </Link>
          <Link target="blank" href='mailto:jhonatasanic@hotmail.com'>
            <FaEnvelope />
          </Link>
        </nav>
      </div>
      <div className="flex border text-brown-color p-3 justify-around">
        <Link href='/'>
          <h1 className="text-4xl pt-3">Grolet Patisserie</h1>
          <h2>SABORES QUE ENCANTAM, MOMENTOS QUE FICAM</h2>
        </Link>
        <nav className="flex w-2/5 justify-between items-center text-sm">
          <Link href='/about'>SOBRE</Link>
          <Link href='/recipes'>RECEITAS</Link>
          <Link href='/process'>PROCESSO</Link>
          <Link href='/contact'>CONTATO</Link>
          <button className="rounded-full px-5 border border-brown-color">
            ENTRAR/ CADASTRO
          </button>
        </nav>
      </div>
    </header>
  )
}