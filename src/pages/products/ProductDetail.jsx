// librerias
import { useParams, useNavigate } from "react-router-dom";

// material-ui
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

// react
import { useState, useEffect, useContext } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

// services
import { getProduct } from "../../services/productService";

// hooks
import { useCartActions } from "../../hooks/useCartActions";

// components
import { Layout } from "../../components/layouts/Layout";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const { id } = useParams();

  const { addToCart } = useCartActions();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getProduct(token, id);
        if (result.data.length === 0) {
          return navigate("/");
        }
        setProduct(result.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <Layout>
      <Box sx={{ maxWidth: 900, margin: "auto", padding: 2 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ margin: "auto" }}>
            <Card>
              <CardMedia
                component="img"
                height="auto"
                image={product.image}
                alt={product.name}
              />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                  {product.name}
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <Rating value={4.5} precision={0.5} readOnly />
                  <Typography variant="body2" color="text.secondary" ml={1}>
                    (4.5 de 5)
                  </Typography>
                </Box>
                <Typography variant="h5" color="error" gutterBottom>
                  Q{product.price}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Box display="flex" gap={2}>
                  <Button
                    variant="contained"
                    startIcon={<AddShoppingCartIcon />}
                    fullWidth
                    onClick={() => addToCart(product)}
                  >
                    Añadir al carrito
                  </Button>
                  <IconButton color="error">
                    <FavoriteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
