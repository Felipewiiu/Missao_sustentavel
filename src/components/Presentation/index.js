import { useState, useEffect, useRef } from 'react';
import Styles from './Presentation.module.scss';
import { ReactComponent as Trash } from '../../assets/elements.svg';
import planet from '../../assets/planeta 2.png';
import robo from '../../assets/robo.svg';
import { text } from '../../data/text';
import Next from '../../assets/Next.png';
import { useNavigate } from 'react-router-dom';
import open from '../../assets/audio/open.mp3';



export default function Presentation() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const audioRef = useRef(new Audio(open));

  const openMusic = () => {
    audioRef.current.play();
    console.log('tocou a musica');
  };

  useEffect(() => {
    setTimeout(openMusic, 1000);
  }, []);

  const changeText = () => {
    setCount(count + 1);
    console.log(count);
    if (count >= 2) {
      navigate('/game');
      audioRef.current.pause();
      console.log('entrou no jogo');
    }
  };


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
            <p>{text[count]}</p>
            <img
              src={Next}
              alt="Próximo"
              className={Styles.next}
              onClick={changeText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
