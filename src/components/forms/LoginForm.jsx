// librerias
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useTheme, useMediaQuery } from "@mui/material";

// services
import { loginUser } from "../../services/authService";

// hooks
import { useAuth } from "../../hooks/useAuth";
import { useNotify } from "../../hooks/useNotify";

// components
import { schema } from "./schemas/loginSchema";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { executeService, user, error } = useAuth(loginUser);

  useNotify(user, error, "Sesión iniciada con éxito", error);

  const onSubmit = (data) => {
    executeService(data);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      {!isSmallScreen && (
        <Grid size={{ xs: 12, sm: 7 }} sx={{ height: 600 }}>
          <Box
            component="img"
            src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZjunEe5xuQe-8lXUGhONf3DgUkbpHGMnw5y7alQIAiRaDhzGlQyaT6z5I6AdXmcNvgp4ePyESH4aapBXjrNbszx7c12xTxeKRjR1V2zeZO2H9YSt45koJ06RQuU4ee8~BT9HizbV0k-r1gm6kg259izF1Iboa4VuWWX6xnhuWDHF7xwr~neiU6bTzFzYWsXYY0HAcUpfMJZglkd9KUj8WIRbIPlwe7THe2Yjww6RyqgM3d6-glkfOjt0DrG2bUOPUq4C~5Z-vDmZg5LgSUpSThzzgh1nPhvWTFarsV85EzGPXbDVPf3koGe33ROuRvextqcWel4NqEeVNe~8Ej4Gg__"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Grid>
      )}

      <Grid
        size={{ xs: 12, sm: 5 }}
        sx={{
          height: 600,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box sx={{ px: 4, pt: 0 }}>
          <Typography variant="h5">TejaTienda</Typography>
        </Box>
        <Box
          component="form"
          sx={{ flexGrow: 1, px: 4, pt: 6 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography variant="h4" component="h2">
            Iniciar Sesión
          </Typography>
          <Typography variant="body1" component="p">
            Ingresa tus credenciales
          </Typography>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            {...register("password")}
          />
          <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
            Iniciar Sesión
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
            <Typography variant="body1" component="p">
              Aun no tienes cuenta?
            </Typography>
            <Link component={RouterLink} to="/register">
              Registrate aquí
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
