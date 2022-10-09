import React, { useEffect, useState } from 'react';

export default function Component({ src, ...props }) {
  const [ source, setSource ] = useState();
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      console.log('imageLoad', src);
      setSource(image);
    };
    image.src = src;
  }, [ src ]);
  return <texture source={source} {...props} />;
}