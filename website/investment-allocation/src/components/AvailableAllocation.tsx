import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

function AvailableAllocation() {

const [allocation, setAllocation] = useState<number | ''>('');

  const handleChange = (value: string) => {
    setAllocation(value === '' ? '' : Number(value));
  };

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mb: 1 }}>
      <Grid size={3}>
        <TextField
          sx={{
            input: { color: 'white' },
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          }}
          label="Allocation"
          type='number'
          fullWidth
          value={allocation}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Grid>
    </Grid>
  )
}

export default AvailableAllocation