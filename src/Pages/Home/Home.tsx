import sample from '../../assets/images/sample.jpg';
import Dropdown from './components/Dropdown/Dropdown';
import './Home.scss';

export const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="content-keeper">
          <div className="text-keeper">
            <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>
              Centrum Medyczne POLMED
            </h1>
            Nasza klinika zapewnia pacjentowi obszerny pakiet obsługi medycznej,
            w ramach którego może on skorzystać zarówno z wielu płatnych, jak i
            niepłatnych świadczeń. Staramy się zapewnić pomoc na najwyższym
            poziomie. Równocześnie kładziemy nacisk na dobrą komunikację z
            pacjentem.
          </div>
          <img className="image" src={sample} alt="" />
        </div>
        <div className="headers">
          <h1>Wybierz swojego lekarza</h1>
        </div>
        <div className="doctors-wrapper">
          <Dropdown ikonka="ic:baseline-child-care">Pediatra</Dropdown>

          <Dropdown ikonka="mdi:human-male-female-child">
            Lekarz rodzinny
          </Dropdown>
        </div>
      </div>
    </>
  );
};
export default Home;
