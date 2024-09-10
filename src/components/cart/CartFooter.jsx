// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

// hooks
import { useCartActions } from "../../hooks/useCartActions";

export const CartFooter = ({ subtotal }) => {
  const { clearCart } = useCartActions();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        mt: 2,
      }}
    >
      <Button variant="contained" color="error" onClick={clearCart}>
        Cancelar compra
      </Button>
      <Paper elevation={3} sx={{ padding: 2, width: 300 }}>
        <Typography variant="h6" gutterBottom>
          Resumen total
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Subtotal:</Typography>
          <Typography>Q{subtotal}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Envío:</Typography>
          <Typography>Gratis</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">Q{subtotal}</Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth>
          Confirmar Compra
        </Button>
      </Paper>
    </Box>
  );
};
