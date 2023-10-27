import React from 'react';
import Styles from './Presentation.module.scss';
import { ReactComponent as Elemento  } from '../../assets/Grupoelemento.svg';

export default function Presentation() {
  const tela = screen.width;
  console.log(tela);
  return (
    <div className={Styles.container}>
      <div className={Styles.container__banner}>
        <Elemento/>

      </div>
    </div>
  );
}

