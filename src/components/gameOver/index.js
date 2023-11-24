import {useEffect} from 'react';
import Styles from './gameOver.module.scss';
import lose1 from '../../assets/audio/lose1.mp3';



export default function GameOver() {

  const playSong = () => {
    new Audio(lose1).play();
  };

  
  // useEffect(() => {
  //   setInterval(playSong, 5000);

  // },[]);

  return (
    <div className={Styles.container}>
      <div className={Styles.container__main}>
        <p>Game over</p>
      </div>
    </div>
  );
}
