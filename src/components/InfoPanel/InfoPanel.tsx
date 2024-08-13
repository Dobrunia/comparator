import { Box, Grid } from '@mui/material';
import React from 'react';

export const InfoPanel = React.memo(() => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <h2>xs=6</h2>
      </Grid>
      <Grid item xs={6}>
        <div>xs=6</div>
      </Grid>
    </Grid>
  );
});
