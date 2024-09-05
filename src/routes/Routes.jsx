// librerias
import { Routes as RouterRoutes, Route } from "react-router-dom";

// components
import { ProtectedRoute } from "../components/routes/ProtectedRoute";
import { PublicRoute } from "../components/routes/PublicRoute";

// pages
import { Home } from "../pages/Home";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";

import { Profile } from "../pages/user/Profile";
import { Settings } from "../pages/user/Settings";

import { DashBoard } from "../pages/admin/DashBoard";

import { Products } from "../pages/products/Products";
import { Laptops } from "../pages/products/categories/Laptops";
import { Peripherals } from "../pages/products/categories/Peripherals";
import { Monitors } from "../pages/products/categories/Monitors";
import { Components } from "../pages/products/categories/Components";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<ProtectedRoute />}>
        <Route index Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="/settings" Component={Settings} />\
        <Route path="/categorias" element={<Products />}>
          <Route path="laptops" element={<Laptops />} />
          <Route path="perifericos" element={<Peripherals />} />
          <Route path="componentes" element={<Components />} />
          <Route path="monitores" element={<Monitors />} />
        </Route>
      </Route>
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={DashBoard} />}
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </RouterRoutes>
  );
};
