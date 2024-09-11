// librerias
import { useLocation } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

// components
import { ProductCard } from "../../../components/cards/ProductCard";

// services
import { getProducts } from "../../../services/productService";

// hooks
import { useFetch } from "../../../hooks/useFetch";

export const Laptops = () => {
  const location = useLocation();
  const currentRoute = location.pathname.split("/").pop();

  const { data } = useFetch(getProducts, currentRoute);

  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <ProductCard product={item} key={item.product_id} />
        ))}
      </Grid>
    </Box>
  );
};
