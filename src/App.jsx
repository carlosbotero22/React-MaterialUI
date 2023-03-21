import { Button, Container, Typography } from "@mui/material"
import { Box } from "@mui/system"

export default function App() {
  return (
    <Container sx={{border: 2, boxShadow: 2, pb: 2}}>
      {/* tipografia */}
      <h1>React + Vite</h1>
      <Typography variant="h1">Texto 1</Typography>
      <Typography variant="h1" component="span" textAlign="center">Texto 1</Typography>
      <Button variant="contained">PRUEBA</Button>

      {/* BOX COMPONENT */}
      <Box sx={{border: 2, padding: 2, bgcolor: "black", color: "white"}}>componente box</Box>
    </Container>
  )
}