// librerias
import { Outlet, Navigate } from "react-router-dom";

// react
import { useContext } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

export const ProtectedRoute = () => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
