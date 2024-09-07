import axios from "axios";

const url = "http://localhost:3000/api/products";

export const getProducts = async (token, category) => {
  try {
    const queryString = category ? `?category=${category}` : "";
    const fullUrl = `${url}${queryString}`;

    const response = await axios.get(`${fullUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export const getProductsExtended = async (token) => {
  try {
    const response = await axios.get(`${url}/extended`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export const createProduct = async (token, data) => {
  try {
    const reponse = await axios.post(`${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return reponse.data;
  } catch (err) {
    throw err.response;
  }
};
