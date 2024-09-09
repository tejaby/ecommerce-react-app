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

// react
import { useContext } from "react";

// context
import { AuthContext } from "../../../context/AuthContext";

// services
import { getCategoriesExtended } from "../../../services/categoryService";
import { updateCategoryState } from "../../../services/categoryService";

// hooks
import { useFetchService } from "../../../hooks/useFetchService";

// utils
import { getStatusColor } from "../../../utils/getStatusColor";

export const ListCategories = () => {
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const { data, setData } = useFetchService(getCategoriesExtended, token);

  const toggleStatus = async (id, state) => {
    try {
      const newState = state === 1 ? 2 : 1;
      await updateCategoryState(token, id, {
        state_id: newState,
      });

      setData((prevData) =>
        prevData.map((c) =>
          c.category_id === id ? { ...c, state_id: newState } : c
        )
      );
    } catch (err) {
      console.log(err.data);
    }
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
                      onClick={() =>
                        toggleStatus(item.category_id, item.state_id)
                      }
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
