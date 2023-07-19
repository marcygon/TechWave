import "./Main.scss";
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import EventsPage from "./Pages/EventsPage/EventsPage";
import EventInfoPage from "./Pages/EventInfoPage/EventInfoPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/events/available' element={<EventsPage />} />
      <Route path='/events/notAvailable' element={<EventsPage />} />
      <Route path='/events/:id' element={<EventInfoPage />} />
      <Route path='/aboutUs' element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
