// librerias
import { useNavigate } from "react-router-dom";

// react
import { useState, useContext } from "react";

// context
import { AuthContext } from "../context/AuthContext";

export const useAuth = (service) => {
  const [error, setError] = useState(null);

  const { setUser, user, setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const executeService = async (data) => {
    try {
      const response = await service(data);
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);
      if (response.user.role_id === 1) {
        return navigate("/dashboard/orders/active");
      }
      navigate("/");
    } catch (err) {
      setError(err.data.error);
      throw err;
    }
  };

  return { executeService, user, error };
};
