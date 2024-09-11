// react
import { useState, useContext } from "react";

// context
import { AuthContext } from "../context/AuthContext";

export const useAuth = (service) => {
  const [error, setError] = useState(null);

  const { setUser, user, setToken } = useContext(AuthContext);

  const executeService = async (data) => {
    try {
      const response = await service(data);
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);
      return response;
    } catch (err) {
      setError(err.data.error);
      throw err;
    }
  };

  return { executeService, user, error };
};
