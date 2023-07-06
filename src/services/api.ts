import axios from 'axios';

export const apiUser = axios.create({
  baseURL: 'https://api-patisserie-users.up.railway.app/user',
});

export const apiRecipes = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});