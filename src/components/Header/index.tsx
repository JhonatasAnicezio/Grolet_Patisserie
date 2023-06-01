import { AiOutlinePhone } from "react-icons/ai";
import { FaInstagram, FaFacebookSquare, FaEnvelope } from "react-icons/fa";

export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center text-base px-16 py-1 bg-brown-color text-white">
        <div className="flex items-center"><AiOutlinePhone/>LIGUE AGORA XXXX-XXXX</div>
        <nav className="flex w-28 text-xl justify-between">
          <FaInstagram />
          <FaFacebookSquare />
          <FaEnvelope />
        </nav>
      </div>
      <div className="flex border text-brown-color p-3 justify-around">
        <div>
          <h1 className="text-4xl pt-3">Grolet Patisserie</h1>
          <h2>SABORES QUE ENCANTAM, MOMENTOS QUE FICAM</h2>
        </div>
        <nav className="flex w-2/5 justify-between items-center text-sm">
          <p>ABOUT</p>
          <p>RECIPES</p>
          <p>PROCESS</p>
          <p>CONTACT</p>
          <button className="rounded-full px-5 border border-brown-color">
            SIGN IN/ REGISTER
          </button>
        </nav>
      </div>
    </header>
  )
}