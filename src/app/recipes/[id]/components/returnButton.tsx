'use client'
import { useRouter } from "next/navigation";

export function ReturnButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={ () => router.back() }
    >
      {`<<RETURN`}
    </button>
  );
};