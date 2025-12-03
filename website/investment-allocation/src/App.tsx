import React from 'react';
import logo from './logo.svg';
import { Box, Grid, Typography } from '@mui/material';
import './App.css';
import InvestorBreakdown from './components/InvestorBreakdown';
import AvailableAllocation from './components/AvailableAllocation';

function App() {
  return (
    <Box p={4} sx={{
      backgroundColor: '#282c34',
      minHeight: '100vh',
      color: 'white',
    }}>
      <Typography variant="h4" gutterBottom>
        Investment Allocation
      </Typography>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Box p={2} border={1} borderRadius={2}>
            <AvailableAllocation />
            <InvestorBreakdown />
          </Box>
        </Grid>

        <Grid size={2}>
          <Box p={2} border={1} borderRadius={2}>
            Right panel
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

export default App;
