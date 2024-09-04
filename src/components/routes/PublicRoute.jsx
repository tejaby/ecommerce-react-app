// librerias
import { Navigate } from "react-router-dom";

// react
import { useContext } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};
