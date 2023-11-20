import { useState, useEffect } from 'react';
import Styles from './pageGame.module.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import PaperTrash from '../../assets/paperTrash.png';
import ironTrash from '../../assets/ironTrash.png';
import plasticTrash from '../../assets/plasticTrash.png';
import organicTrash from '../../assets/organicTrash.png';
import trashGroup from './trashGroup.json';
import {getRandomNumber} from '../../util/randomNumbers';


export default function PageGame() {

  const [location, setLocation] = useState(10);
  const [type, setType] = useState('plasticTrash');
  const [currentImg, setCurrentImg] = useState(plasticTrash);
  let [locationY, setLocaionY] = useState(-30);
  let [locationX, setLocaionX] = useState(25);
 
  

  
  
  const alerta = () => {
    let random = getRandomNumber(0, 670);
    console.log(random);
    setLocaionX(random);
    setLocaionY(-30);
    
  };

  useEffect(() => {
    const fallTrashInterval = setInterval(() => {
      setLocaionY(locationY => locationY + 30);
    }, 100);
    
    locationY === 600 ? clearInterval(fallTrashInterval) & alerta(): '';

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
      location >= 640 ? '' : setLocation(location + 10);
      break;

    case 'a':
      location < 10 ? '' : setLocation(location - 10);
      break;

    case 'ArrowRight':
      location >= 640 ? '' : setLocation(location + 10);
      break;

    case 'ArrowLeft':
      location < 10 ? '' : setLocation(location - 10);
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
              src={elementos[5].path} 
              alt="" 
              className={Styles.elementos}
              style={{ 
                'transform': `translate(${locationX}px, ${locationY}px)`,
                
              }}
            />

          </div>
        </div>
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
