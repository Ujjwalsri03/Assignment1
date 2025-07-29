import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 3, textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} SmartCare Hospital. All rights reserved @Ujjwal.
      </Typography>
    </Box>
  );
}
