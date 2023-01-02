import './Summary.scss';

export const Summary = () => {

  return (

    <>
    <div className='SummaryPage'>
      <div className='SummaryPage_container'>
        <h1>Potwierdzenie rezerwacji</h1>
        <form>
          <div>
            Doktor:
            Anna Kowalska
          </div>
          <div>
            Cel wizyty:
            Wizyta kontrolna
          </div>
          <div>
            Termin wizyty:
            16.01.2023 14:00
          </div>
        </form>
        <div className='SummaryPage_buttons'>
          
          <button className='SummaryPage_buttons_back'>
            Powrót
          </button>
          <button className='SummaryPage_buttons_home'>
            Powrót do strony głównej
          </button>
          <button className='SummaryPage_buttons_cancel'>
            Anuluj rezerwacje
          </button>
        </div>
      </div>
    </div>
    </>

  );
};
