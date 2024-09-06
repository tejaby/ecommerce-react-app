// material-ui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// react
import { useState } from "react";

// components
import { AdminNavbar } from "../navbar/AdminNavbar";
import { AdminDrawer } from "../drawer/AdminDrawer";

export const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AdminNavbar toggleDrawer={toggleDrawer} />
      <AdminDrawer open={open} toggleDrawer={toggleDrawer} />
      <Container maxWidth="lg">
        <Box sx={{ mt: 12, mb: 4 }}>{children}</Box>
      </Container>
    </>
  );
};
