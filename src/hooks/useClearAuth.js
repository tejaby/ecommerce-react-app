// react
import { useContext } from "react";

// context
import { AuthContext } from "../context/AuthContext";

export const useClearAuth = () => {
  const { setUser, setToken } = useContext(AuthContext);

  const clearAuth = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return { clearAuth };
};
