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
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strYoutube: string;
  ingredients: string[],
  measures: string[],
} & {
  [key in `strIngredient${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20}`]: string;
} & {
  [key in `strMeasure${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20}`]: string;
};