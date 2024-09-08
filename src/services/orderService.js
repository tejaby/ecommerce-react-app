import axios from "axios";

const url = "http://localhost:3000/api/orders";

export const getOrders = async (token) => {
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

export const getOrderDetails = async (token, id) => {
  try {
    const response = await axios.get(`${url}/${id}/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err.response;
  }
};
