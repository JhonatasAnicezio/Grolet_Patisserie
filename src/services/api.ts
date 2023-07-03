import axios from 'axios';

export const apiUser = axios.create({
  baseURL: 'http://localhost:3001/user',
});

export const apiRecipes = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});