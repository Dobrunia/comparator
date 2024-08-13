import { Button, Grid } from '@mui/material';
import React from 'react';
import AppState from '../../state/state.ts';

export const InfoPanel = React.memo(() => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <span className="text-4xl mb-[20px]">Турнир лучших</span>
      <span className="text-center italic mb-[20px]">
        Отправьте своё ID или ID любого пользователя с открытым профилем VK,
        <br /> и выбирайте лучшее из его музыки или друзей.
      </span>
      <Button
        variant="contained"
        onClick={() => (AppState.currentView = 'sendId')}
      >
        Далее
      </Button>
    </Grid>
  );
});
