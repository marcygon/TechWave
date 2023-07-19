import "./Main.scss";
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import EventsPage from "./Pages/EventsPage/EventsPage";
import EventInfoPage from "./Pages/EventInfoPage/EventInfoPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import AccountPage from "./Pages/AccountPage/AccountPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/events/available' element={<EventsPage />} />
      <Route path='/events/notAvailable' element={<EventsPage />} />
      <Route path='/events/:id' element={<EventInfoPage />} />
      <Route path='/aboutUs' element={<AboutUsPage />} />
      <Route path='/account' element={<AccountPage />} />
    </Routes>
  );
}

export default App;
