import './Summary.scss';

export const Summary = () => {

  return (

    <>
    <div className='SummaryPage'>
      <div className='SummaryPage_container'>
        <h1>Potwierdzenie rezerwacji</h1>
        <div>
          Doktor: 
        </div>
        <div>
          Cel wizyty:
        </div>
        <div>
          Termin wizyty:
        </div>
        <div className='SummaryPage_buttons'>
          <button className='SummaryPage_buttons_home'>
            Powrót do strony głównej
          </button>
          <button className='SummaryPage_buttons_cancel'>
            Anuluj
          </button>
        </div>
      </div>
    </div>
    </>

  );
};
