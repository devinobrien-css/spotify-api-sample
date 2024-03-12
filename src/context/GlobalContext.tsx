import React, { createContext, useEffect, useState } from 'react';
import { getAccessToken } from '../api';

export const GlobalContext = createContext({
  token: '',
  access_token: '',
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState('');
  const [access_token, setAccessToken] = useState('');

  useEffect(() => {
    const getTokens = async () => {
      const token = await getAccessToken();
      setToken(token);
    };
    getTokens();
  }, []);

  const exportContext = {
    token: token,
    access_token: access_token,
  };

  return (
    <GlobalContext.Provider value={exportContext}>
      {children}
    </GlobalContext.Provider>
  );
};
