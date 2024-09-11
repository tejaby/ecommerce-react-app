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
import { getCategoriesExtended } from "../../../services/categoryService";
import { updateCategoryState } from "../../../services/categoryService";

// hooks
import { useFetch } from "../../../hooks/useFetch";
import { useSubmit } from "../../../hooks/useSubmit";

// utils
import { getStatusColor } from "../../../utils/getStatusColor";

export const ListCategories = () => {
  const navigate = useNavigate();

  const { data, setData } = useFetch(getCategoriesExtended);
  const { execute } = useSubmit(updateCategoryState);

  const onSubmit = (state, id) => {
    const newState = state === 1 ? 2 : 1;
    execute({ state_id: newState }, id);
    setData((prevData) =>
      prevData.map((category) =>
        category.category_id === id
          ? { ...category, state_id: newState }
          : category
      )
    );
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/categorias/edit/${id}`);
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Categorias
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>Categoria</TableCell>
              <TableCell align="right">Usuario</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow hover key={item.category_id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.user}</TableCell>
                <TableCell align="right">
                  <Chip
                    label={item.state_id === 1 ? "active" : "inactive"}
                    color={getStatusColor(item.state_id)}
                  />
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    title={item.state_id === 1 ? "Activar" : "Desactivar"}
                  >
                    <IconButton
                      onClick={() => onSubmit(item.state_id, item.category_id)}
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
                  <Tooltip title="Editar categoría">
                    <IconButton onClick={() => handleUpdate(item.category_id)}>
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
