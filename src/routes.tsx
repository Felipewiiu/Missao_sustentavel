
import Home from 'components/Home';
import MainScreen from './components/mainScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presentation from 'components/Presentation';



export default function AppRoutes() {


  return (
    <main  >
      <Router>
        <Routes>

          <Route path='/' element={<MainScreen />}>
            <Route index element={<Home />} />
            <Route path='/presentation' element={<Presentation />} />

          </Route>

        </Routes>
      </Router>

    </ main>
  );
}
