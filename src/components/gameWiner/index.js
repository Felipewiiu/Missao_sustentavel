import Styles from './gameWiner.module.scss';
import { Link } from 'react-router-dom';



export default function GameWiner() {

  return (
    <div className={Styles.container}>
      <div className={Styles.container__main}>
        <p>UAUUUUU Você</p>
        <p>Conseguiu</p>
        <Link to='/' reloadDocument={true} className={Styles.try}>
          <h2 >Jogar novamente</h2>

        </Link>
      </div>
    </div>
  );
}
