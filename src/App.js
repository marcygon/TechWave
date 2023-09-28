import "./Main.scss";
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import EventsPage from "./Pages/EventsPage";
import EventInfoPage from "./Pages/EventInfoPage";
import AboutUsPage from "./Pages/AboutUsPage";
import AccountPage from "./Pages/AccountPage";
import AdminPage from "./Pages/AdminPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

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
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
