import { getRecipes } from "@/services/recipes";

export default async function Recipes() {
  const { meals } = await getRecipes();

  return (
    <main className="flex flex-col items-center pt-space-header">
      <h1 className="text-4xl text-brown-350 py-7">Receitas</h1>
      <div className="flex flex-wrap justify-between w-3/4">
        {meals?.map((e, index) => (
          <div key={index} className="flex flex-col text-brown-350 pb-8 justify-center w-[30%]">
            <img src={e.strMealThumb} className="w-full h-44" />
            <h2>{e.strMeal}</h2>
          </div>
        ) )}
      </div>
    </main>
  )
;}