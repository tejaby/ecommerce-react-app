// material-ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Pagination from "@mui/material/Pagination";

// components
import { Layout } from "../../components/layouts/Layout";
import { ProductCard } from "../../components/cards/ProductCard";

// context
import { useState } from "react";

// services
import { getProducts } from "../../services/productService";

// hooks
import { useFetch } from "../../hooks/useFetch";

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const { data } = useFetch(getProducts);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChangePage = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
        <Grid container spacing={2}>
          {currentProducts.map((item) => (
            <ProductCard product={item} key={item.product_id} />
          ))}
        </Grid>
        <Pagination
          count={Math.ceil(data.length / productsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          variant="outlined"
          size="large"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Box>
    </Layout>
  );
};
