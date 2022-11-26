import Style from '../Pages/Style.scss';
import React from 'react';
import  people from  '../../assets/images/people.png' 
import  doctor from  '../../assets/images/doctor.png' 
import Dropdown from "./Dropdown.js";
export const Home = () => {


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
        <Dropdown name="Home-doctor" />
        
        <Dropdown name="Pediatrian"/>
        
        </div>
        </div>
  </div>
       
    </>
  )
}
export default Home;