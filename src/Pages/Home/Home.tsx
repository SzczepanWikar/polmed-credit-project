import  './Home.scss';
import React, { useContext } from 'react';
import  people from  '../../assets/images/people.png' 
import  doctor from  '../../assets/images/doctor.png' 
import Dropdown from './components/Dropdown/Dropdown';
import { GlobalContext } from '../../Contexts/GlobalContext';
import  sample from  '../../assets/images/sample.jpg'
import { Icon } from '@iconify/react';

export const Home = () => {
  const ctx = useContext(GlobalContext)

  return (
    
    <>
  <div className='wrapper'>
    <div className='content-keeper'>
      {/* <img className='doctor-img' src={require('../../assets/images/doctors.jpg')}/>
       */}
       <p className="text-keeper">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p><img className="image" src={sample} />
       
    </div>
    <div className='headers'>
      <h1 >Wybierz swojego lekarza</h1>
    </div>
    <div className='doctors-wrapper'>
        <Dropdown ikonka="ic:baseline-child-care">
          Pediatra
        </Dropdown >
        
        <Dropdown ikonka="mdi:human-male-female-child" >
         Lekarz rodzinny
        </Dropdown>
        

    </div>
  </div>
       
    </>
  )
}
export default Home;