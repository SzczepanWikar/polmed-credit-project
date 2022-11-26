import { Specialization } from '../enums/specialization.enum';

export interface Doctor {
  id: number;
  name: string;
  lastName: string;
  specialization: Specialization;
  avatar: string;
}
