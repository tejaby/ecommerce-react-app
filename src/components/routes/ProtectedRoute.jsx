// librerias
import { Outlet, Navigate } from "react-router-dom";

// react
import { useContext } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

// hooks
import { useAuthValidation } from "../../hooks/useAuthValidation";

export const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  useAuthValidation();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};
