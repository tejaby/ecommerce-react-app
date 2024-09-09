// librerias
import { useParams, useNavigate } from "react-router-dom";

// react
import { useContext, useState, useEffect } from "react";

// context
import { AuthContext } from "../../../context/AuthContext";

// services
import { getProduct } from "../../../services/productService";

// components
import { ProductUpdateForm } from "../../../components/forms/ProductUpdateForm";

export const EditProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { token } = useContext(AuthContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async (token) => {
      try {
        const result = await getProduct(token, id);
        if (result.data.length === 0) {
          return navigate("/dashboard/productos/list");
        }
        setProduct(result.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct(token);
  }, []);

  return <ProductUpdateForm product={product} loading={loading} />;
};
