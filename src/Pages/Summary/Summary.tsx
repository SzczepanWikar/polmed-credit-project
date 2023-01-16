import './Summary.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { DoctorProperty } from '../../components/VisitProperty/VisitProperty';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { reservationDto } from '../../common/interfaces/reservationDto.interface';

export const Summary: React.FC = (props: any) => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  const reservation: reservationDto = location.state;
  const doctor = ctx.doctors.find((d) => d.id === reservation.idDoctor);
  const service = ctx.services.find((s) => s.id === reservation.idService);

  let avatarImage = '';

  try {
    avatarImage = require('./../../assets/images/' + doctor?.avatar);
  } catch (e) {}
  useEffect(() => {
    if (!doctor) {
      navigate('/');
    }
  });

  return (
    <>
      <div className="SummaryPage">
        <div className="SummaryPage_container">
          <h1>Potwierdzenie rezerwacji</h1>
          <h2>Dane lekarza</h2>
          <div className="SummaryPage_info">
            <div>
              <DoctorProperty
                name="Lekarz"
                value={doctor?.name + ' ' + doctor?.lastName}
              ></DoctorProperty>
              <DoctorProperty
                name="Cel wizyty"
                value={service.name}
              ></DoctorProperty>
              <DoctorProperty
                name="Cena wizyty"
                value={service.price + ' zł'}
              ></DoctorProperty>
              <DoctorProperty
                name="Termin wizyty"
                value={reservation.time.toLocaleString('pl-PL', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              ></DoctorProperty>
            </div>
            <div className="SummaryPage_doctorImg">
              <img
                src={avatarImage}
                alt={`${doctor?.name} ${doctor?.lastName}`}
              />
            </div>
          </div>

          <div className="SummaryPage_buttons">
            <button
              className="SummaryPage_buttons_cancel"
              onClick={() => {
                alert('Twoja rezerwacja została anulowana');
                navigate('/');
              }}
            >
              Anuluj
            </button>
            <button
              className="SummaryPage_buttons_home"
              onClick={() => {
                alert('Twoja rezerwacja została zatwierdzona');
                navigate('/');
              }}
            >
              Zatwierdź
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
