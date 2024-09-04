import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", p: 4 }}>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "start" }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Acerca de nosotros
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
            Quiénes somos
          </Typography>
          <Typography variant="body2" gutterBottom>
            Políticas de devolución y reclamos
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Sucursales
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
            Ver ubicaciones horarios y teléfonos
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Contáctanos
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
            info@click.gt
          </Typography>
          <Typography variant="body2" gutterBottom>
            Prrhh@click.gt
          </Typography>
          <Typography variant="body2" gutterBottom>
            5951-3619
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" gutterBottom>
            Ofertas
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
            Regístrate para recibir ofertas de nuestros productos
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <TextField
              variant="outlined"
              placeholder="Ingrese tu correo"
              size="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                input: { color: "#000" },
              }}
            />
            <Button
              variant="contained"
              sx={{ ml: 1, backgroundColor: "#fff", color: "#000" }}
            >
              &gt;
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
