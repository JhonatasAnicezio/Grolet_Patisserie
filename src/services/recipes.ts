import { RecipeDetails, Recipes, ResponseDetails } from '@/interface/IRecipes';
import { apiRecipes } from './api';

export async function getRecipes(): Promise<Recipes> {
  try {
    const { data } = await apiRecipes.get<Recipes>('/filter.php?c=Dessert');

    return data;
  } catch (error) {
    throw new Error('Erro ao obter usuário');
  }
}

export async function getRecipeDetails(id: string): Promise<RecipeDetails> {
  try {
    const data = await apiRecipes.get<ResponseDetails>(`/lookup.php?i=${id}`)
      .then(({ data: { meals } }) => {        
          const ingredients: string[] = [];
          const measures: string[] = [];

          const meal = meals[0];

          for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;

            if (meal[ingredientKey as keyof RecipeDetails]) {
              const ingredient = meal[ingredientKey as keyof RecipeDetails];
              const measure = meal[measureKey as keyof RecipeDetails] || ""; // Trate o valor da medida se for nulo

              ingredients.push(ingredient as string);
              measures.push(measure as string);
            }
          }

          return { ...meal, ingredients, measures }
      });

    return data;
  } catch (error) {
    throw new Error('Erro ao obter usuário');
  }
}
