import React, { useState } from 'react'
import   './Dropdown.scss';
import { Link } from 'react-router-dom';
import  people from  '../../../../assets/images/people.png' 
import  doctor from  '../../../../assets/images/doctor.png'

interface Props {
  children?: React.ReactNode;
}
 const Dropdown: React.FC<Props>= ({children}) => {

  const[state, setState] = useState(false);
  const showDropdown=()=>{
    setState(true);
  }
  const hideDropdown=()=>{
    setState(false);
    
  }

  return (
    <>
       <div className="dropdown">
          <div className="dropdown-button" onClick={state ? hideDropdown : showDropdown} >
           {children}        
          </div>
    </div>
    
    {state? (<ul className="dropdown-list" onClick={showDropdown} >
              <div>
                <li>
                  <img className="doctor-picture" src={doctor} />
                  <span className="name">Lek. Lorem Ipsum</span>
                  <span className="specialization">Pediatra</span>
                  <Link to= '/products/'><button>Umów się</button></Link>
                </li>
                <li>
                  <img className="doctor-picture" src={doctor} />
                  <span className="name">Lek. Lorem Ipsum</span>
                  <span className="specialization">Pediatra</span>
                  <Link to="/products"><button className="button">Umów się</button></Link>
                </li>
              </div>
            </ul>): null}
        
    </>
  )
}
export default Dropdown;
