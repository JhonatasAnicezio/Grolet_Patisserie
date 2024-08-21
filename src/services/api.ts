import axios from 'axios';

export const clients = axios.create({
  baseURL: 'https://api-clients-c2d0.onrender.com/clients',
});

export const authentication = axios.create({
  baseURL: 'https://api-clients-c2d0.onrender.com/authentication',
});

export const apiRecipes = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});