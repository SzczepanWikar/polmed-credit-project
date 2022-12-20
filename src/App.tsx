import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { GlobalContext, doctors, services } from './Contexts/GlobalContext';
import { DoctorVisit } from './Pages/DoctorVisit/DoctorVisit';
import { Summary } from './Pages/Summary/Summary';
export const App = () => {
  return (
    <>
      <GlobalContext.Provider value={{ doctors: doctors, services: services }}>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctor-visit" element={<DoctorVisit />} />
              <Route path="/summary" element={<Summary />} />
            </Routes>
          </main>
          
        </Router>
        <Footer />
      </GlobalContext.Provider>
    </>
  );
};

export default App;
