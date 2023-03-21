import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function BluCard() {
  return (
    <Card 
    sx={{
        transition: "0.2s",
        "&:hover": {
            transform: "scale(1.05)",
        },
    }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
          height="200"
          alt="imagen"
        />

        <CardContent>
          <Typography variant="h5">Titulo de la Tarjeta</Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quod facere nam accusamus, laboriosam, similique id ad, sequi ex
            veritatis aspernatur? Praesentium vel doloremque aliquam repudiandae
            unde illo reprehenderit voluptatibus.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button variant="contained">Compartir</Button>
        <Button variant="text">Leer mas ...</Button>
      </CardActions>
    </Card>
  );
}
