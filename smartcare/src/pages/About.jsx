import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>About SmartCare</Typography>
      <Typography variant="body1">
        SmartCare is a leading hospital providing state-of-the-art medical services with a human touch. 
        Our mission is to deliver world-class healthcare that’s accessible and affordable.
      </Typography>
    </Container>
  );
}
