import powerDown from '../assets/audio/mario-power-down.mp3';
import fireball from '../assets/audio/break.mp3';
import lose from '../assets/audio/lose1.mp3';
import clear from '../assets/audio/clear.mp3';
import up from '../assets/audio/1up.mp3';


export const playPowerDown = () => {
  new Audio(powerDown).play();
};

export const playfireball = () => {
  new Audio(fireball).play();
};

export const playLose = () => {
  new Audio(lose).play();
};

export const playClear = () => {
  new Audio(clear).play();
};

export const play1up = () => {
  new Audio(up).play();
};