// material-ui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// components
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ mt: 12, mb: 4 }}>{children}</Box>
      </Container>
      <Footer />
    </>
  );
};
