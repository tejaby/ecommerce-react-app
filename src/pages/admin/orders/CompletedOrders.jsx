// material-ui
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// react
import { useState } from "react";

const orders = [
  {
    order_id: 1,
    address: "zona 1 sumpango",
    phone_number: "88997766",
    total_amount: 300.0,
    order_date: "2023-01-02",
    user_id: 1,
    state_id: 3,
    order_details: [
      {
        order_detail_id: 1,
        quantity: 1,
        price: 300.0,
        product_id: 1,
        order_id: 1,
      },
    ],
  },
  {
    order_id: 2,
    address: "zona 5 sumpango",
    phone_number: "88665533",
    total_amount: 500.0,
    order_date: "2024-01-02",
    user_id: 2,
    state_id: 3,
    order_details: [
      {
        order_detail_id: 2,
        quantity: 1,
        price: 300.0,
        product_id: 1,
        order_id: 2,
      },
      {
        order_detail_id: 3,
        quantity: 1,
        price: 200.0,
        product_id: 2,
        order_id: 2,
      },
    ],
  },
];

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.address}
        </TableCell>
        <TableCell align="right">{row.phone_number}</TableCell>
        <TableCell align="right">{row.total_amount}</TableCell>
        <TableCell align="right">{row.order_date}</TableCell>
        <TableCell align="right">{row.user_id}</TableCell>
        <TableCell align="right">{row.state_id}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalles de Orden
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell align="right">Producto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.order_details.map((historyRow) => (
                    <TableRow key={historyRow.order_detail_id}>
                      <TableCell component="th" scope="row">
                        {historyRow.quantity}
                      </TableCell>
                      <TableCell>{historyRow.price}</TableCell>
                      <TableCell align="right">
                        {historyRow.product_id}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export const CompletedOrders = () => {
  return (
    <TableContainer component={Paper} sx={{ minWidth: 900 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow hover>
            <TableCell />
            <TableCell>Dirección</TableCell>
            <TableCell align="right">Número de teléfono</TableCell>
            <TableCell align="right">Total gastado</TableCell>
            <TableCell align="right">Fecha de pedido</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <Row key={row.order_id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
