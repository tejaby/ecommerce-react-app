// react
import { useState, useEffect } from "react";

export const useFetchService = (service, token, category = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;
      setLoading(true);
      try {
        const response = await service(token, category);
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
