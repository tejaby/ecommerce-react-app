// librerias
import { Link } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const CartHeader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Cart
      </Typography>
      <Button variant="outlined" color="primary" component={Link} to="/">
        Regresar a la tienda
      </Button>
    </Box>
  );
};
