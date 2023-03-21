import { Button, Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import SendIcon from "@mui/icons-material/Send";
import Product from "./components/Product";
import BluCard from "./components/BlueCard";

export default function App() {
  return (
    <Container xs={{mt: 5}}>
      {/* <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <h1>React + Vite</h1>
          <Typography variant="h1">Texto 1</Typography>
          <Typography variant="h1" component="span" textAlign="center">
            Texto 1
          </Typography>

 
          <Box sx={{ border: 2, padding: 2, bgcolor: "black", color: "white" }}>
            componente box
          </Box>

          <Button
            variant="contained"
            color="error"
            startIcon={<CurrencyBitcoinIcon />}
          >
            PRUEBA
          </Button>
          <Button variant="contained" color="success" endIcon={<SendIcon />}>
            PRUEBA
          </Button>
          <Button variant="outlined">PRUEBA</Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
     
          <h1>React + Vite</h1>
          <Typography variant="h1">Texto 1</Typography>
          <Typography variant="h1" component="span" textAlign="center">
            Texto 1
          </Typography>

   
          <Box sx={{ border: 2, padding: 2, bgcolor: "black", color: "white" }}>
            componente box
          </Box>


          <Button
            variant="contained"
            color="error"
            startIcon={<CurrencyBitcoinIcon />}
          >
            PRUEBA
          </Button>
          <Button variant="contained" color="success" endIcon={<SendIcon />}>
            PRUEBA
          </Button>
          <Button variant="outlined">PRUEBA</Button>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Product/>
        </Grid>
      </Grid> */}
      <BluCard/>
    </Container>
  );
}
