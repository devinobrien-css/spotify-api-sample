import axios from 'axios';

export const getAccessToken = async () => {
  const url = 'https://accounts.spotify.com/api/token';
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append('client_id', import.meta.env.VITE_SPOTIFY_CLIENT_ID as string);
  data.append(
    'client_secret',
    import.meta.env.VITE_SPOTIFY_CLIENT_SECRET as string,
  );

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch token');
    }

    const responseData = await response.json();
    localStorage.setItem('spotifyAuthToken', responseData.access_token);
    return responseData.access_token;
  } catch (error) {
    console.error('Error:', error);
  }
  return undefined;
};

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
  return undefined;
};

/**
 * Get the user's Spotify playlists
 * @param token access token
 * @returns user's Spotify playlists
 */
export const getSpotifyPlaylists = async (token: string) => {
  const url = 'https://api.spotify.com/v1/users/dobrien23/playlists';

  if (!token) return {};

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
  return undefined;
};

const artists = [
  {
    name: 'Dominic Fike',
    id: '6USv9qhCn6zfxlBQIYJ9qs',
  },
  {
    name: 'Pink Floyd',
    id: '0k17h0D3J5VfsdmQ1iZtE9',
  },
  {
    name: 'Frank Ocean',
    id: '5y8tKLUfMvliMe8IKamR32',
  },
  {
    name: 'Mac Miller',
    id: '4LLpKhyESsyAXpc4laK94U',
  },
  {
    name: 'Tame Impala',
    id: '5INjqkS1o8h1imAzPqGZBb',
  },
  {
    name: 'Steve Lacy',
    id: '57vWImR43h4CaDao012Ofp',
  },
  {
    name: 'Childish Gambino',
    id: '73sIBHcqh3Z3NyqHKZ7FOL',
  },
  {
    name: 'Gorillaz',
    id: '3AA28KZvwAUcZuOKwyblJQ',
  },
];

/**
 * Get selected top artists
 * @param token access token
 * @returns selected set of top artists
 */
export const getTopArtists = async (token: string) => {
  const url = `https://api.spotify.com/v1/artists?ids=${artists
    .map((artist) => artist.id)
    .join(',')}`;
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
  return undefined;
};

/**
 * Get the user's top artists
 * @param token access token
 * @returns user's top artists
 */
export const getUsersTopArtists = async (token: string) => {
  const url = 'https://api.spotify.com/v1/me/top/artists';
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
  return undefined;
};

export const getSongs = async (token: string) => {
  const url =
    'https://api.spotify.com/v1/playlists/0cyRImDMXpuYReVLJOI9vc/tracks';
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
  return undefined;
};
