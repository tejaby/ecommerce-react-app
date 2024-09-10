// librerias
import { Link } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const EmptyCart = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <ShoppingCartIcon sx={{ fontSize: 64, color: "text.secondary", mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Tu carrito está vacío
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        ¡Agrega algunos productos para comenzar!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ mt: 2 }}
      >
        Ir a la tienda
      </Button>
    </Box>
  );
};
