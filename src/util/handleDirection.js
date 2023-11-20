import { useState } from 'react';

export const [location, setLocation] = useState(10);
 

export const handleKeyDown = event => {
  console.log('User pressed: ', event.key);

  switch (event.key) {
  case 'd':
    location >= 670 ? '' : setLocation(location + 10);
    break;

  case 'a':
    location < 10 ? '' : setLocation(location - 10);
    break;

  case 'ArrowRight':
    location >= 670 ? '' : setLocation(location + 10);
    break;

  case 'ArrowLeft':
    location < 10 ? '' : setLocation(location - 10);
    break;
  }
};