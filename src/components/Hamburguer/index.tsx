import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

interface Hamburguer {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}

export function Hamburguer({ isOpen, setIsOpen }: Hamburguer) {

    return (
        <button onClick={() => setIsOpen(!isOpen)} className="min-[872px]:hidden max-[872px]:visible text-4xl">
            {isOpen? 
                <AiOutlineClose />
            :
                <AiOutlineMenu />
            }
        </button>
    )
}