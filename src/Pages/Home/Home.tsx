import  './Home.scss';
import React from 'react';
import  people from  '../../assets/images/people.png' 
import  doctor from  '../../assets/images/doctor.png' 
import Dropdown from './components/Dropdown/Dropdown';

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
        
        <Dropdown >
          Pediatra
        </Dropdown>
        
        <Dropdown >
          Lekarz rodzinny
        </Dropdown>
        
        
        </div>
  </div>
       
    </>
  )
}
export default Home;