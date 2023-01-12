import './Summary.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DoctorProperty } from '../../components/VisitProperty/VisitProperty';
import { Doctor } from '../../common/interfaces/doctor.interface';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { reservationDto } from '../../common/interfaces/reservationDto.interface';


export const Summary: React.FC = () => {

  const ctx = useContext(GlobalContext);

  const [searchParams] = useSearchParams();
  const idDoctor = searchParams.get('id');
  

  const navigate = useNavigate();

  let doctor: Doctor;
  doctor = ctx.doctors.find((d) => d.id === +idDoctor);
  const services = ctx.services;
  let avatarImage = '';


  return (

    <>
    <div className='SummaryPage'>
      <div className='SummaryPage_container'>
        <h1>Potwierdzenie rezerwacji</h1>
        <div className='SummaryPage_info'>
          <div>
            <DoctorProperty name="Lekarz" value={doctor?.name+' '+doctor?.lastName}></DoctorProperty>
            <DoctorProperty name="Cel wizyty" value={doctor?.id}></DoctorProperty>
          </div>
            
             
            
              {/* <h4>
                Cena wizyty:
              </h4>
              <h4>
                Termin wizyty:
                </h4> */}
            
          
        </div>
        <div className='SummaryPage_doctorimg'>
          <img 
          src={avatarImage}
          alt={`${doctor?.name} ${doctor?.lastName}`} />
        </div>

        <div className='SummaryPage_buttons'>
          <button 
            className='SummaryPage_buttons_cancel'
            onClick={() => {
              navigate('/');
            }}
          >
            Anuluj
          </button>
          <button 
            className='SummaryPage_buttons_home'
            onClick={() => {
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
