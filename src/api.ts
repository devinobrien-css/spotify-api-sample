import axios from 'axios';

/**
 * Get the user's Spotify profile
 * @param token access token
 * @returns user's Spotify profile
 */
export const getSpotifyUser = async (token: string) => {
  const url = 'https://api.spotify.com/v1/users/dobrien23';
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    const responseData = await res.data;
    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
};

/**
 * Get the user's Spotify playlists
 * @param token access token
 * @returns user's Spotify playlists
 */
export const getSpotifyPlaylists = async (token: string) => {
  const url = 'https://api.spotify.com/v1/users/dobrien23/playlists';
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    const responseData = await res.data;
    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
};
