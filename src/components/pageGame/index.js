import React from 'react';
import Styles from './pageGame.module.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import PaperTrash from '../../assets/paperTrash.png';
import ironTrash from '../../assets/ironTrash.png';
import plasticTrash from '../../assets/plasticTrash.png';
import organicTrash from '../../assets/organicTrash.png';

export default function PageGame() {

  const handleKeyDown = event => {
    console.log('User pressed: ', event.key);

    switch (event.key) {
    case 'ArrowRight':
      console.log('seta para a direita');
      break;

    case 'ArrowLeft':
      console.log('seta para a esquerda');

    }
  };

  return (
    <div className={Styles.container} tabIndex={0} onKeyDown={handleKeyDown}>
      <div className={Styles.imgPageGame}>
        <div className={Styles.container__topBar}>
          <div className={Styles.points}>
            <p>0 pt</p>
          </div>
          <div className={Styles.heart}>
            <Heart />
            <Heart />
            <Heart />
          </div>

        </div>
        <div className={Styles.trash_moviment_conatainer}>
          <div className={Styles.limt_moviment}>
            <img
              src={organicTrash} alt=""
              className={Styles.trash_moviment}
              style={{ 'transform': 'translatex(50px)' }}

            />
          </div>
        </div>
        <div className={Styles.container_trash}>
          <div className={Styles.container__line}>
            <img src={plasticTrash} alt="" className={Styles.trash} />
            <img src={PaperTrash} alt="" className={Styles.trash} />
          </div>
          <div className={Styles.container__line}>
            <img src={organicTrash} alt="" className={Styles.trash} />
            <img src={ironTrash} alt="" className={Styles.trash} />
          </div>
        </div>

      </div>
    </div>
  );
}
