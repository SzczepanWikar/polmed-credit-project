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
  const [isTimeSet, setIsTimeSet] = useState<boolean>(false);
  const [errorService, setErrorService] = useState<boolean>();
  const [errorDate, setErrorDate] = useState<boolean>();
  const [errorTime, setErrorTime] = useState<boolean>();

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
    if (errorDate && dateVisit.getTime() !== today.getTime()) {
      setErrorDate(false);
    }
    if (errorService && idService) {
      setErrorService(false);
    }
    if (errorTime && isTimeSet) {
      setErrorTime(false);
    }
  }, [
    idDoctor,
    doctor,
    dateVisit,
    navigate,
    idService,
    today,
    isTimeSet,
    errorDate,
    errorService,
    errorTime,
  ]);
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
        {errorService ? (
          <label className="doctor-visit__error">Wybierz cel wizyty</label>
        ) : (
          <></>
        )}
        <div className="doctor-visit__calendar">
          <label>Data wizyty</label>
          <div className="doctor-visit__calendar__container">
            <VisitCalendar setDate={setDate} setIsTimeSet={setIsTimeSet} />
          </div>
          {errorDate ? (
            <label className="doctor-visit__error">Wybierz datę wizyty</label>
          ) : (
            <></>
          )}
        </div>
        <label>Godzina</label>
        <TimeInput
          time={dateVisit}
          setDate={setDate}
          setIsTimeSet={setIsTimeSet}
        ></TimeInput>{' '}
        {errorTime ? (
          <label className="doctor-visit__error">Wybierz godzinę wizyty</label>
        ) : (
          <></>
        )}
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
              if (idService && dateVisit !== today && isTimeSet) {
                const locationState: reservationDto = {
                  idDoctor: +idDoctor,
                  idService: idService,
                  time: dateVisit,
                };
                navigate('/summary', { state: locationState });
              } else {
                if (!isTimeSet && dateVisit.getTime() !== today.getTime()) {
                  setErrorTime(true);
                }

                if (dateVisit.getTime() === today.getTime()) {
                  setErrorDate(true);
                }

                if (!idService) {
                  setErrorService(true);
                }
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
