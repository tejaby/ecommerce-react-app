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
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// react
import { useState, useContext } from "react";

// context
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// hooks
import { useClearAuth } from "../../hooks/useClearAuth";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const { clearAuth } = useClearAuth();

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
            <MenuItem
              component={Link}
              to="/categorias/laptops"
              onClick={handleCloseNavMenu}
            >
              Laptops
            </MenuItem>
            <MenuItem
              component={Link}
              to="/categorias/perifericos"
              onClick={handleCloseNavMenu}
            >
              Perifericos
            </MenuItem>
            <MenuItem
              component={Link}
              to="/categorias/componentes"
              onClick={handleCloseNavMenu}
            >
              Componentes
            </MenuItem>
            <MenuItem
              component={Link}
              to="/categorias/monitores"
              onClick={handleCloseNavMenu}
            >
              Monitores
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
          <MenuItem component={Link} to="/categorias/laptops">
            Laptops
          </MenuItem>
          <MenuItem component={Link} to="/categorias/perifericos">
            Perifericos
          </MenuItem>
          <MenuItem component={Link} to="/categorias/componentes">
            Componentes
          </MenuItem>
          <MenuItem component={Link} to="/categorias/monitores">
            Monitores
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

        <IconButton component={Link} to="/cart" color="inherit">
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
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
          <MenuItem
            component={Link}
            to="/profile"
            onClick={handleCloseUserMenu}
          >
            Perfil
          </MenuItem>
          {user.role_id === 1 && (
            <MenuItem
              component={Link}
              to="/dashboard/orders/active"
              onClick={handleCloseUserMenu}
            >
              Dashboard
            </MenuItem>
          )}

          <MenuItem component={Link} to="/order" onClick={handleCloseUserMenu}>
            Compras
          </MenuItem>
          <MenuItem component={Link} to="/cart" onClick={handleCloseUserMenu}>
            Cesta
          </MenuItem>
          <MenuItem onClick={clearAuth}>Cerrar Sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
