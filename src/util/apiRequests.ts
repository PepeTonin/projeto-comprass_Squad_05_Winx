import axios from "axios";

export async function fetchProductsByCategoryId(categoryId: string) {
  let url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchCategoriesOneToFive() {
  const data = [];
  for (let i = 1; i <= 5; i++) {
    let url = `https://api.escuelajs.co/api/v1/categories/${i}`;
    let response = await axios.get(url);
    data.push(response.data);
  }
  return data;
}

export async function fetchProductsFilteredByTitle(title: string) {
  let url = `https://api.escuelajs.co/api/v1/products/?title=${title}&offset=0&limit=3`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchProductById(id: number) {
  let url = `https://api.escuelajs.co/api/v1/products/${id}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchLimitedAmountOfProductsFilteredByCategory(categoryId: number, amount: number) {
  let url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=0&limit=${amount}`;
  const response = await axios.get(url);
  return response.data;
}
