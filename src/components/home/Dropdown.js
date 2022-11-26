import React, { useState } from 'react'
import   './Dropdown.scss';
import Style from '../Pages/Style.scss';
import { Link } from 'react-router-dom';
import  people from  '../../assets/images/people.png' 
import  doctor from  '../../assets/images/doctor.png'
function Dropdown() {
  const[state, setState] = useState(false);
  const showDropdown=()=>{
    setState(true);
  }
  const hideDropdown=()=>{
    setState(false);
    
  }

  return (
    <div className="dropdown">
        <div className="dropdown-button" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
          Pediatrian
            {state? (<ul className="dropdown-list" onMouseEnter={showDropdown}>
              <div>
                <li>
                  <img className="doctor-picture" src={doctor} />
                  <span>Lek. Lorem Ipsum</span>
                  <span>Pediatra</span>
                  <Link to= '/products/'>
                    <button>Umów się</button></Link>
                </li>
                <li>
                  <img className="doctor-picture" src={doctor} />
                  <span>Lek. Lorem Ipsum</span>
                  <span>Pediatra</span>
                  <Link to="/products"><button>Umów się</button></Link>
                </li>
              </div>
            </ul>): null}
            
        </div>
    </div>
  )
}

export default Dropdown