import { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';
import './DoctorVisit.scss';
import { VisitCalendar } from './components/VisitCalendar/VisitCalendar';
import { Doctor } from '../../common/interfaces/doctor.interface';
import { DoctorProperty } from '../../components/VisitProperty/VisitProperty';
import { TimeInput } from './components/TimeInput/TimeInput';
import { reservationDto } from '../../common/interfaces/reservationDto.interface';

export const DoctorVisit: React.FC = () => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const idDoctor = searchParams.get('id');
  const [idService, setIdService] = useState<number>();
  let today: Date = new Date();
  today = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    0,
    0,
    0,
    0
  );
  const [dateVisit, setDate] = useState<Date>(today);

  let doctor: Doctor;
  doctor = ctx.doctors.find((d) => d.id === +idDoctor);
  const services = ctx.services;
  let avatarImage = '';

  try {
    avatarImage = require('./../../assets/images/' + doctor?.avatar);
  } catch (e) {}
  useEffect(() => {
    if (!idDoctor || !doctor) {
      navigate('/');
    }
  }, [idDoctor, doctor, dateVisit, navigate]);
  return (
    <div className="doctor-visit">
      <div className="doctor-visit__container">
        <h1>Umów się na wizytę</h1>
        <h2>Dane lekarza</h2>
        <div className="doctor-visit__doctor-data">
          <div>
            <DoctorProperty name="Imię" value={doctor?.name}></DoctorProperty>
            <DoctorProperty
              name="Nazwisko"
              value={doctor?.lastName}
            ></DoctorProperty>
            <DoctorProperty
              name="Specjalizacja"
              value={doctor?.specialization}
            ></DoctorProperty>
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
          <select
            onChange={(event) => {
              setIdService(+event.target.value);
            }}
          >
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
            <VisitCalendar setDate={setDate} />
          </div>
        </div>
        <label>Godzina</label>
        <TimeInput time={dateVisit} setDate={setDate}></TimeInput>{' '}
        <div className="doctor-visit__buttons">
          <button
            className="doctor-visit__buttons__back"
            onClick={() => navigate('/')}
          >
            Powrót
          </button>
          <button
            className="doctor-visit__buttons__next"
            onClick={() => {
              if (idService && dateVisit !== today) {
                const locationState: reservationDto = {
                  idDoctor: +idDoctor,
                  idService: idService,
                  time: dateVisit,
                };
                navigate('/summary', { state: locationState });
              }
            }}
          >
            Dalej
          </button>
        </div>
      </div>
    </div>
  );
};
