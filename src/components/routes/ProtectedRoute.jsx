// librerias
import { Outlet, Navigate } from "react-router-dom";

// react
import { useContext } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

// hooks
import { useAuthValidation } from "../../hooks/useAuthValidation";

export const ProtectedRoute = ({ children, roleRequired }) => {
  const { token, user } = useContext(AuthContext);

  useAuthValidation();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (roleRequired && user.role_id !== roleRequired) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};
