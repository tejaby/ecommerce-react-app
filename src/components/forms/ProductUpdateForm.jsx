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
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// react
import { useContext, useState, useEffect } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

// services
import { updateProduct } from "../../services/productService";

// components
import { schema } from "./schemas/productUpdateSchema";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const ProductUpdateForm = ({ product, loading }) => {
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
      const result = await updateProduct(token, product.product_id, data);
      navigate("/dashboard/productos/list");
    } catch (err) {
      console.log(err.data.error);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard/productos/list");
  };

  useEffect(() => {
    if (!loading) {
      setValue("name", product.name ? product.name : null);
      setValue("description", product.description ? product.description : null);
      setValue("brand", product.brand ? product.brand : null);
      setValue("price", product.price ? product.price : null);
      setValue("stock", product.stock ? product.stock : null);
      setValue("image", product.image ? product.image : null);
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
          <Typography variant="h5">Actualizar Producto</Typography>
        </Box>
        <Box
          component="form"
          sx={{ flexGrow: 1, px: 4, pt: 4 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label="Nombre del producto"
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
            error={!!errors.name?.message}
            helperText={errors.name?.message}
            {...register("name")}
          />
          <TextField
            label="Descripción del producto"
            variant="standard"
            fullWidth
            multiline
            sx={{ mt: 2 }}
            error={!!errors.description?.message}
            helperText={errors.description?.message}
            {...register("description")}
          />
          <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
            <TextField
              label="Marca"
              variant="standard"
              fullWidth
              error={!!errors.brand?.message}
              helperText={errors.brand?.message}
              {...register("brand")}
            />
            <TextField
              label="Precio"
              type="number"
              variant="standard"
              fullWidth
              error={!!errors.price?.message}
              helperText={errors.price?.message}
              {...register("price")}
            />
            <TextField
              label="Stock"
              type="number"
              variant="standard"
              fullWidth
              error={!!errors.stock?.message}
              helperText={errors.stock?.message}
              {...register("stock")}
            />
          </Box>
          {/* <Button
            component="label"
            fullWidth
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 2 }}
            size="large"
          >
            Upload files
            <VisuallyHiddenInput type="file" {...register("image")} />
          </Button> */}
          {errors.image && (
            <Typography
              textAlign={"center"}
              color="error"
              variant="body2"
              sx={{ marginTop: 1 }}
            >
              {errors.image.message}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 2
            }}
          >
            <Button variant="contained" type="submit">
              Actualizar Producto
            </Button>
            <Button variant="contained" color="error" onClick={handleCancel}>
              Regresar
            </Button>
          </Box>
        </Box>
      </Box>
    )
  );
};
