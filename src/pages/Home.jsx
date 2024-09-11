// components
import { Layout } from "../components/layouts/Layout";
import { ProductCard } from "../components/cards/ProductCard";
import { ListHeaders } from "../components/cards/ListHeaders";
import { Carousel } from "../components/carousel/Carousel";

// material-ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

// react
import { useEffect, useState } from "react";

// services
import { getProducts } from "../services/productService";

// hooks
import { useFetch } from "../hooks/useFetch";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const { data, loading } = useFetch(getProducts);

  useEffect(() => {
    if (!loading) {
      setProducts(data.slice(0, 4));
    }
  }, [data]);

  return (
    <Layout>
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Carousel />
      </Box>
      <Box sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
        <ListHeaders title="Recien agregados" />

        <Grid container spacing={2}>
          {products.map((item) => (
            <ProductCard product={item} key={item.product_id} />
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};
