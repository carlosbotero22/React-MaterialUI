import { Button, Container, Typography } from "@mui/material"

export default function App() {
  return (
    <Container sx={{border: 2, boxShadow: 2, pb: 2}}>
      <h1>holaaaa</h1>
      <Typography variant="h1">Texto 1</Typography>
      <Typography variant="h1" component="span" textAlign="center">Texto 1</Typography>
      
      <Button variant="contained">PRUEBA</Button>
    </Container>
  )
}