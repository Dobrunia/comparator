# Comparator 🎵

Comparator is an interactive game where users submit a playlist link and participate in a thrilling song showdown. Two songs from the playlist are pitted against each other, and users must choose the better one. The game continues in knockout style until a single champion song remains!

## Features

- **Submit Playlists:** Easily submit a Yandex playlist URL to start the game.
- **Song Showdowns:** Engage in multiple rounds of song comparisons.
- **Crown the Champion:** The game progresses until one song is left standing as the winner.

## Project Structure

This project consists of two main components:

### 1. Client

The client side is built with modern web technologies to ensure a fast and responsive user experience.

- **Vite**: Lightning-fast build tool optimized for modern web development.
- **TypeScript**: Strongly typed language that builds on JavaScript.
- **React**: A powerful library for building user interfaces.
- **MobX**: Simple, scalable state management.
- **Material UI**: Sleek and customizable UI components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

### 2. Server

The server handles requests, processes playlist data, and controls game logic.

- **Express**: Fast, unopinionated web framework for Node.js.
- **Puppeteer**: Headless browser automation for scraping and testing.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **JavaScript**: The core language driving the server logic.

## Installation and Setup

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Cloning the Repository

```bash
git clone https://github.com/yourusername/comparator.git
cd comparator
```

### Installing Dependencies

### 1. Client

Navigate to the client directory and install the necessary dependencies:

```bash
npm install
```

### Running the Project

### 1. Client

To start the client in development mode, run:

```bash
npm run dev
```
Don’t forget to create a .env file in the "client" directory with the access data for the server. An example of the data can be found in env_example. 😊

### 2. Server

To start the server, run:

```bash
node app.js
```

The server will be up and running on http://localhost:3000.

## Technologies Used

### Frontend

- **Vite**
- **TypeScript**
- **React**
- **MobX**
- **Material UI**
- **Tailwind CSS**

### Backend

- **Express**
- **Puppeteer**
- **CORS**
- **JavaScript**

## How to Play

Submit a Playlist: Paste the URL of your Yandex playlist in the provided field.
Start the Game: The app will fetch songs from your playlist and start comparing them in pairs.
Vote: Choose your favorite song in each pair until only one song remains.

Enjoy playing Comparator! 🎶