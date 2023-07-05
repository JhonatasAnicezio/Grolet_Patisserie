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
    const { data: { meals } } = await apiRecipes.get<ResponseDetails>(`/lookup.php?i=${id}`);

    return meals[0];
  } catch (error) {
    throw new Error('Erro ao obter usuário');
  }
}
