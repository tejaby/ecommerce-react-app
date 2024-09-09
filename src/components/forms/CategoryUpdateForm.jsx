// librerias
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

// react
import { useContext, useEffect, useState } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

// services
import { updateCategory } from "../../services/categoryService";

// components
import { schema } from "./schemas/categoryUpdateSchema";

export const CategoryUpdateForm = ({ category, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await updateCategory(token, category.category_id, data);
      navigate("/dashboard/categorias/list");
    } catch (err) {
      console.log(err.data.error);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard/categorias/list");
  };

  useEffect(() => {
    if (!loading) {
      setValue("name", category.name ? category.name : null);
    }
  }, [loading]);

  return (
    !loading && (
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
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
            error={!!errors.name?.message}
            helperText={errors.name?.message}
            {...register("name")}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 2
            }}
          >
            <Button variant="contained" type="submit">
            Actualizar Categoría
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleCancel}
            >
              Regresar
            </Button>
          </Box>
        </Box>
      </Box>
    )
  );
};
