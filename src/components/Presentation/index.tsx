import React from 'react';
import Styles from './Presentation.module.scss';
import { ReactComponent as Trash } from '../../assets/Trash.svg';
import { ReactComponent as Planet } from '../../assets/planeta 1.svg';

export default function Presentation() {
  const tela = screen.width;
  console.log(tela);
  return (
    <div className={Styles.container}>
      <div className={Styles.container__banner}>
        <div>

          <Planet className={Styles.planet} />
        </div>
        <div className={Styles.trash}>
          <Trash />
        </div>

      </div>
    </div>
  );
}

