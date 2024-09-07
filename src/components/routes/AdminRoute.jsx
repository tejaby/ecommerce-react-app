import { ProtectedRoute } from "./ProtectedRoute";

export const AdminRoute = ({ children }) => {
  return <ProtectedRoute roleRequired={1}>{children}</ProtectedRoute>;
};
