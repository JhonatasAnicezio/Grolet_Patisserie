export type Recipes = {
  meals: Recipe[],
}

export type Recipe = {
  idMeal: string,
  strMeal: string,
  strMealThumb: string,
}

export type ResponseDetails = {
  meals: [RecipeDetails],
}

export type RecipeDetails = {
  idMeal: string,
  strMeal: string,
  strMealThumb: string,
  strInstructions: string,
  strYoutube: string,
}
