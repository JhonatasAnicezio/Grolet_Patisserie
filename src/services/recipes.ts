import { Recipes } from '@/interface/IRecipes';
import { apiRecipes } from './api';

export async function getRecipes(): Promise<Recipes> {
  try {
    const { data } = await apiRecipes.get<Recipes>('/filter.php?c=Dessert',);

    return data;
  } catch (error) {
    throw new Error('Erro ao obter usuário');
  }
}
