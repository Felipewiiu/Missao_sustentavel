import {useEffect} from 'react';
import Styles from './gameWiner.module.scss';
import lose1 from '../../assets/audio/lose1.mp3';



export default function GameWiner() {

  const playSong = () => {
    new Audio(lose1).play();
  };

  
  // useEffect(() => {
  //   setInterval(playSong, 5000);

  // },[]);

  return (
    <div className={Styles.container}>
      <div className={Styles.container__main}>
        <p>UAUUUUU Você</p>
        <p>Conseguiu</p>
      </div>
    </div>
  );
}
