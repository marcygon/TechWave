import "./Main.scss";
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import EventsPage from "./Pages/EventsPage/EventsPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import EventInfoPage from "./Pages/EventInfoPage/EventInfoPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/events/:id' element={<EventInfoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
