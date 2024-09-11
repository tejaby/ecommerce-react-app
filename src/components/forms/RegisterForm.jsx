// librerias
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme, useMediaQuery } from "@mui/material";

// services
import { registerUser } from "../../services/authService";

// hooks
import { useAuth } from "../../hooks/useAuth";
import { useNotify } from "../../hooks/useNotify";

// components
import { schema } from "./schemas/registerSchema";

export const RegisterForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { executeService, user, error } = useAuth(registerUser);

  useNotify(user, error, "Registro exitoso", error);

  const onSubmit = (data) => {
    const newData = { ...data, state_id: 1 };
    executeService(newData);
  };

  return (
    <>
      <CssBaseline />
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
              Registrarte
            </Typography>
            <Typography variant="body1" component="p">
              Ingresa los datos solicitados
            </Typography>
            <Box sx={{ mt: 1, display: "flex", gap: 2 }}>
              <TextField
                id="firstName"
                label="Nombre"
                variant="standard"
                fullWidth
                error={!!errors.first_name?.message}
                helperText={errors.first_name?.message}
                {...register("first_name")}
              />
              <TextField
                id="lastName"
                label="Apellido"
                variant="standard"
                fullWidth
                error={!!errors.last_name?.message}
                helperText={errors.last_name?.message}
                {...register("last_name")}
              />
            </Box>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              fullWidth
              sx={{ mt: 1 }}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...register("email")}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              fullWidth
              sx={{ mt: 1 }}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              {...register("password")}
            />
            <FormControl
              fullWidth
              variant="standard"
              sx={{ mt: 1, minWidth: 120 }}
              error={!!errors.role_id?.message}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Rol
              </InputLabel>
              <Controller
                name="role_id"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="rol-label"
                    id="rol-select"
                    label="Rol"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={2}>usuario</MenuItem>
                    <MenuItem value={1}>administrador</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
              Crear Cuenta
            </Button>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}
            >
              <Typography variant="body2" component="p">
                Ya tienes una cuenta?
              </Typography>
              <Link component={RouterLink} to="/login">
                Iniciar Sesión
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
