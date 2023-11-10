
import Home from 'components/Home';
import MainScreen from './components/mainScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presentation from 'components/Presentation';
import PageGame from 'components/pageGame';



export default function AppRoutes() {


  return (
    <main  >
      <Router>
        <Routes>

          <Route path='/' element={<MainScreen />}>
            <Route index element={<Home />} />
            <Route path='/presentation' element={<Presentation />} />
            <Route path='/game' element={<PageGame/>} />

          </Route>

        </Routes>
      </Router>

    </ main>
  );
}
