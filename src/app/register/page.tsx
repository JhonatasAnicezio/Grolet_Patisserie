import { FormRegister } from "@/components/Form/FormRegister";

export default function Register() {
  return (
    <main className="pt-space-header gap-10 flex flex-col items-center">
      <h1 className="text-brown-350 pt-20 font-medium text-5xl">Crie uma conta</h1>
      <FormRegister />
    </main>
  );
}