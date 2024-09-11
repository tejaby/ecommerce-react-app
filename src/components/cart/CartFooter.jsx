// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

// services
import { createOrder } from "../../services/orderService";

// hooks
import { useCartActions } from "../../hooks/useCartActions";
import { useSubmit } from "../../hooks/useSubmit";
import { useNotify } from "../../hooks/useNotify";

export const CartFooter = ({ cartItems, subtotal, handleSubmit, reset }) => {
  const { execute, data, error } = useSubmit(createOrder);

  const { clearCart } = useCartActions();

  useNotify(data, error, "Pedido creado con éxito", "Error al crear el pedido");

  const onSubmit = async (data) => {
    const order = {
      ...data,
      total_amount: subtotal,
      state_id: 3,
      order_details: cartItems.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      })),
    };
    const result = await execute(order);
    if (result) {
      reset();
      clearCart();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Confirmar Compra
        </Button>
      </Paper>
    </Box>
  );
};
