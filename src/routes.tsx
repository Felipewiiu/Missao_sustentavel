
import MainScreen from './components/mainScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function AppRoutes() {
 

  return (
    <main  >
      <Router>
        <Routes>
          <Route path='/' element={<MainScreen/>}/>
        </Routes>
      </Router>
      
    </ main>
  );
}
