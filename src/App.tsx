import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Specialization } from './common/enums/specialization.enum';
import { Doctor } from './common/interfaces/doctor.interface';
import { Service } from './common/interfaces/service.interface';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import { GlobalContext } from './Contexts/GlobalContext';
import { DoctorVisit } from './Pages/DoctorVisit/DoctorVisit';
import { Summary } from './Pages/Summary/Summary';
export const App = () => {
  return (
    <>
      <GlobalContext.Provider value={{ doctors: doctors, services: services }}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor-visit" element={<DoctorVisit />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
          <Footer />
        </Router>
      </GlobalContext.Provider>
    </>
  );
};

export default App;

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Jan',
    lastName: 'Kowalski',
    specialization: Specialization.familyDoctor,
    avatar: '',
  },
  {
    id: 2,
    name: 'Anna',
    lastName: 'Kowalska',
    specialization: Specialization.pediatrician,
    avatar: '',
  },
  {
    id: 3,
    name: 'Zofia',
    lastName: 'Nowak',
    specialization: Specialization.familyDoctor,
    avatar: '',
  },
  {
    id: 4,
    name: 'Antoni',
    lastName: 'Wiśwnieski',
    specialization: Specialization.pediatrician,
    avatar: '',
  },
];

const services: Service[] = [
  {
    id: 1,
    name: 'Wizyta kontrolna',
    price: 100,
  },
  {
    id: 2,
    name: 'Konsultacja',
    price: 70,
  },
  {
    id: 3,
    name: 'Choroba',
    price: 150,
  },
  {
    id: 4,
    name: 'Wypisanie recepty',
    price: 50,
  },
  {
    id: 5,
    name: 'Szczepienie',
    price: 50,
  },
];
