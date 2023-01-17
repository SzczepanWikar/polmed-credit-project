import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { GlobalContext, doctors, services } from './Contexts/GlobalContext';
import { DoctorVisit } from './Pages/DoctorVisit/DoctorVisit';
import { Summary } from './Pages/Summary/Summary';
import { useEffect } from 'react';
export const App = () => {
  return (
    <>
      <GlobalContext.Provider value={{ doctors: doctors, services: services }}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctor-visit" element={<DoctorVisit />} />
              <Route path="/summary" element={<Summary />} />
            </Routes>
          </main>
        </BrowserRouter>
        <Footer />
      </GlobalContext.Provider>
    </>
  );
};

export default App;
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
