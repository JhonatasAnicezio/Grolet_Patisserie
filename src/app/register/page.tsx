import { FormRegister } from "@/components/Form/FormRegister";

export default function Register() {
  return (
    <main className="pt-space-header gap-10  max-lg:gap-5 max-[875px]:w-full flex flex-col items-center">
      <h1 className="text-brown-350 pt-20 max-lg:pt-5 font-medium max-lg:text-3xl text-5xl">Crie uma conta</h1>
      <FormRegister />
    </main>
  );
}