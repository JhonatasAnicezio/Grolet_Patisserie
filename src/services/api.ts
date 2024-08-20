import axios from 'axios';

export const clients = axios.create({
  baseURL: 'http://localhost:3000/clients',
});

export const authentication = axios.create({
  baseURL: 'http://localhost:3000/authentication',
});

export const apiRecipes = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});