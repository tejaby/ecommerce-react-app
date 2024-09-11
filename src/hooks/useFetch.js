// react
import { useContext, useEffect, useState } from "react";

// context
import { AuthContext } from "../context/AuthContext";

export const useFetch = (service, ...args) => {
  const { token } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;

      setLoading(true);
      try {
        const response = await service(token, ...args);
        setData(response.data);
      } catch (err) {
        setError(err.data.error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, setData, error, loading };
};
