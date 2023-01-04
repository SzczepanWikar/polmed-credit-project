import './Summary.scss';
import { useNavigate } from 'react-router-dom';

export const Summary = () => {

  const navigate = useNavigate();

  return (

    <>
    <div className='SummaryPage'>
      <div className='SummaryPage_container'>
        <h1>Potwierdzenie rezerwacji</h1>
        <div className='SummaryPage_formation'>
          <form>
            <label>
              <h4>
                Doktor:
                <input type='text'name='name' value='Anna Kowalska' />
              </h4>
            </label>
            <label>
              <h4>
                Cel wizyty:
                <input type='text' value='Wizyta kontrolna'/>
              </h4>
            </label>
            <label>
              <h4>
                Cena wizyty:
                <input type='text' value='150zł'/>
              </h4>
            </label>
            <label>
              <h4>
                Termin wizyty:
                <input type='text' value='30.01.2023'/>
                </h4>
            </label>
          </form>
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
