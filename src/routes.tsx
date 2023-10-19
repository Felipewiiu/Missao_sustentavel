import Home from 'components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function AppRoutes() {
 

  return (
    <main  >
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      
    </ main>
  );
}
