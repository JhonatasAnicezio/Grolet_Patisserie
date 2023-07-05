import { getRecipeDetails } from "@/services/recipes";
import { ReturnButton } from "./components/returnButton"

export default async function CurrentRecipe({ params }: { params: { id: string } }) {

  const { strMeal, strInstructions, strMealThumb } = await getRecipeDetails(params.id);

  return (
    <main className="flex flex-col items-center text-brown-350 pt-space-header">
      <div className="flex flex-end w-4/5">
        <ReturnButton />
      </div>
      <div className="flex flex-col w-3/4 gap-10">
        <h1 className="text-2xl">{strMeal}</h1>
        <div className="flex justify-between">
          <img src={strMealThumb} className="w-1/2" />
          <div className="flex flex-col w-2/5">
            <h2>INGREDIENTES</h2>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2>MODO DE PREPARO</h2>
          <p>{strInstructions}</p>
        </div>
      </div>
    </main>
  );
};