// material-ui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const CartContactForm = () => {
  return (
    <Box sx={{ width: "50%", display: "flex", gap: 2, mb: 2 }}>
      <TextField
        size="small"
        variant="standard"
        label="Numero de telefono"
        placeholder="0000-0000"
        fullWidth
      />
      <TextField
        size="small"
        variant="standard"
        label="Direccion"
        placeholder="Sumpango sacate"
        fullWidth
      />
    </Box>
  );
};
