// librerias
import { Outlet } from "react-router-dom";

// components
import { AdminLayout } from "../../components/layouts/AdminLayout";

export const DashBoard = () => {
  return (
    <AdminLayout>
      <h1>Dashboard</h1>
      <Outlet />
    </AdminLayout>
  );
};
