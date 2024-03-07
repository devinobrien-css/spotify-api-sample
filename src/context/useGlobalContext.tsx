import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

// Custom hook to access the variable
export const useGlobalContext = () => useContext(GlobalContext);