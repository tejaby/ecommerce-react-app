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
import Chip from "@mui/material/Chip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// react
import { useContext, useState, useEffect } from "react";

// context
import { AuthContext } from "../../../context/AuthContext";

// services
import { getOrders, getOrderDetails } from "../../../services/orderService";

// utils
import { getStatusColor } from "../../../utils/getStatusColor";

function Row({ row, fertchinOrderDetails, orderDetails }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
              fertchinOrderDetails(row.order_id);
            }}
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
        <TableCell align="right">{row.user}</TableCell>
        <TableCell align="right">
          <Chip label={row.state} color={getStatusColor(row.state_id)} />
        </TableCell>
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
                  {orderDetails.map((historyRow) => (
                    <TableRow key={historyRow.order_detail_id}>
                      <TableCell component="th" scope="row">
                        {historyRow.quantity}
                      </TableCell>
                      <TableCell>{historyRow.price}</TableCell>
                      <TableCell align="right">{historyRow.name}</TableCell>
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
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await getOrders(token);
        const filterOrders = result.data.filter((order) => {
          return order.state !== "pending";
        });
        setOrders(filterOrders);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);

  const fertchinOrderDetails = async (id) => {
    try {
      const result = await getOrderDetails(token, id);
      setOrderDetails(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Registro de pedidos completados, rechazados o cancelados.
      </Typography>
      <TableContainer component={Paper} sx={{ minWidth: 900 }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
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
              <Row
                key={row.order_id}
                row={row}
                fertchinOrderDetails={fertchinOrderDetails}
                orderDetails={orderDetails}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
