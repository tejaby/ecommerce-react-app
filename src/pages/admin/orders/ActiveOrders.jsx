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

const orders = [
  {
    order_id: 1,
    address: "zona 1",
    phone_number: "88776622",
    total_amount: 400.0,
    user_id: 1,
    state_id: 3,
    order_details: [{ quantity: 2, price: 200.0, product_id: 1 }],
  },
  {
    order_id: 2,
    address: "zona 4",
    phone_number: "88776622",
    total_amount: 100.0,
    user_id: 3,
    state_id: 3,
    order_details: [{ quantity: 1, price: 100.0, product_id: 1 }],
  },
];

export const ActiveOrders = () => {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Productos
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow hover>
              <TableCell>Dirección</TableCell>
              <TableCell align="right">Número de teléfono</TableCell>
              <TableCell align="right">Total gastado</TableCell>
              <TableCell align="right">Usuario</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((item) => (
              <TableRow key={item.order_id}>
                <TableCell component="th" scope="row">
                  {item.address}
                </TableCell>
                <TableCell align="right">{item.phone_number}</TableCell>
                <TableCell align="right">{item.total_amount}</TableCell>
                <TableCell align="right">{item.user_id}</TableCell>
                <TableCell align="right">{item.state_id}</TableCell>
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
