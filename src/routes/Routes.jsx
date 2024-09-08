// librerias
import { Routes as RouterRoutes, Route } from "react-router-dom";

// components
import { ProtectedRoute } from "../components/routes/ProtectedRoute";
import { PublicRoute } from "../components/routes/PublicRoute";
import { AdminRoute } from "../components/routes/AdminRoute";

// pages
import { Home } from "../pages/Home";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";

import { Profile } from "../pages/user/Profile";
import { Settings } from "../pages/user/Settings";

import { DashBoard } from "../pages/admin/DashBoard";
import { AdminCategories } from "../pages/admin/categories/AdminCategories";
import { ListCategories } from "../pages/admin/categories/ListCategories";
import { CreateCategory } from "../pages/admin/categories/CreateCategory";
import { AdminProducts } from "../pages/admin/products/AdminProducts";
import { ListProducts } from "../pages/admin/products/ListProducts";
import { CreateProduct } from "../pages/admin/products/CreateProduct";
import { AdminOrders } from "../pages/admin/orders/AdminOrders";
import { ActiveOrders } from "../pages/admin/orders/ActiveOrders";
import { CompletedOrders } from "../pages/admin/orders/CompletedOrders";

import { Products } from "../pages/products/Products";
import { Laptops } from "../pages/products/categories/Laptops";
import { Peripherals } from "../pages/products/categories/Peripherals";
import { Monitors } from "../pages/products/categories/Monitors";
import { Components } from "../pages/products/categories/Components";

import { Cart } from "../pages/products/Cart";

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
        <Route path="/cart" Component={Cart} />
      </Route>
      <Route element={<AdminRoute />}>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="categorias" element={<AdminCategories />}>
            <Route path="list" element={<ListCategories />} />
            <Route path="create" element={<CreateCategory />} />
          </Route>
          <Route path="productos" element={<AdminProducts />}>
            <Route path="list" element={<ListProducts />} />
            <Route path="create" element={<CreateProduct />} />
          </Route>
          <Route path="orders" element={<AdminOrders />}>
            <Route path="active" element={<ActiveOrders />} />
            <Route path="history" element={<CompletedOrders />} />
          </Route>
        </Route>
      </Route>
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
