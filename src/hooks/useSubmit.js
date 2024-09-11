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
    setError(null);

    try {
      const response = await service(token, ...args, data);
      setData(response);
      return response;
    } catch (err) {
      setError(err.data);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { execute, data, error, loading };
};
