import axios from "axios";

const url = "http://localhost:3000/api/categories";

export const getCategories = async (token) => {
  try {
    const response = await axios.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export const getCategoriesExtended = async (token) => {
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

export const getCategory = async (token, id) => {
  try {
    const response = await axios.get(`${url}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export const createCategory = async (token, data) => {
  try {
    const response = await axios.post(`${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export const updateCategory = async (token, id, data) => {
  try {
    const response = await axios.put(`${url}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export const updateCategoryState = async (token, id, data) => {
  try {
    const response = await axios.put(`${url}/${id}/state`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err.response;
  }
};
