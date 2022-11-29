import { createContext } from 'react';
import { Specialization } from '../common/enums/specialization.enum';
import { Doctor } from '../common/interfaces/doctor.interface';
import { Service } from '../common/interfaces/service.interface';

export type GlobalData = {
  doctors: Doctor[];
  services: Service[];
};

export const GlobalContext = createContext<GlobalData>({
  doctors: [],
  services: [],
});

export const globalData: GlobalData = {
  doctors: [
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
  ],
  services: [
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
  ],
};
