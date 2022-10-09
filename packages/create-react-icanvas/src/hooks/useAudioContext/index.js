import { createContext, useContext, useState } from 'react';

const Context = createContext();
export function AudioLoader({ children }) {
  const [ value ] = useState([]);
  return <Context.Provider value={value}>{ children }</Context.Provider>;
}
export default function useAudioContext() {
  return useContext(Context);
}