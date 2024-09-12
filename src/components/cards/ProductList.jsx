// librerias
import { Link, useNavigate } from "react-router-dom";

// material-ui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// react
import { Fragment } from "react";

export const ProductList = ({ products, setSearch }) => {
  const navigate = useNavigate();

  const handleNagivate = (id) => {
    navigate(`/productos/${id}`);
    setSearch("");
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {products?.map((product) => {
        return (
          <Fragment key={product.product_id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,.1)",
                },
                cursor: "pointer",
              }}
              onClick={() => handleNagivate(product.product_id)}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={product.image ? product.image : ""}
                />
              </ListItemAvatar>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                {product.name}
              </Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        );
      })}
    </List>
  );
};
