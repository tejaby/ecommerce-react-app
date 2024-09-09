import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("La categoria es requerida")
    .min(2, "La categoria debe tener al menos 2 caracteres")
    .max(100, "La categoria no puede tener más de 100 caracteres"),
});
