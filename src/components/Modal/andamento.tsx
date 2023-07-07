'use client'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiFillWarning } from "react-icons/ai";

export function ModalAndamento() {
  const [isOpen, setIsOpen] = useState(true)

  return (
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
              <Dialog.Panel className="flex flex-col gap-2 rounded-xl items-center justify-center relative w-1/2 h-64 text-brown-350 transform overflow-hidden bg-white shadow-xl transition-all">
                <AiFillWarning className="text-6xl text-yellow-600" />
                <h2 className="text-3xl">Atenção!</h2>
                <p className="text-center text-sm w-3/4">Este projeto ainda está em desenvolvimento, por isso algumas funcionalidades, e questões como responsividade ainda estão sendo desenvolvidas.</p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}