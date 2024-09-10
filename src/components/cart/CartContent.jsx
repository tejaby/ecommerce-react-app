// material-ui
import Box from "@mui/material/Box";

// context
import { useContext } from "react";

// context
import { CartContext } from "../../context/CartContext";

// components
import { CartHeader } from "./CartHeader";
import { CartContactForm } from "./CartContactForm";
import { CartTable } from "./CartTable";
import { CartFooter } from "./CartFooter";
import { EmptyCart } from "./EmptyCart";

export const CartContent = () => {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return cartItems.length > 0 ? (
    <Box sx={{ maxWidth: "lg", margin: "auto", padding: 2 }}>
      <CartHeader />
      <CartContactForm />
      <CartTable cartItems={cartItems} />
      <CartFooter subtotal={subtotal} />
    </Box>
  ) : (
    <EmptyCart />
  );
};
