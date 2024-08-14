import React, { useRef } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import AppState from '../../state/state.ts';
import { fetchMusicData } from '../../http/http.ts';

export const InputModal = React.memo(() => {
  const [loading, setLoading] = React.useState(false);
  const span = useRef<HTMLSpanElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const loadingStarts = () => {
    setLoading(true);
    if (span.current) {
      span.current.classList.remove('hidden');
    }
  };

  const loadingFinished = () => {
    setLoading(false);
    if (span.current) {
      span.current.classList.add('hidden');
    }
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = inputRef.current?.value;
    if (!url) {
      alert('Поле не может быть пустым!');
      return;
    }
    loadingStarts();
    const response = await fetchMusicData(url);
    if (response.length > 0) {
      AppState.elements = response;
      AppState.currentView = 'play';
    } else {
      alert('Данный плейлист не поддерживается, попробуйте другой!');
      loadingFinished();
    }
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
        Введите ссылку на Яндекс плейлист
      </Typography>
      <span>(не все плейлисты поддерживаются)</span>
      <img className="mb-[16px] mt-[16px]" src="getUrl.PNG" alt="" />
      <div className="flex items-center justify-center">
        <TextField
          id="playlist_url"
          label="ссылка на плейлист"
          variant="outlined"
          required
          inputRef={inputRef}
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
      <span ref={span} className="hidden">
        Это может занять до 5 мин
      </span>
    </Box>
  );
});
