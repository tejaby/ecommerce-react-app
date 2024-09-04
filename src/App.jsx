// context
import { AuthProvider } from "./context/AuthContext";

// routes
import { Routes } from "./routes/Routes";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
