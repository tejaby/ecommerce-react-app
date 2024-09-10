// react
import { useContext } from "react";

// context
import { CartContext } from "../context/CartContext";

export const useCartActions = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.product_id === product.product_id
    );
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product_id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== product_id)
    );
  };

  const increaseQuantity = (product_id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_id === product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (product_id) => {
    const existingItem = cartItems.find(
      (item) => item.product_id === product_id
    );

    if (existingItem.quantity === 1) {
      removeFromCart(product_id);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product_id === product_id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };
};
