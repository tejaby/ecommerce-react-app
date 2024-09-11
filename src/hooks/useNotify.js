// librerias
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// react
import { useEffect } from "react";

export const useNotify = (
  data,
  error,
  successMessage = "Operación exitosa",
  errorMessage = "Ocurrió un error",
  redirectPath = null
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(errorMessage || error);
    }
    if (data) {
      toast.success(successMessage);

      if (redirectPath) {
        navigate(redirectPath);
      }
    }
  }, [data, error, successMessage, errorMessage]);
};
