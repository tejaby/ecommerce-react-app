import * as yup from "yup";

export const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("El nombre es requerido")
    .matches(/^[A-Za-z]+$/, "El nombre solo puede contener letras")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "l nombre no puede tener más de 50 caracteres"),
  last_name: yup
    .string()
    .required("El apellido es requerido")
    .matches(/^[A-Za-z]+$/, "El apellido solo puede contener letras")
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede tener más de 50 caracteres"),
  email: yup
    .string()
    .email("El correo no es válido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .required("¡La contraseña es obligatoria!")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  rol: yup
    .number()
    .oneOf([1, 2], "Rol inválido")
    .required("El rol es requerido"),
});
