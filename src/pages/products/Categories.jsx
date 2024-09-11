// librerias
import { Outlet } from "react-router-dom";

// components
import { Layout } from "../../components/layouts/Layout";

export const Categories = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
