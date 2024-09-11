// material-ui
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// services
import {
  getOrderDetails,
  updateOrderAdminState,
} from "../../../services/orderService";

// hooks
import { useFetch } from "../../../hooks/useFetch";
import { useSubmit } from "../../../hooks/useSubmit";

export const OrderDetails = ({ order, onClose, removeOrder }) => {
  const { data } = useFetch(getOrderDetails, order.order_id);

  const { execute } = useSubmit(updateOrderAdminState);

  const onSubmit = (state) => {
    execute({ state_id: state }, order.order_id);
    removeOrder(order.order_id);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Detalles de la Orden</DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <Typography variant="body1">Dirección: {order.address}</Typography>
          <Typography variant="body1">
            Teléfono: {order.phone_number}
          </Typography>
          <Typography variant="body1">Usuario: {order.user}</Typography>
          <Typography variant="body1">Estado: {order.state}</Typography>
        </Box>
        <Grid container spacing={2}>
          {data &&
            data.map((product) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={product.order_detail_id}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      product.image
                        ? product.image
                        : "https://placehold.co/600x400"
                    }
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" noWrap>
                      {product.name}
                    </Typography>
                    <Typography variant="body2">Q {product.price}</Typography>
                    <Typography variant="body2">
                      Cantidad: {product.quantity}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Box mt={2}>
          <Typography variant="h6">Total: Q {order.total_amount}</Typography>
        </Box>
      </DialogContent>
      {!!removeOrder ? (
        <DialogActions>
          <Button color="error" onClick={() => onSubmit(6)}>
            Rechazar
          </Button>
          <Button color="primary" onClick={() => onSubmit(5)}>
            Aceptar
          </Button>
        </DialogActions>
      ) : null}
    </Dialog>
  );
};
