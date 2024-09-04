import { Routes as RouterRoutes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { DashBoard } from "../pages/DashBoard";

import { ProtectedRoute } from "../components/routes/ProtectedRoute";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<ProtectedRoute />}>
        <Route index Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="/settings" Component={Settings} />
      </Route>
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={DashBoard} />}
      />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </RouterRoutes>
  );
};
