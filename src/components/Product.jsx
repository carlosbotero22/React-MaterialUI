import styled from "@emotion/styled";
import { Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

export default function Product() {

  const Img = styled("img")({
    width: 200,
    height: 100,
    objectFit: "cover",
    objectPosition: "center"
  })
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
        <img src="https://linkedstore.net/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-06-at-1.09.30-PM1-200x200.jpeg" alt="" />

        <Box sx={{ flexGrow: 1, display: "grid", gap: 1}}>
            <Typography variant="h4">Nombre del Producto</Typography>
            <Typography variant="body1">Descripción del Producto</Typography>
            <Button variant="contained" color="primary">Agregar al Carrito</Button>
        </Box>
        <Box sx={{ mr: 2}} component="p">
            $20.000 
        </Box>
    </Paper>
  );
}
