import Style from './Style.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import people from '../../assets/images/people.png';

export const Home = () => {
  const [style, setStyle] = useState('cont');

  const changeStyle = () => {
    if (style == 'cont') return setStyle('cont2');
    else if (style == 'cont2') return setStyle('cont');
  };
  console.log('XD');
  return (
    <>
      <div className="wrapper">
        <div className="image-keeper">
          <img
            className="doctor-img"
            src={require('../../assets/images/doctors.jpg')}
          />
        </div>
        <div className="headers">
          <h1>Wybierz swojego Lekarza</h1>
        </div>
        <ul className="doctor-chooser">
          <li className="pediatry">
            <button onClick={changeStyle}>Pediatry</button>
            <ul className={style}>
              <li className="text">
                <img src={people} />
                Lek. Lorem Ipsum
              </li>
              <li className="text">
                <img src={people} />
                Lek. Lorem Ipsum
              </li>
            </ul>
          </li>
          <li className="home-doctor">
            <button onClick={changeStyle}>Home-Doctor</button>
            <ul className={style}>
              <li>Lek. Lorem Ipsum</li>
              <li>Lek. Lorem Ipsum</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Home;
