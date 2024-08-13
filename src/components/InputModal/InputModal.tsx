import { Box, Button, TextField, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import React from 'react';

export const InputModal = React.memo(() => {
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => {
    setLoading(true);
    fetchAndParseHtml();
  };
  const fetchAndParseHtml = async () => {
    try {
      // Выполняем fetch запрос к странице, которую хотим запарсить
      const response = await fetch('https://vk.com/id191615887');
      const text = await response.text();

      // Создаем объект DOMParser для разбора HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');

      // Извлекаем интересующий контент (например, заголовок страницы)
      const title = doc.querySelector('ProfileInfo').textContent;

      // Обновляем состояние компонента
      console.log(title);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при парсинге:', error);
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
        Введите Id от Vk
      </Typography>
      <Typography variant="subtitle2" textAlign={'center'} mb={10}>
        (только цифры, можно взять на вашей странице после "https://vk.com/id")
      </Typography>

      <div className="flex items-center justify-center">
        <TextField id="vk_id" label="Id" variant="outlined" />
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
