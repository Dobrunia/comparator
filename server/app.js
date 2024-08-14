const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/parse-friends', async (req, res) => {
  try {
    const { userId, username, password } = req.body; // Получаем данные для авторизации из запроса
    const url = `https://vk.com/friends?id=${userId}&section=all`;

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    // Переходим на страницу логина
    await page.goto('https://vk.com');

    // Вводим логин
    await page.type('#index_email', username);
    await page.click('#index_login_button');

    // Ждем перехода на следующую страницу для ввода пароля
    await page.waitForSelector('#index_pass');
    await page.type('#index_pass', password);
    await page.click('#index_login_button');

    // Ждем перехода на страницу после логина
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Проверка успешного логина
    const loginError = await page.$('.service_msg_warning');
    if (loginError) {
      console.error('Login failed. Check your username and password.');
      res.status(401).send('Login failed. Check your username and password.');
      await browser.close();
      return;
    }

    // Переход на страницу друзей
    await page.goto(url, { waitUntil: 'networkidle2' });

    // После успешного логина можно парсить данные
    const friends = await page.evaluate(() => {
      const friendsArray = [];
      document.querySelectorAll('.friends_user_row').forEach(element => {
        const name = element.querySelector('.friends_field_title a')?.textContent.trim();
        const imageUrl = element.querySelector('.AvatarRich img')?.src;
        const profileUrl = element.querySelector('.friends_field_title a')?.href;

        if (name && imageUrl && profileUrl) {
          friendsArray.push({
            id: profileUrl.split('/').pop(),
            name: name,
            imageUrl: imageUrl,
          });
        }
      });
      return friendsArray;
    });

    await browser.close();

    console.log('Parsed friends:', friends);
    res.status(200).json(friends);
  } catch (error) {
    console.error('Error parsing the page:', error);
    res.status(500).send('Error parsing the page');
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      `Server is Successfully Running, and App is listening on port ${PORT}`,
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
