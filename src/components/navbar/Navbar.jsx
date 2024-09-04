// librerias
import { Link } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// react
import { useState } from "react";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleOpenUserMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
              Laptops
            </MenuItem>
            <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
              Perifericos
            </MenuItem>
            <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
              Componentes
            </MenuItem>
            <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
              Las Mas Toras
            </MenuItem>
          </Menu>
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            TejaTienda
          </Link>
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <MenuItem component={Link} to="/">
            Laptops
          </MenuItem>
          <MenuItem component={Link} to="/">
            Perifericos
          </MenuItem>
          <MenuItem component={Link} to="/">
            Componentes
          </MenuItem>
          <MenuItem component={Link} to="/">
            Las Mas Toras
          </MenuItem>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: 2,
            flexGrow: 0,
          }}
        >
          <InputBase
            placeholder="¿qué estás buscando?"
            sx={{
              ml: 1,
              flex: 1,
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "2px 8px",
            }}
          />
          <IconButton type="submit" color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>

        <IconButton component={Link} to="/" color="inherit">
          <ShoppingCartIcon />
        </IconButton>

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
          <MenuItem onClick={handleCloseUserMenu}>Perfil</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Compras</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Cesta</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Cerrar Sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
