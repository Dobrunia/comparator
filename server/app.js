const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/parse-friends', async (req, res) => {
  try {
    const { userId } = req.body;
    const loginUrl = 'https://vk.com/';
    const friendsUrl = `https://vk.com/friends?id=${userId}&section=all`;

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to VK login page
    await page.goto(loginUrl, { waitUntil: 'networkidle2' });

    // Enter username
    await page.type('#index_email', '');

    // Submit to reveal password field
    await page.click('.VkIdForm__signInButton');

    // Wait for password input to appear
    await page.waitForSelector('input[name="password"]', { visible: true });

    // Enter password
    await page.type('input[name="password"]', '');

    // Click the login button
    await page.click('.VkIdForm__signInButton');

    // Wait for navigation after login
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Navigate to the friends list page
    await page.goto(friendsUrl, { waitUntil: 'networkidle2' });

    // Debugging: Take a screenshot and log the page content
    await page.screenshot({ path: 'page_screenshot.png' });
    const pageContent = await page.content();
    console.log(pageContent);

    // Check if friends list elements exist on the page
    const friendsExist = await page.$('.friends_user_row');
    if (!friendsExist) {
      console.error('Friends list elements not found on the page');
      res.status(500).send('Friends list elements not found');
      await browser.close();
      return;
    }

    // Extract friends' data
    const friends = await page.evaluate(() => {
      const friendsArray = [];
      document.querySelectorAll('.friends_user_row').forEach((element) => {
        const name = element
          .querySelector('.friends_field_title a')
          ?.textContent.trim();
        const imageUrl = element.querySelector('.AvatarRich img')?.src;
        const profileUrl = element.querySelector(
          '.friends_field_title a',
        )?.href;

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
