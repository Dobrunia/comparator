export async function fetchMusicData(url: number) {
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_HOST}/parse-music`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching music data:', error);
    return [];
  }
}
