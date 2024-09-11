// react
import { useContext, useState } from "react";

// context
import { AuthContext } from "../context/AuthContext";

export const useSubmit = (service) => {
  const { token } = useContext(AuthContext);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const execute = async (data, ...args) => {
    if (!token) return;

    setLoading(true);

    try {
      const response = await service(token, ...args, data);
      setData(response.data);
    } catch (err) {
      setError(err.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { execute, data, error, loading };
};
