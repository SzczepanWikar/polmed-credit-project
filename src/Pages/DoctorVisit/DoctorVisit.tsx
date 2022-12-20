import { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { InputWrapper } from './components/Input/InputWrapper';
import './DoctorVisit.scss';
import { VisitCalendar } from './components/Calendar/VisitCalendar';
import { Doctor } from '../../common/interfaces/doctor.interface';

export const DoctorVisit: React.FC = () => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const idDoctor = searchParams.get('id');
  let doctor: Doctor;

  doctor = ctx.doctors.find((d) => d.id === +idDoctor);

  const services = ctx.services;
  let avatarImage: string;

  try {
    avatarImage = require('./../../assets/images/' + doctor?.avatar);
  } catch (e) {}
  useEffect(() => {
    if (!idDoctor || !doctor) {
      navigate('/');
    }
  });
  return (
    <div className="doctor-visit">
      <div className="doctor-visit__container">
        <h1>Umów się na wizytę</h1>
        <form>
          <h2>Dane lekarza</h2>
          <div className="doctor-visit__doctor-data">
            <div>
              <InputWrapper
                name="Imię"
                readonly={true}
                disabled={true}
                value={doctor?.name}
              ></InputWrapper>
              <InputWrapper
                name="Nazwisko"
                readonly={true}
                disabled={true}
                value={doctor?.lastName}
              ></InputWrapper>
              <InputWrapper
                name="Specjalizacja"
                readonly={true}
                disabled={true}
                value={doctor?.specialization}
              ></InputWrapper>
            </div>

            <div className="doctor-visit__doctor-avatar-wrapper">
              <img
                src={avatarImage}
                alt={`${doctor?.name} ${doctor?.lastName}`}
              ></img>
            </div>
          </div>
          <h2>Szczegóły wizyty</h2>
          <div className="doctor-visit__select">
            <label>Cel wizyty</label>
            <select>
              <optgroup>
                <option> Wybierz cel wizyty </option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} &mdash; {s.price}zł
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
          <div className="doctor-visit__calendar">
            <label>Data wizyty</label>
            <div className="doctor-visit__calendar__container">
              <VisitCalendar />
            </div>
          </div>
          <InputWrapper name="Godzina" type="time"></InputWrapper>
          <div className="doctor-visit__buttons">
            <button
              className="doctor-visit__buttons__back"
              onClick={() => navigate('/')}
            >
              Powrót
            </button>
            <button className="doctor-visit__buttons__next">Dalej</button>
          </div>
        </form>
      </div>
    </div>
  );
};
