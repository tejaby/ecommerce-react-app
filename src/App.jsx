// material-ui
import { CssBaseline } from "@mui/material";

// librerias
import { Toaster } from "react-hot-toast";

// context
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

// routes
import { Routes } from "./routes/Routes";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <CssBaseline />
        <Routes />
        <Toaster position="bottom-center" reverseOrder={false} />
      </CartProvider>
    </AuthProvider>
  );
}
