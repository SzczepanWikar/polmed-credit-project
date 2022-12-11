import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import { GlobalContext, globalData } from './Contexts/GlobalContext';
import { DoctorVisit } from './Pages/DoctorVisit/DoctorVisit';
import { Summary } from './Pages/Summary/Summary';
export const App = () => {
  return (
    <>
      <GlobalContext.Provider value={globalData}>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctor-visit" element={<DoctorVisit />} />
              <Route path="/summary" element={<Summary />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
