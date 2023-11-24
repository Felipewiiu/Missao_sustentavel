import {useEffect} from 'react';
import Styles from './gameOver.module.scss';
import lose1 from '../../assets/audio/lose1.mp3';



export default function GameOver() {

  return (
    <div className={Styles.container}>
      <div className={Styles.container__main}>
        <h1>Game over</h1>
        
      </div>
    </div>
  );
}
