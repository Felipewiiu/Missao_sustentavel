import React from 'react';
import Styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import audio1 from '../../assets/audio/soundOpen.mp3';

export default function Home() {
  const navigate = useNavigate();

  const openMusic = () => {
    navigate('/presentation');
    new Audio(audio1).play();
  };

  return (
    <div className={Styles.container} onClick={openMusic}>
      <button className={Styles.btn} >
        <p>
          Start Game
        </p>
      </button>
    </div>
  );
}
