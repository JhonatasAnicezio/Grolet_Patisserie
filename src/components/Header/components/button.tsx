'use client'
import Login from "@/components/Form/Login/indext";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

import { BsXSquareFill } from "react-icons/bs";

export function Button() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="transition duration-500 rounded-full py-1 px-5 border border-gray-500 hover:bg-brown-350 hover:text-white hover:border-brown-350"
      >
        ENTRAR / CADASTRO
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(!isOpen)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex relative w-3/4 text-brown-350 h-banner transform overflow-hidden bg-white shadow-xl transition-all">
                  <img src="/croasaint.webp" className="h-full" />
                  <div className="flex items-center justify-center w-full">
                    <div className="flex flex-col items-center w-3/4">
                      <h1 className="text-4xl font-medium">Iniciar sessão</h1>
                      <Login />
                    </div>
                  </div>

                  <button
                    type='button'
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute p-3 right-0"
                  >
                    <BsXSquareFill />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}