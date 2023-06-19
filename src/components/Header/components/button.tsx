'use client'
import { Modal } from "@/components/Modal";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Button() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname();

  return (
    <>
      <button
        disabled={pathname === '/register'? true : false}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          transition duration-500 rounded-full py-1 px-3 border border-gray-500 hover:bg-brown-350 hover:text-white hover:border-brown-350
          ${pathname === '/register' && 'bg-brown-350 text-white border-brown-350'}
        `}
      >
        ENTRAR / CADASTRO
      </button>

      <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}