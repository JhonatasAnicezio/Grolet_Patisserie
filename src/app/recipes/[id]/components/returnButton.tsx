'use client'
import { useRouter } from "next/navigation";
import { BsArrowReturnLeft } from "react-icons/bs";

export function ReturnButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="flex items-center gap-1"
      onClick={ () => router.back() }
    >
      <BsArrowReturnLeft/> RETURN
    </button>
  );
};