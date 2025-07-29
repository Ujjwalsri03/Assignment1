import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { features } from '../data/features';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PublicIcon from '@mui/icons-material/Public';

const icons = {
  LocalHospital: <LocalHospitalIcon fontSize="large" color="primary" />,
  MedicalServices: <MedicalServicesIcon fontSize="large" color="primary" />,
  Public: <PublicIcon fontSize="large" color="primary" />,
};

export default function Features() {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        backgroundColor: '#f9fafb',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ maxWidth: '1200px' }}
        justifyContent="center"
      >
        {features.map((f, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                maxWidth: 280,
                mx: 'auto',
                textAlign: 'center',
                p: 3,
                minHeight: 220,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
              }}
              elevation={3}
            >
              <Box sx={{ mb: 2 }}>{icons[f.icon]}</Box>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {f.title}
                </Typography>
                <Typography color="text.secondary">
                  {f.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
