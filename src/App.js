import "./Main.scss";
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
  );
}

export default App;
