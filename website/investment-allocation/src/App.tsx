import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import './App.css';
import InvestorBreakdown from './components/InvestorBreakdown';
import AvailableAllocation from './components/AvailableAllocation';
import { allocationAlg } from './algorithms/allocationAlg';

type Investor = {
  name: string;
  requested_amount: number | '';
  average_amount: number | '';
};

function App() {

  const [allocation, setAllocation] = useState<number | ''>('');
  const [investors, setInvestors] = useState<Investor[]>([
    { name: '', requested_amount: '', average_amount: '' }
  ]);

  const handleProrate = (allocation: number | '', investors: Investor[]) => {
    if (allocation === '' ) {
      return;
    }
    let investmentInfo = { allocation_amount: allocation, investor_amounts: investors }
    console.log('This is investmentInfo', investmentInfo);
    let result = allocationAlg(investmentInfo);
    console.log('This is the result', result);
  }

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
            <AvailableAllocation allocation={allocation} setAllocation={setAllocation} />
            <InvestorBreakdown investors={investors} setInvestors={setInvestors} />
          </Box>
          <Box p={2}>
            <Button variant="contained" onClick={() => handleProrate(allocation, investors)}>
              Prorate
            </Button>
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
