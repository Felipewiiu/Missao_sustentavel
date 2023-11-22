import { useState, useEffect, useRef } from 'react';
import Styles from './pageGame.module.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import PaperTrash from '../../assets/paperTrash.png';
import ironTrash from '../../assets/ironTrash.png';
import plasticTrash from '../../assets/plasticTrash.png';
import organicTrash from '../../assets/organicTrash.png';
import trashGroup from './trashGroup.json';
import { getRandomNumber } from '../../util/randomNumbers';


export default function PageGame() {

  const speed = 1;

  const [locationTrash, setLocationTrash] = useState(10);
  const [type, setType] = useState('plasticTrash');
  const [currentImg, setCurrentImg] = useState(plasticTrash);
  let [locationY, setLocaionY] = useState(-30);
  let [locationX, setLocaionX] = useState(30);
  const [objectType, setObjectType] = useState(0);
  const [time, setTime] = useState(10);
  let random = getRandomNumber(0, 640);
  let randomObject = getRandomNumber(0, 5);
  let [score, setScore] = useState(0);
  

  const parar = () => {
    setTime(0);
    console.log(time);
    console.log('posição Y do lixo  ' + locationY);
    console.log('posição X do lixo  ' + locationX);
    console.log('posição X do lixeira ' + locationTrash);
  };


 

  useEffect(()=> {
    if( locationY === 540 &&  locationTrash + 20 === locationX ){
      setScore(score +1);
      console.log(score);
    } 
    
    if(locationY === 540 && locationX >= locationTrash + 50 && locationX <= locationTrash - 50) {
      setScore(score +1);
    }
  },[locationY]);

  

  const alert = () => {
    setLocaionX(random);
    setLocaionY(-30);
    setObjectType(randomObject);
  };

  useEffect(() => {
    const fallTrashInterval = setInterval(() => {
      setLocaionY(locationY => locationY + time);
    }, 100);

    locationY === 600 ? clearInterval(fallTrashInterval) & alert() : '';

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
  }


  return (
    <div className={Styles.container} tabIndex={0} onKeyDown={handleKeyDown}>
      <button
        style={{
          'zIndex': '3',
          'position': 'absolute',
          'botton': '500px'
        }}
        onClick={parar }
      >
        Parar
      </button>
      
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
            <p>{score} pt <br/>{locationX}  <br/>lata de lixo {locationTrash} <br/> posição X {locationX}</p>
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
