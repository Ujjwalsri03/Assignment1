import { Container, Typography, Paper, Box } from '@mui/material';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h4" textAlign="center" mb={4}>What Our Patients Say</Typography>
        {testimonials.map((t, i) => (
          <Paper key={i} sx={{ p: 3, mb: 3 }}>
            <Typography fontStyle="italic">“{t.message}”</Typography>
            <Typography mt={2} fontWeight="bold" color="primary">{t.name}</Typography>
          </Paper>
        ))}
      </Container>
    </Box>
  );
}
