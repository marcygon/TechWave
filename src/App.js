import "./Main.scss";
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import EventsPage from "./Pages/EventsPage/EventsPage";
import EventInfoPage from "./Pages/EventInfoPage/EventInfoPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/available' element={<EventsPage />} />
      <Route path='/notAvailable' element={<EventsPage />} />
      <Route path='/events/:id' element={<EventInfoPage />} />
    </Routes>
  );
}

export default App;
