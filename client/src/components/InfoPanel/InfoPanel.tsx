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
        Отправьте ссылку на открытый Яндекс плейлист с музыкой,
        <br /> и выбирайте лучшее из музыки.
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
