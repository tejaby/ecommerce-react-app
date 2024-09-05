// librerias
import { useLocation } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

// components
import { ProductCard } from "../../../components/cards/ProductCard";

// react
import { useContext } from "react";

// context
import { AuthContext } from "../../../context/AuthContext";

// services
import { getProducts } from "../../../services/productService";

// hooks
import { useFetchService } from "../../../hooks/useFetchService";

export const Components = () => {
  const location = useLocation();
  const currentRoute = location.pathname.split("/").pop();

  const { token } = useContext(AuthContext);

  const { data } = useFetchService(getProducts, token, currentRoute);

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
