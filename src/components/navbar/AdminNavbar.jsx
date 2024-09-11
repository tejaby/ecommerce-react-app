// librerias
import { Link } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// react
import { useState } from "react";

// hooks
import { useClearAuth } from "../../hooks/useClearAuth";

export const AdminNavbar = ({ toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { clearAuth } = useClearAuth();

  const handleOpenUserMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenUserMenu}
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            component={Link}
            to="/profile"
            onClick={handleCloseUserMenu}
          >
            Perfil
          </MenuItem>
          <MenuItem component={Link} to="/" onClick={handleCloseUserMenu}>
            Tienda
          </MenuItem>
          <MenuItem onClick={clearAuth}>Cerrar Sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
