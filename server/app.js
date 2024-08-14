const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/parse-music', async (req, res) => {
  try {
    const { url } = req.body;
    const result = [];

    // Запускаем браузер Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Открываем страницу и ждём её полной загрузки
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Прокручиваем страницу вниз до конца, чтобы подгрузились все элементы
    await autoScroll(page);

    // Извлекаем данные о треках
    const items = await page.evaluate(() => {
      const tracks = [];
      document.querySelectorAll('.d-track_with-cover').forEach((element) => {
        const item = {
          id: element.getAttribute('data-id'),
          name: element.querySelector('.d-track__name a')?.textContent.trim(),
          artist: element
            .querySelector('.d-track__artists a')
            ?.textContent.trim(),
          img: element.querySelector('.entity-cover__image')?.src,
        };
        tracks.push(item);
      });
      return tracks;
    });

    await browser.close();

    res.status(200).json(items);
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

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
