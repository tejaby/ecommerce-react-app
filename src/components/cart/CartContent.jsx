// librerias
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
import { schema } from "./schemas/orderSchema";

export const CartContent = () => {
  const { cartItems } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return cartItems.length > 0 ? (
    <Box sx={{ maxWidth: "lg", margin: "auto", padding: 2 }}>
      <CartHeader />
      <CartContactForm register={register} errors={errors} />
      <CartTable cartItems={cartItems} />
      <CartFooter
        cartItems={cartItems}
        subtotal={subtotal}
        handleSubmit={handleSubmit}
        reset={reset}
      />
    </Box>
  ) : (
    <EmptyCart />
  );
};
