import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Services() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
      <List>
        {["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Emergency Care"].map(service => (
          <ListItem key={service}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
