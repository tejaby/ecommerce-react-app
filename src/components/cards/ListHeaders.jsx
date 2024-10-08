// librerias
import { Link } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const ListHeaders = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      <Button
        variant="contained"
        color="error"
        component={Link}
        to="/productos"
      >
        Ver todo
      </Button>
    </Box>
  );
};
