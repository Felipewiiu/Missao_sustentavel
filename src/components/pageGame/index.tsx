import React from 'react';
import Styles from './pageGame.module.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';

export default function PageGame() {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgPageGame}>
        <div className={Styles.container__topBar}>
          <div className={Styles.heart}>
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
}
