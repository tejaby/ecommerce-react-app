// librerias
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// services
import { createProduct } from "../../services/productService";
import { getCategories } from "../../services/categoryService";

// hooks
import { useFetch } from "../../hooks/useFetch";
import { useSubmit } from "../../hooks/useSubmit";

// components
import { schema } from "./schemas/productSchema";

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

export const ProductForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const { data } = useFetch(getCategories);
  const { execute } = useSubmit(createProduct);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("category_id", data.category_id);
    formData.append("image", data.image[0]);
    formData.append("state_id", 1);
    execute(formData);
    navigate("/dashboard/productos/list");
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
        <Typography variant="h5">Crear Producto</Typography>
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
        <FormControl
          fullWidth
          variant="standard"
          sx={{ mt: 2, minWidth: 120 }}
          error={!!errors.category_id?.message}
        >
          <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
          <Controller
            name="category_id"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                labelId="category-label"
                id="category-select"
                label="Rol"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {data.map((category) => (
                  <MenuItem
                    key={category.category_id}
                    value={category.category_id}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <Button
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
        </Button>
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
        <Button variant="contained" sx={{ my: 2 }} type="submit">
          Crear Categoría
        </Button>
      </Box>
    </Box>
  );
};
