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
import { getProductsExtended } from "../../../services/productService";

// hooks
import { useFetchService } from "../../../hooks/useFetchService";

export const ListProducts = () => {
  const { token } = useContext(AuthContext);

  const { data } = useFetchService(getProductsExtended, token);

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Productos
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow hover>
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
              <TableRow key={item.product_id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.brand}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.stock}</TableCell>
                <TableCell align="right">{item.user}</TableCell>
                <TableCell align="right">{item.category}</TableCell>
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
