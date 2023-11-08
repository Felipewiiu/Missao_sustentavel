import React from 'react';
import Styles from './Presentation.module.scss';
import { ReactComponent as Trash } from '../../assets/elements.svg';
import planet from '../../assets/planeta 2.png';
import robo from '../../assets/robo.svg';
import { text } from '../../data/text';
import Next from '../../assets/Next.png';

export default function Presentation() {
  const tela = screen.width;
  console.log(tela);
  return (
    <div className={Styles.container}>
      <div className={Styles.container__banner}>

        <div className={Styles.container__image}>
          <img src={planet} alt="Planeta Terra" className={Styles.planet} />
          <Trash className={Styles.trash} />

        </div>
        <div className={Styles.container__dialogue}>
          <img src={robo} alt="Robo" className={Styles.robo} />
          <div className={Styles.container__text}>
            <p>
              {text[1]}
            </p>
            <img src={Next} alt="Próximo"  className={Styles.next}/>
          </div>

          
        </div>


      </div>
    </div>
  );
}

