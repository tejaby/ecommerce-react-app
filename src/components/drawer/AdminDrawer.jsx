// librerias
import { Link } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

// react
import { useState } from "react";

export const AdminDrawer = ({ open, toggleDrawer }) => {
  const [isOrdersCollapsed, setIsOrdersCollapsed] = useState(true);
  const [isUsersCollapsed, setIsUsersCollapsed] = useState(false);
  const [isCategoriesCollapsed, setIsCategoriesCollapsed] = useState(false);
  const [isProductsCollapsed, setIsProductsCollapsed] = useState(false);

  const toggleOrdersCollapse = () => {
    setIsOrdersCollapsed(!isOrdersCollapsed);
  };

  const toggleUsersCollapse = () => {
    setIsUsersCollapsed(!isUsersCollapsed);
  };

  const toggleCategoriesCollapse = () => {
    setIsCategoriesCollapsed(!isCategoriesCollapsed);
  };

  const toggleProductsCollapse = () => {
    setIsProductsCollapsed(!isProductsCollapsed);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Panel de Administración
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemButton onClick={toggleOrdersCollapse}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Órdenes" />
            {isOrdersCollapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isOrdersCollapsed} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={toggleDrawer}>
            <ListItemButton
              component={Link}
              to="/dashboard/orders/active"
              sx={{ pl: 4 }}
            >
              <ListItemText secondary="Pedidos pendientes" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/dashboard/orders/history"
              sx={{ pl: 4 }}
            >
              <ListItemText secondary="Pedidos finalizados" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton onClick={toggleUsersCollapse}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
            {isUsersCollapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isUsersCollapsed} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={toggleDrawer}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Listar Usuarios" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton onClick={toggleCategoriesCollapse}>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Categorias" />
            {isCategoriesCollapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCategoriesCollapsed} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={toggleDrawer}>
            <ListItemButton
              component={Link}
              to="/dashboard/categorias/list"
              sx={{ pl: 4 }}
            >
              <ListItemText secondary="Listar Categorías" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/dashboard/categorias/create"
              sx={{ pl: 4 }}
            >
              <ListItemText secondary="Crear Categoría" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton onClick={toggleProductsCollapse}>
            <ListItemIcon>
              <ShoppingBagIcon />
            </ListItemIcon>
            <ListItemText primary="Productos" />
            {isProductsCollapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isProductsCollapsed} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={toggleDrawer}>
            <ListItemButton
              component={Link}
              to="/dashboard/productos/list"
              sx={{ pl: 4 }}
            >
              <ListItemText secondary="Listar Productos" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/dashboard/productos/create"
              sx={{ pl: 4 }}
            >
              <ListItemText secondary="Crear Producto" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer}>
      {DrawerList}
    </Drawer>
  );
};
