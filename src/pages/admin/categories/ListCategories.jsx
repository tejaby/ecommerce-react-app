// material-ui
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

// react
import { useContext } from "react";

// context
import { AuthContext } from "../../../context/AuthContext";

// services
import { getCategoriesExtended } from "../../../services/categoryService";

// hooks
import { useFetchService } from "../../../hooks/useFetchService";

export const ListCategories = () => {
  const { token } = useContext(AuthContext);

  const { data } = useFetchService(getCategoriesExtended, token);

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Categorias
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow hover>
              <TableCell>Categoria</TableCell>
              <TableCell align="right">Usuario</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.category_id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.user}</TableCell>
                <TableCell align="right">{item.state}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
