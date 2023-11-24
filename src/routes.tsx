
import Home from 'components/Home';
import MainScreen from './components/mainScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presentation from 'components/Presentation';
import PageGame from 'components/pageGame';
import GameOver from 'components/gameOver';
import GameWiner from 'components/gameWiner';



export default function AppRoutes() {


  return (
    <main  >
      <Router>
        <Routes>

          <Route path='/' element={<MainScreen />}>
            <Route index element={<Home />} />
            <Route path='/presentation' element={<Presentation />} />
            <Route path='/game' element={<PageGame/>} />
            <Route path='/gameOver' element={<GameOver/>} />
            <Route path='/gamewiner' element={<GameWiner/>} />

          </Route>

        </Routes>
      </Router>

    </ main>
  );
}
