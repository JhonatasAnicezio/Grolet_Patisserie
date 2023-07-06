'use client'
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export function CardProfile() {

  const { user } = useContext(AuthContext);

  return (
    <div className="flex py-16 justify-center gap-5 border-red-300 items-center w-3/4">
      <div className="flex flex-col gap-4 w-[70%] text-brown-350">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-2xl">Perfil</h1>
          <p>{user?.role}</p>
        </div>
        <div className="flex items-center justify-between border-b border-brown-350">
          <h2 className="font-medium text-xl">Nome do usuário</h2>
          <p>{user?.name}</p>
        </div>
        <div className="flex items-center justify-between border-b border-brown-350">
          <h2 className="font-medium text-xl">E-mail</h2>
          <p>{user?.email}</p>
        </div>
        <div className="flex items-center justify-between border-b border-brown-350">
          <h2 className="font-medium text-xl">Numero</h2>
          <p>{user?.phone}</p>
        </div>
      </div>
      <div className="w-52 h-52 bg-cover rounded-full" style={{ backgroundImage: "url('/default-user-image.webp')" }} />
    </div>
  );
}