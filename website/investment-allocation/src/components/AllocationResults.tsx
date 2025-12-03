import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

type AllocationResult = Record<string, number>;

type ResultsProps = {
  results: AllocationResult | null;
}

function AllocationResults( { results }: ResultsProps) {
  return (
    <Box>
      <Typography>Results</Typography>
      {results && Object.keys(results).map((name) => (
        <Typography key={name}>
          {name}: ${results[name]}
        </Typography>
      ) )}
    </Box>
  )
}

export default AllocationResults