import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';
import { Icon } from '@iconify/react';
import { GlobalContext } from '../../../../Contexts/GlobalContext';
interface Props {
  children?: React.ReactNode;
  ikonka?: any;
}
const Dropdown: React.FC<Props> = ({ children, ikonka }) => {
  const ctx = useContext(GlobalContext);

  const [state, setState] = useState(false);
  const showDropdown = () => {
    setState(true);
  };
  const hideDropdown = () => {
    setState(false);
  };

  return (
    <div>
      <div className="dropdown">
        <div
          className="dropdown-button"
          onClick={state ? hideDropdown : showDropdown}
        >
          <Icon icon={ikonka} color="white" width="40" height="40" />
          <span>{children}</span>
        </div>
      </div>

      {state ? (
        <ul className="dropdown-list" onClick={showDropdown}>
          <div>
            {ctx.doctors.map((obj) =>
              obj.specialization === children ? (
                <div key={obj.id}>
                  <p>Dostępny w tym tygodniu</p>
                  <li>
                  
                  <img  className="doctor-picture" src={require(`../../../../assets/images/`+ obj.avatar )} />
                  <span className="name">Lek. {obj.name + " " + obj.lastName}</span>
                  <span className="specialization">{obj.specialization} </span>
                  <Link to= {`/doctor-visit?id=${obj.id}`}><button>Umów się</button></Link>
                </li>
                
                </div>
              ) : null
            )}
          </div>
        </ul>
      ) : null}
    </div>
  );
};
export default Dropdown;
