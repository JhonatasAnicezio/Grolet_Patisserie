import { getRecipes } from "@/services/recipes";
import Link from "next/link";

export default async function Recipes() {
  const { meals } = await getRecipes();

  return (
    <main className="flex flex-col text-brown-350 gap-3 items-center pt-space-header">
      <h1 className="text-4xl pt-7">Receitas</h1>
      <p className="pb-7">As melhores receitas você só encontra aqui.</p>
      <div className="flex flex-wrap gap-10 justify-between max-sm:justify-center w-3/4 max-sm:w-full">
        {meals?.map((e, index) => (
          <div id={e.idMeal} key={index} className="flex flex-col justify-center w-[28%] max-sm:w-[80%]">
            <Link href={`/recipes/${e.idMeal}`}>
              <img src={e.strMealThumb} className="w-full h-44 mb-3" />
              <h2 className="py-2 w-full text-center border-t border-gray-400">{e.strMeal}</h2>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}