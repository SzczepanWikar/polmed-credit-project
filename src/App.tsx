import React from 'react';
import Navbar from './components/home/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home.js';
import { Services } from './components/Pages/Services.js';
import { Products } from './components/Pages/Products.js';
import './App.scss';
import { GlobalContext } from './Contexts/GlobalContext';
import { Specialization } from './common/enums/specialization.enum';
import { Doctor } from './common/interfaces/doctor.interface';
import { Service } from './common/interfaces/service.interface';
export const App = () => {
  return (
    <>
      <GlobalContext.Provider value={{ doctors: doctors, services: services }}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      </GlobalContext.Provider>
      {/* <footer>Footer</footer> */}
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
  },
  {
    id: 2,
    name: 'Anna',
    lastName: 'Kowalska',
    specialization: Specialization.pediatrician,
  },
  {
    id: 3,
    name: 'Zofia',
    lastName: 'Nowak',
    specialization: Specialization.familyDoctor,
  },
  {
    id: 4,
    name: 'Antoni',
    lastName: 'Wiśwnieski',
    specialization: Specialization.pediatrician,
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
