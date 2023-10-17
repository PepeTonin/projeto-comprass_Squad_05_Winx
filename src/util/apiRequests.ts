import axios from "axios";

export async function fetchProductsByCategoryId(categoryId: string) {
  let url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchCategories() {
  let url = `https://api.escuelajs.co/api/v1/categories`;
  const response = await axios.get(url);
  if (response.data.length < 5) {
    return response.data;
  } else {
    return response.data.slice(0, 5);
  }
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

export async function fetchLimitedAmountOfProductsFilteredByCategory(
  categoryId: number,
  amount: number
) {
  let url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=0&limit=${amount}`;
  const response = await axios.get(url);
  return response.data;
}
