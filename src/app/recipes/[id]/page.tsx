import { getRecipeDetails } from "@/services/recipes";
import { ReturnButton } from "./components/returnButton"
import { YouTubeEmbed } from "./components/youTubeEnbed";

export default async function CurrentRecipe({ params }: { params: { id: string } }) {

  const { strMeal, strInstructions, strMealThumb, strYoutube } = await getRecipeDetails(params.id);

  return (
    <main className="flex flex-col items-center gap-10 text-brown-350 pt-space-header">
      <div className="flex flex-end w-4/5">
        <ReturnButton />
      </div>
      <div className="flex flex-col items-center w-3/4 gap-3">
        <h1 className="text-3xl w-full">{strMeal}</h1>
        <div className="flex w-full justify-between">
          <img src={strMealThumb} className="w-1/2" />
          <div className="flex flex-col w-2/5">
            <h2>INGREDIENTES</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/4 gap-3">
        <h2>MODO DE PREPARO</h2>
        <p>{strInstructions}</p>
      </div>
      <YouTubeEmbed url={strYoutube} />
    </main>
  );
};