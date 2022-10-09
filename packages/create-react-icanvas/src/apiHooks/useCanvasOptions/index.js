import { createContext, useContext } from 'react';

const Context = createContext();
export const Config = Context.Provider;
export default function useCanvasOptions() {
  return useContext(Context);
}