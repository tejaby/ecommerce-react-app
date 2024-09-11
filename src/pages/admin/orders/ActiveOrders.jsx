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
import EditIcon from "@mui/icons-material/Edit";

// components
import { OrderDetails } from "../../../components/orders/OrderDetails";

// react
import { useState, useEffect } from "react";

// services
import { getOrders } from "../../../services/orderService";
import { getOrderDetails } from "../../../services/orderService";

// hooks
import { useFetch } from "../../../hooks/useFetch";

// utils
import { getStatusColor } from "../../../utils/getStatusColor";

export const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { data } = useFetch(getOrders);

  const handleEditClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  const removeOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.order_id !== id));
  };

  useEffect(() => {
    if (data) {
      const filterOrders = data.filter((order) => order.state === "pending");
      setOrders(filterOrders);
    }
  }, [data]);

  return (
    <>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Pedidos en espera de confirmación.
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell>Dirección</TableCell>
              <TableCell align="right">Número de teléfono</TableCell>
              <TableCell align="right">Total gastado</TableCell>
              <TableCell align="right">Fecha de pedido</TableCell>
              <TableCell align="right">Usuario</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders &&
              orders.map((item) => (
                <TableRow hover key={item.order_id}>
                  <TableCell component="th" scope="row">
                    {item.address}
                  </TableCell>
                  <TableCell align="right">{item.phone_number}</TableCell>
                  <TableCell align="right">{item.total_amount}</TableCell>
                  <TableCell align="right">{item.order_date}</TableCell>
                  <TableCell align="right">{item.user}</TableCell>
                  <TableCell align="right">
                    <Chip
                      label={item.state}
                      color={getStatusColor(item.state_id)}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEditClick(item)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={handleCloseDetails}
          removeOrder={removeOrder}
          service={getOrderDetails}
        />
      )}
    </>
  );
};
