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

  const [location, setLocation] = useState(1);
  const [type, setType] = useState('plasticTrash');
  const [currentImg, setCurrentImg] = useState(plasticTrash);
  let [locationY, setLocaionY] = useState(-30);
  let [locationX, setLocaionX] = useState(25);
  const [objectType, setObjectType] = useState(0);
  let random = getRandomNumber(0, 670);
  let randomObject = getRandomNumber(0, 5);

  const targetOjbect = useRef(null);
  // console.log(targetOjbect.current);

  if (location === locationX) {
    console.log('Os elemento se encontraram' + location + '' + locationX);
  }


  console.log(location);

  const alert = () => {
    setLocaionX(random);
    setLocaionY(-30);
    setObjectType(randomObject);
  };

  useEffect(() => {
    const fallTrashInterval = setInterval(() => {
      setLocaionY(locationY => locationY + 1);
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
      location >= 640 ? '' : setLocation(location + 1);
      break;

    case 'a':
      location < 10 ? '' : setLocation(location - 1);
      break;

    case 'ArrowRight':
      location >= 640 ? '' : setLocation(location + 1);
      break;

    case 'ArrowLeft':
      location < 10 ? '' : setLocation(location - 1);
      break;
    }
  };

  function changeTrash(type) {
    setType(type);
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
              ref={targetOjbect}
            />

          </div>
        </div>
        <div className={Styles.container__topBar}>
          <div className={Styles.points}>
            <p>0 pt {locationX}  </p>
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
              style={{ 'transform': `translatex(${location}px)` }}

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
