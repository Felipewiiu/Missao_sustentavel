import React from 'react';
import Styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={Styles.container} onClick={() => navigate('/presentation')}>
      <button className={Styles.btn} >
        <p>
          Start Game
        </p>
      </button>
    </div>
  );
}
