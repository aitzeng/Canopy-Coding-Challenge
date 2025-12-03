import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

type Investor = {
  name: string;
  requested_amount: number | '';
  average_amount: number | '';
};

function InvestorBreakdown() {

  const [investors, setInvestors] = useState<Investor[]>([
    { name: '', requested_amount: '', average_amount: '' }
  ]);

  const handleChange = (
    index: number,
    field: keyof Investor,
    value: string
  ) => {
    setInvestors(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]:
          field === 'name'
            ? value
            : (value === '' ? '' : Number(value)),
      };
      return updated;
    });
  };

  const addInvestor = () => {
    setInvestors(prev => [
      ...prev,
      { name: '', requested_amount: '', average_amount: '' },
    ]);
  };

  const removeInvestor = (index: number) => {
    setInvestors(prev =>
      prev.length === 1 ? prev : prev.filter((_, i) => i !== index)
    );
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Investors
      </Typography>

      {investors.map((inv, index) => (
        <Grid container spacing={2} alignItems="center" key={index} sx={{ mb: 1 }}>

          <Grid size={3}>
            <TextField
              sx={{
                input: { color: 'white' },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              }}
              label="Name"
              fullWidth
              value={inv.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
            />
          </Grid>

          <Grid size={3}>
            <TextField
              sx={{
                input: { color: 'white' },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              }}
              label="Requested Amount"
              type="number"
              fullWidth
              value={inv.requested_amount}
              onChange={(e) => handleChange(index, 'requested_amount', e.target.value)}
            />
          </Grid>

          <Grid size={3}>
            <TextField
              sx={{
                input: { color: 'white' },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              }}
              label="Average Amount"
              type="number"
              fullWidth
              value={inv.average_amount}
              onChange={(e) => handleChange(index, 'average_amount', e.target.value)}
            />
          </Grid>

          <Grid size={3}>
            <Button variant="contained" onClick={() => removeInvestor(index)}>
              Remove Investor</Button>
          </Grid>

        </Grid>
      ))}

      <Box mt={2}>
        <Button variant="contained" onClick={addInvestor}>
          Add Investor
        </Button>
      </Box>
    </Box>
  )
}

export default InvestorBreakdown