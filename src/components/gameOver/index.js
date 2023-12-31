import { Link } from 'react-router-dom';
import Styles from './gameOver.module.scss';



export default function GameOver() {

  return (
    <div className={Styles.container}>
      <div className={Styles.container__main}>
        <h1>Game over</h1>
        <Link to='/' reloadDocument={true} className={Styles.try}>
          <h2 >Tente outra vez</h2>
        </Link>
      </div>
    </div>
  );
}
