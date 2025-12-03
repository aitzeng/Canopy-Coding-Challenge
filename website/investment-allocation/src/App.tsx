import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import './App.css';
import InvestorBreakdown from './components/InvestorBreakdown';
import AvailableAllocation from './components/AvailableAllocation';
import { allocationAlg } from './algorithms/allocationAlg';
import AllocationResults from './components/AllocationResults';

type Investor = {
  name: string;
  requested_amount: number | '';
  average_amount: number | '';
};

type AllocationResult = Record<string, number>;

function App() {

  const [allocation, setAllocation] = useState<number | ''>('');
  const [investors, setInvestors] = useState<Investor[]>([
    { name: '', requested_amount: '', average_amount: '' }
  ]);
  const [results, setResults] = useState<AllocationResult | null>(null);


  const handleProrate = (allocation: number | '', investors: Investor[]) => {
    if (allocation === '') {
      return;
    }
    let investmentInfo = { allocation_amount: allocation, investor_amounts: investors }
    console.log('This is investmentInfo', investmentInfo);
    let result = allocationAlg(investmentInfo);
    setResults(result as AllocationResult);
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
          <Box
            p={2}
            border={1}
            borderRadius={2}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <AvailableAllocation allocation={allocation} setAllocation={setAllocation} />
            <InvestorBreakdown investors={investors} setInvestors={setInvestors} />

            <Box sx={{ flexGrow: 1 }} />

            <Box mt={2}>
              <Button variant="contained" onClick={() => handleProrate(allocation, investors)}>
                Prorate
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid size={2}>
          <Box p={2} border={1} borderRadius={2} sx={{ height: '100%' }}>
            <AllocationResults results={results} />
          </Box>
        </Grid>
      </Grid>


    </Box>
  );
}

export default App;
