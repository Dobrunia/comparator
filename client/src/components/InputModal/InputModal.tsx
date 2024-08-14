import { Box, TextField, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import React from 'react';
import AppState from '../../state/state.ts';
import { fetchFriendsData } from '../../http/http.ts';

export const InputModal = React.memo(() => {
  const [loading, setLoading] = React.useState(false);
  const handleClick = async () => {
    setLoading(true);
    const vkId = document.getElementById('vk_id')?.value;
    if (!vkId) {
      alert('Поле не может быть пустым!');
      return;
    }
    AppState.elements = await fetchFriendsData(vkId);
    console.log(AppState.elements);
    AppState.currentView = 'play';
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      autoComplete="off"
    >
      <Typography variant="h4" textAlign={'center'}>
        Введите Id от Vk
      </Typography>
      <Typography variant="subtitle2" textAlign={'center'} mb={10}>
        (только цифры, можно взять на вашей странице после "https://vk.com/")
      </Typography>
      <div className="flex items-center justify-center">
        <TextField
          id="vk_id"
          label="Id"
          variant="outlined"
          type="number"
          required
        />
        <LoadingButton
          size="large"
          type="submit"
          onClick={handleClick}
          endIcon={<Send />}
          loading={loading}
          loadingPosition="end"
          variant="outlined"
          sx={{ ml: 2 }}
        >
          <span>Send</span>
        </LoadingButton>
      </div>
    </Box>
  );
});
