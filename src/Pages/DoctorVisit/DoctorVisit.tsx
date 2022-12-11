import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GlobalContext, GlobalData } from '../../Contexts/GlobalContext';
import { InputWrapper } from './components/Input/InputWrapper';
import './DoctorVisit.scss';
import Datetime from 'react-datetime';

export const DoctorVisit: React.FC = () => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const idDoctor = searchParams.get('id');

  if (!idDoctor) {
    navigate('');
    return <></>;
  }
  const doctor = ctx.doctors.find((d) => d.id === +idDoctor);
  if (!doctor) {
    navigate('');
    return <></>;
  }

  const services = ctx.services;
  const { name, lastName, specialization, avatar } = doctor;
  return (
    <div className="doctor-visit">
      <div className="doctor-visit__container">
        <h1>Umów się na wizytę</h1>
        <form>
          <h2>Dane lekarza</h2>
          <InputWrapper
            name="Imię"
            readonly={true}
            disabled={true}
            value={name}
          ></InputWrapper>
          <InputWrapper
            name="Nazwisko"
            readonly={true}
            disabled={true}
            value={lastName}
          ></InputWrapper>
          <InputWrapper
            name="Specjalizacja"
            readonly={true}
            disabled={true}
            value={specialization}
          ></InputWrapper>
          <h2>Szczegóły Wizyty</h2>
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
          {/* <InputWrapper
            name="Specjalizacja"
            type="datetime-local"
          ></InputWrapper> */}
          {/* <Datetime renderDay={} /> */}
        </form>
      </div>
    </div>
  );
};
