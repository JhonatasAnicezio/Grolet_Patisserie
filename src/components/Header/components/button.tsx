'use client'
import { Modal } from "@/components/Modal";
import { AuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { UserIcon } from "./userIcon";

export function Button() {
  const [isOpen, setIsOpen] = useState(false)

  const { token, isFetching } = useContext(AuthContext);

  const pathname = usePathname();

  return (
    <>
      {token? <UserIcon /> :
        <button
          disabled={pathname === '/register'? true : false}
          onClick={() => setIsOpen(!isOpen)}
          className={`
            transition duration-500 rounded-full py-1 px-3 border border-gray-500 hover:bg-brown-350 hover:text-white hover:border-brown-350
            ${isFetching && 'bg-gray-500 text-gray-500 duration-0'}
            ${pathname === '/register' && 'bg-brown-350 text-white border-brown-350'}
          `}
        >
          ENTRAR / CADASTRO
        </button>
      }

      <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}