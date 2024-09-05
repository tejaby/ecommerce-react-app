// components
import { Layout } from "../components/layouts/Layout";
import { ProductCard } from "../components/cards/ProductCard";
import { ListHeaders } from "../components/cards/ListHeaders";

// material-ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const products = [
  {
    id: 1,
    name: "Razer BlackShark V2 Pro",
    price: 960,
    stock: 10,
    image:
      "https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2pro2023.jpg",
  },
  {
    id: 2,
    name: "Razer BlackShark V2 HyperSpeed",
    price: 1950,
    stock: 0,
    image:
      "https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/500x500-blackshark-v2-hyperspeed.webp",
  },
  {
    id: 3,
    name: "Razer BlackShark V2 X USB",
    price: 550,
    stock: 10,
    image:
      "https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/blackshark-v2-x-usb-500x500-category.jpg",
  },
  {
    id: 4,
    name: "Razer BlackShark V2 X",
    price: 750,
    stock: 20,
    image:
      "https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2x.jpg",
  },
];

export const Home = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
        <ListHeaders title="Recien agregados" />

        <Grid container spacing={2}>
          {products.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};
