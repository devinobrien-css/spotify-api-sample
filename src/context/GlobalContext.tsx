import React, { createContext, useEffect, useState } from 'react';

// Create a context for your variable
export const GlobalContext = createContext({
  token: ""
});
  
// Provider component to wrap your app and manage the variable
export const GlobalContextProvider = ({ children }: {
    children: React.ReactNode;
}) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    
    const getToken = async () => {
      const url = "https://accounts.spotify.com/api/token";
      const data = new URLSearchParams();
      data.append('grant_type', 'client_credentials');
      data.append('client_id', import.meta.env.VITE_SPOTIFY_CLIENT_ID as string);
      data.append('client_secret', import.meta.env.VITE_SPOTIFY_CLIENT_SECRET as string);

      try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        });

        if (!response.ok) {
            throw new Error('Failed to fetch token');
        }

        const responseData = await response.json();
        localStorage.setItem('spotifyAuthToken', responseData.access_token);
        setToken(responseData.access_token);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getToken();

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const exportContext = {
    token: token
  };

  return (
    <GlobalContext.Provider value={exportContext}>
      {children}
    </GlobalContext.Provider>
  );
};
