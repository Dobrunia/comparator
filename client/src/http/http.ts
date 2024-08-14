export async function fetchFriendsData(userId: number) {
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_HOST}/parse-friends`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching friends data:', error);
    return [];
  }
}
