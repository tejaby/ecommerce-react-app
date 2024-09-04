import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("El correo no es válido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("¡La contraseña es obligatoria!"),
});
