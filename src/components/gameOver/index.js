import { useNavigate, Link } from 'react-router-dom';
import Styles from './gameOver.module.scss';



export default function GameOver() {

  const navigate = useNavigate();
  
  const reloads = () => {
    navigate('/');
    
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.container__main}>
        <h1>Game over</h1>
        <Link to='/game' reloadDocument={true} className={Styles.try}>
          <h2 >Tente outra vez</h2>
        </Link>
      </div>
    </div>
  );
}
