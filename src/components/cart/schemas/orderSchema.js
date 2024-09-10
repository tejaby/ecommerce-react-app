// libraries
import * as yup from "yup";

export const schema = yup.object().shape({
  address: yup
    .string()
    .required("La dirección es requerida")
    .min(10, "La dirreción debe tener al menos 10 caracteres"),
  phone_number: yup
    .string()
    .required("El número de teléfono es requerido")
    .matches(/^\d{8}$/, "El número de teléfono debe tener 8 dígitos"),
});
