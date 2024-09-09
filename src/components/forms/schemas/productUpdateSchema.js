import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("El producto es requerido")
    .min(2, "El producto debe tener al menos 2 caracteres")
    .max(100, "El producto no puede tener más de 50 caracteres"),
  description: yup
    .string()
    .nullable()
    .notRequired()
    .test(
      "des",
      "La descripción debe tener entre 2 y 255 caracteres",
      (value) => !value || (value.length >= 2 && value.length <= 255)
    ),
  brand: yup
    .string()
    .nullable()
    .notRequired()
    .test(
      "brand",
      "La marca debe tener entre 2 y 100 caracteres",
      (value) => !value || (value.length >= 2 && value.length <= 100)
    ),
  price: yup
    .number()
    .typeError("El precio debe ser un número válido")
    .required("El precio es requerido")
    .min(1, "El precio debe ser mayor a 0"),
  stock: yup
    .number()
    .typeError("El stock debe ser un número válido")
    .required("El stock es requerido"),
  image: yup
    .mixed()
    .nullable()
    .notRequired()
    .test("fileType", "Sólo se permiten archivos de imagen.", (value) => {
      if (!value || value.length === 0) return true;
      return Array.from(value).every((file) =>
        ["image/jpeg", "image/png", "image/gif"].includes(file.type)
      );
    }),
});
