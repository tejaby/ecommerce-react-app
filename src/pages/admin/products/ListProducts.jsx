// librerias
import { useNavigate } from "react-router-dom";

// material-ui
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

// services
import { getProductsExtended } from "../../../services/productService";
import { updateProductState } from "../../../services/productService";

// hooks
import { useFetch } from "../../../hooks/useFetch";
import { useSubmit } from "../../../hooks/useSubmit";
import { useNotify } from "../../../hooks/useNotify";

// utils
import { getStatusColor } from "../../../utils/getStatusColor";

export const ListProducts = () => {
  const navigate = useNavigate();

  const { data, setData } = useFetch(getProductsExtended);

  const { execute, data: response, error } = useSubmit(updateProductState);

  useNotify(response, error, response?.message, error?.error);

  const onSubmit = async (state, id) => {
    const newState = state === 1 ? 2 : 1;
    const result = await execute({ state_id: newState }, id);
    if (result) {
      setData((prevData) =>
        prevData.map((product) =>
          product.product_id === id
            ? { ...product, state_id: newState }
            : product
        )
      );
    }
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/productos/edit/${id}`);
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Productos
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">marca</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Usuario</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow hover key={item.product_id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.brand}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.stock}</TableCell>
                <TableCell align="right">{item.user}</TableCell>
                <TableCell align="right">{item.category}</TableCell>
                <TableCell align="right">
                  <Chip
                    label={item.state_id === 1 ? "active" : "inactive"}
                    color={getStatusColor(item.state_id)}
                  />
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    title={item.state_id === 1 ? "Desactivar" : "Activar"}
                  >
                    <IconButton
                      onClick={() => onSubmit(item.state_id, item.product_id)}
                    >
                      {item.state_id === 1 ? (
                        <ToggleOffIcon color="error" />
                      ) : (
                        <ToggleOnIcon color="success" />
                      )}
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Editar producto">
                    <IconButton onClick={() => handleUpdate(item.product_id)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
