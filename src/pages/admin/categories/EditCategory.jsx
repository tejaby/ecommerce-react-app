// librerias
import { useParams, useNavigate } from "react-router-dom";

// react
import { useContext, useState, useEffect } from "react";

// context
import { AuthContext } from "../../../context/AuthContext";

// services
import { getCategory } from "../../../services/categoryService";

// components
import { CategoryUpdateForm } from "../../../components/forms/CategoryUpdateForm";

export const EditCategory = () => {
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  const { token } = useContext(AuthContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async (token) => {
      try {
        const result = await getCategory(token, id);
        if (result.data.length === 0) {
          return navigate("/dashboard/categorias/list");
        }
        setCategory(result.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct(token);
  }, []);

  return <CategoryUpdateForm category={category} loading={loading} />;
};
