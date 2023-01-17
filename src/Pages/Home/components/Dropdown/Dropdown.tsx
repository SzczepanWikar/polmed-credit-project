import React, { useState, useContext, useEffect } from 'react'
import   './Dropdown.scss';
import { Link } from 'react-router-dom';
import { Specialization } from '../../../../common/enums/specialization.enum';
/*Potrzeba zmienic rozmiar obrazkow */
//  import {anna, antoni, jan, zofia } from '../../../../assets/images/export_all.jsx';
import doctor from '../../../../assets/images/doctor.png'
import { Doctor } from '../../../../common/interfaces/doctor.interface';
import  parents from  '../../../../assets/icons/parents.svg'
import  child from  '../../../../assets/icons/child.svg'
import { Icon } from '@iconify/react';
import { GlobalContext } from '../../../../Contexts/GlobalContext';
interface Props {
  children?: React.ReactNode;
  ikonka?: any;
}
 const Dropdown: React.FC<Props>= ({children, ikonka}) => {

  const ctx = useContext(GlobalContext);

  const[state, setState] = useState(false);
  const showDropdown=()=>{
    setState(true);
  }
  const hideDropdown=()=>{
    setState(false);
    
  }
  // let array = doctors;
  // console.log(doctors.id)

// function onClickChangeId(doctor: getDoctor) {
  
//   console.log(doctor.doctors);
// }


                  /*doctors.filter(obj => obj.id === 3)*/
  return (
    <div>
       <div className="dropdown">
          <div className="dropdown-button" onClick={state ? hideDropdown : showDropdown} >
          <Icon icon= {ikonka} color="white" width="40" height="40"/>
            <span>{children}</span>
            
          </div> 
        </div>
    
        {state? (<ul className="dropdown-list" onClick={showDropdown} >     
              <div>
                { ctx.doctors.map(obj =>  obj.specialization === children  ? 
                
                <div key={obj.id}>
                  
                  <li >
                  <img className="doctor-picture" src={require(`../../../../assets/images/`+ obj.avatar )} />
                  <span className="name">Lek. {obj.name + " " + obj.lastName}</span>
                  <span className="specialization">{obj.specialization}</span>
                  <Link to= {`/doctor-visit?id=${obj.id}`}><button>Umów się</button></Link>
                </li>
                </div>
                  : null)}
              {/* arr.map(element => element > 5? element = 9 : element) */}
             
 
              </div>
            </ul>): null}
        
    </div>
  )
}
export default Dropdown;
