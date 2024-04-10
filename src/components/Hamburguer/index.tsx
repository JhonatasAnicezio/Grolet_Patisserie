import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

export function Hamburguer() {
    const [isOpen, setIsOpen] = useState(false)

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