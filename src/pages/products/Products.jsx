import { Outlet } from "react-router-dom";

// components
import { Layout } from "../../components/layouts/Layout";

export const Products = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
