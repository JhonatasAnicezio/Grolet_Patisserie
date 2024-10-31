import axios from 'axios';

export const clients = axios.create({
  baseURL: 'https://api-clients-97630508568.us-south1.run.app/clients',
});

export const authentication = axios.create({
  baseURL: 'https://api-clients-97630508568.us-south1.run.app/authentication',
});

export const apiRecipes = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});