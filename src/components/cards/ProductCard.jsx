// librerias
import { useNavigate } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid2";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// hooks
import { useCartActions } from "../../hooks/useCartActions";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCartActions();

  const navigate = useNavigate();

  const viewProductDetails = (id) => {
    navigate(`/productos/${id}`);
  };

  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <Card>
        <Box sx={{ position: "relative", height: 200 }}>
          <CardActionArea
            onClick={() => viewProductDetails(product.product_id)}
          >
            <CardMedia
              component="img"
              height="200px"
              image={
                product.image ? product.image : "https://placehold.co/200x200"
              }
              alt={product.name}
            />
          </CardActionArea>

          {product.stock <= 0 && (
            <Box
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                bgcolor: "gray",
                color: "white",
                padding: "2px 8px",
                borderRadius: 1,
              }}
            >
              no stock
            </Box>
          )}
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{ height: 40, overflow: "hidden" }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            color="error.main"
            sx={{ fontWeight: "bold", mr: 1 }}
          >
            Q{product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
            sx={{ bgcolor: "#000" }}
            disabled={product.stock <= 0}
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
