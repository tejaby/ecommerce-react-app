// librerias
import { jwtDecode } from "jwt-decode";

// react
import { useContext, useEffect } from "react";

// context
import { AuthContext } from "../context/AuthContext";

export const useAuthValidation = () => {
  const { token, setToken, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp < Date.now() / 1000) {
          throw new Error("Token expired");
        }
      } catch (err) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, []);
};
