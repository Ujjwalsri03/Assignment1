import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10, textAlign: 'center' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold">Welcome to SmartCare Hospital</Typography>
        <Typography variant="h6" mt={2}>
          Compassionate care. Advanced technology. Lifelong wellness.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 4, borderRadius: '999px', px: 5 }}
          href="/contact"
        >
          Book Appointment
        </Button>
      </Container>
    </Box>
  );
}
