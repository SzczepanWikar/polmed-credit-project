import Style from './Style.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import  people from  '../../assets/images/people.png' 
import  doctor from  '../../assets/images/doctor.png' 
export const Home = () => {

  const[style, setStyle] = useState("cont");
  
  
  const changeStyle = () => {
    if(style == 'cont')
    return setStyle("cont2");
    else if(style == 'cont2')
    return setStyle('cont');
  }
  return (
    
    <>
  <div className='wrapper'>
      <div className='image-keeper'>
        <img className='doctor-img' src={require('../../assets/images/doctors.jpg')}/>
      </div>
      <div className='headers'>
        <h1 >Wybierz swojego Lekarza</h1>
      </div>
      <div className='doctor-wrapper'>
        <div className='doctor-chooser'>
          <div className="drop-down">
        <button onClick={changeStyle} className='doctor'>
          Pediatry</button>
            <ul className={style}>
              <li className='text'>
                <img src={doctor}/>
                <Link to="/products"><button>Umów się</button></Link>
              </li>
              <li className='text'>
                <img src={doctor}/>
                <Link to="/products"><button>Umów się</button></Link>
              </li>
            </ul>
            </div>
            <div className="drop-down">
        <button onClick={changeStyle} className='doctor'>
         Home-Doctor</button>
            <ul className={style}>
              <li>
                <img src={doctor} />
                <Link to= '/products/'>
                    <button>Umów się</button></Link>
              </li>
              <li>
                <img src={doctor} />
                <Link to="/products"><button>Umów się</button></Link>
              </li>
            </ul>
          </div>
          
        </div>
        </div>
       </div>
       
    </>
  )
}
export default Home;