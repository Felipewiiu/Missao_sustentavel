import { useState, useEffect, useRef} from 'react';
import Styles from './pageGame.module.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import PaperTrash from '../../assets/paperTrash.png';
import ironTrash from '../../assets/ironTrash.png';
import plasticTrash from '../../assets/plasticTrash.png';
import organicTrash from '../../assets/organicTrash.png';
import trashGroup from './trashGroup.json';
import { getRandomNumber } from '../../util/randomNumbers';
import {play1up, playfireball, playPowerDown} from '../../util/playSong';
import {life} from '../../data/life.tsx';
import { useNavigate } from 'react-router-dom';
import lose from '../../assets/audio/lose1.mp3';
import clear from '../../assets/audio/clear.mp3';
import beach from '../../assets/audio/Koopa Beach.mp3';


export default function PageGame() {
  const navigate = useNavigate();
  const speed = 1;
  const [locationTrash, setLocationTrash] = useState(10);
  const [type, setType] = useState('plasticTrash');
  const [currentImg, setCurrentImg] = useState(plasticTrash);
  let [locationY, setLocaionY] = useState(-90);
  let [locationX, setLocaionX] = useState(30);
  const [objectType, setObjectType] = useState(3);
  const [time] = useState(10);
  let random = getRandomNumber(0, 640);
  let randomObject = getRandomNumber(0, 6);
  let [score, setScore] = useState(0);
  const [segundoTipo, setSegundoTipo] = useState(type);

  //teste de funcionalidade
  const audioRef = useRef(new Audio(beach));

  const openMusic = () => {
    audioRef.current.play();
    console.log('tocou a musica');
  };

  useEffect(() => {
    setTimeout(openMusic, 1000);
  }, []);
 

  useEffect(()=>{
    
    if(locationY === 600 && locationTrash != locationX){
      playfireball();
    }

  },[locationY]);

  // função de colisão
  useEffect(()=> {
    if( locationY === 540 &&  locationTrash + 20 === locationX ){
      setScore(score +1);
      
    } 

    const reload = () => {
      setLocaionX(random);
      setLocaionY(-30);
      setObjectType(randomObject);
    };
    
    if(locationY === 540 && locationX >= locationTrash - 45 && locationX <= locationTrash + 70) {
      
      if(segundoTipo === trashGroup[objectType].type && locationY === 540){
        play1up();
        setScore(score +1);
        reload();
      } else {
        playPowerDown();
        life.pop();
        alert();
      }
    }
  },[locationY]);

  
  // função de colisão do chão
  const alert = () => {
    setLocaionX(random);
    setLocaionY(-20);
    setObjectType(randomObject);
    setScore(score - 1);
  };

  useEffect(() => {
    const fallTrashInterval = setInterval(() => {
      setLocaionY(locationY => locationY + time);
    }, 100);

    locationY === 610 ? clearInterval(fallTrashInterval) & alert() : '';

    return () => clearInterval(fallTrashInterval);

  }, [locationY]);




  // logica de aleatoriedade
  const elementos = trashGroup.map((elementos) => {
    return elementos;
  });



  switch (type) {
  case 'organicTrash':
    setCurrentImg(organicTrash);
    setType('');
    
    break;

  case 'plasticTrash':
    setCurrentImg(plasticTrash);
    setType('');
    break;

  case 'paperTrash':
    setCurrentImg(PaperTrash);
    setType('');
    break;

  case 'ironTrash':
    setCurrentImg(ironTrash);
    setType('');
    break;
  }


  const handleKeyDown = event => {

    switch (event.key) {
    case 'd':
      locationTrash >= 640 ? '' : setLocationTrash(locationTrash + 1);
      break;

    case 'a':
      locationTrash <= 10 ? '' : setLocationTrash(locationTrash - speed);
      break;

    case 'ArrowRight':
      locationTrash >= 640 ? '' : setLocationTrash(locationTrash + speed);
      break;

    case 'ArrowLeft':
      locationTrash <= 10 ? '' : setLocationTrash(locationTrash - speed);
      break;
    }
  };

  function changeTrash(type) {
    setType(type);
    setSegundoTipo(type);
  }


  //Logica do game over
  const playSong = () => {
    new Audio(lose).play();
  };

  if(life.length === 0 || score === -5){
    audioRef.current.pause();
    setTimeout(playSong, 1000);
    navigate('/gameOver');
  }

  //loga do game vencedor

  const playSongWiner = () => {
    new Audio(clear).play();
  };
  if(score === 10){
    audioRef.current.pause();
    setTimeout(playSongWiner, 1000);
    navigate('/gamewiner');
  }




  return (
    <div className={Styles.container} tabIndex={0} onKeyDown={handleKeyDown}>
      <div className={Styles.imgPageGame}>
        <div className={Styles.beltTrash}>
          <div className={Styles.beltLimit}>

            <img
              src={elementos[objectType].path}
              alt=""
              className={Styles.elementos}
              style={{
                'transform': `translate(${locationX}px, ${locationY}px)`
              }}
              
            />

          </div>
        </div>
        <div className={Styles.container__topBar}>
          <div className={Styles.points}>
            <p>{score} </p>
          </div>
          <div className={Styles.heart}>
            {
              life.map(index => (
                <Heart key={index} className={Styles.unit__heat} />
              ))
            }
            
          </div>

        </div>
        <div className={Styles.trash_moviment_conatainer}>
          <div className={Styles.limt_moviment}>
            <img
              src={currentImg} alt={type}
              className={Styles.trash_moviment}
              style={{ 'transform': `translatex(${locationTrash}px)` }}

            />
          </div>
        </div>
        <div className={Styles.container_trash}>
          <div className={Styles.container__line}>
            <img
              src={plasticTrash} alt="Plastico"
              className={Styles.trash}
              onClick={() => changeTrash('plasticTrash')}
            />
            <img
              src={PaperTrash} alt="Papel"
              className={Styles.trash}
              onClick={() => changeTrash('paperTrash')}
            />
          </div>
          <div className={Styles.container__line}>
            <img
              src={organicTrash} alt="Orgânico"
              className={Styles.trash}
              onClick={() => changeTrash('organicTrash')}
            />
            <img
              src={ironTrash} alt="Ferro"
              className={Styles.trash}
              onClick={() => changeTrash('ironTrash')}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
