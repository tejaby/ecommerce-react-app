// material-ui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

// hooks
import { useCartActions } from "../../hooks/useCartActions";

export const CartTable = ({ cartItems }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartActions();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }}>
        <TableHead>
          <TableRow hover>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="left">Subtotal</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.product_id}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">Q{item.price}</TableCell>
              <TableCell align="center">
                <ButtonGroup variant="contained" aria-label="Cart button group">
                  <IconButton onClick={() => decreaseQuantity(item.product_id)}>
                    <RemoveIcon />
                  </IconButton>
                  <Button disabled>{item.quantity}</Button>
                  <IconButton onClick={() => increaseQuantity(item.product_id)}>
                    <AddIcon />
                  </IconButton>
                </ButtonGroup>
              </TableCell>
              <TableCell align="left">Q{item.price * item.quantity}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => {
                    removeFromCart(item.product_id);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
