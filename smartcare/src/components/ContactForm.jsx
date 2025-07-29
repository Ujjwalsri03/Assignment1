import { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Paper,
} from '@mui/material';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" textAlign="center" mb={3} fontWeight="bold">
            Contact Us
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Your Name"
              fullWidth
              required
              variant="outlined"
              sx={{ mb: 3 }}
              onChange={handleChange}
              value={form.name}
            />
            <TextField
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              required
              variant="outlined"
              sx={{ mb: 3 }}
              onChange={handleChange}
              value={form.email}
            />
            <TextField
              name="message"
              label="Your Message"
              fullWidth
              multiline
              rows={4}
              required
              variant="outlined"
              sx={{ mb: 3 }}
              onChange={handleChange}
              value={form.message}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                mt: 1,
                textTransform: 'none',
                fontWeight: 'bold',
                py: 1.5,
              }}
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
