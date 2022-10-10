import { useEffect, useState } from 'react';

export default function useImage(src) {
  const [ source, setSource ] = useState();
  useEffect(() => {
    if (src) {
      const image = new Image();
      image.onload = () => {
        setSource(image);
      };
      image.src = src;
    } else {
      setSource();
    }
  }, [ src ]);
  return source;
}