'use client'
import { Modal } from "@/components/Modal";
import { AuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { UserIcon } from "./userIcon";

export function Button() {
  const [isOpen, setIsOpen] = useState(false)

  const { token } = useContext(AuthContext);

  const pathname = usePathname();

  return (
    <>
      {token? <UserIcon /> :
        <button
          disabled={pathname === '/register'? true : false}
          onClick={() => setIsOpen(!isOpen)}
          className={`
            transition duration-500 rounded-full py-1 px-3 border border-gray-500 hover:bg-brown-350 hover:max-lg:bg-none hover:text-white hover:max-lg:border-none hover:border-brown-350
            ${pathname === '/register' && 'bg-brown-350 text-white border-brown-350'}
            max-sm:text-xs max-lg:border-none max-lg:bg-none
          `}
        >
          ENTRAR / CADASTRO
        </button>
      }

      <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}