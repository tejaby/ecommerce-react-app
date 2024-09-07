// librerias
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

// components
import { schema } from "./schemas/categorySchema";

export const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
    component={Paper}
    elevation={3}
      sx={{
        maxWidth: "sm",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ px: 4, pt: 2 }}>
        <Typography variant="h5">Crear Categoría</Typography>
      </Box>
      <Box
        component="form"
        sx={{ flexGrow: 1, px: 4, pt: 4 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="standard-basic"
          label="Nombre de la categoría"
          variant="filled"
          fullWidth
          sx={{ mt: 2 }}
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          {...register("name")}
        />
        <Button variant="contained" sx={{ my: 2 }} type="submit">
          Crear Categoría
        </Button>
      </Box>
    </Box>
  );
};
