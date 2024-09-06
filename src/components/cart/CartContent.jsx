// material-ui
import Box from "@mui/material/Box";

// components
import { CartHeader } from "./CartHeader";
import { CartContactForm } from "./CartContactForm";
import { CartTable } from "./CartTable";
import { CartFooter } from "./CartFooter";

const cartItems = [
  { id: 1, name: "Razer Huntsman V3 Pro", price: 2000.0, quantity: 1 },
  { id: 2, name: "Razer Huntsman V3 Pro Mini", price: 1800.0, quantity: 2 },
];

export const CartContent = () => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ maxWidth: "lg", margin: "auto", padding: 2 }}>
      <CartHeader />
      <CartContactForm />
      <CartTable cartItems={cartItems} />
      <CartFooter subtotal={subtotal} />
    </Box>
  );
};
