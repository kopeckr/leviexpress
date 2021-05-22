import React, { useState } from 'react';
import './style.css';
import mapImage from './img/map.svg';

const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');

  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(fromCity);
    console.log(toCity);
    console.log(date);

    event.preventDefault();
  };

  return (
    <>
      <div className="journey-picker container">
        <h2 className="journey-picker__head">Kam chcete jet?</h2>
        <div className="journey-picker__body">
          <form className="journey-picker__form">
            <label>
              <div className="journey-picker__label">Odkud:</div>
              <select onChange={handleFromCityChange}>
                <option value="">Vyberte</option>
                <option value="Mesto1">Město 1</option>
                <option value="Mesto2">Město 2</option>
                <option value="Mesto3">Město 3</option>
                <option value="Mesto4">Město 4</option>
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Kam:</div>
              <select onChange={handleToCityChange}>
                <option value="">Vyberte</option>
                <option value="Mesto1">Město 1</option>
                <option value="Mesto2">Město 2</option>
                <option value="Mesto3">Město 3</option>
                <option value="Mesto4">Město 4</option>
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Datum:</div>
              <select onChange={handleDateChange}>
                <option value="">Vyberte</option>
                <option>20.05.2021</option>
                <option>21.05.2021</option>
                <option>22.05.2021</option>
                <option>23.05.2021</option>
              </select>
            </label>
            <div className="journey-picker__controls">
              <button onClick={handleSubmit} className="btn" type="submit">
                Vyhledat spoj
              </button>
            </div>
          </form>
          <img className="journey-picker__map" src={mapImage} />
        </div>
      </div>

      <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
          <div className="seat-row">
            <button className="seat" type="button">
              <svg className="seat__in" viewBox="0 0 100 100">
                <rect
                  fill="#69bffc"
                  width="75"
                  height="70"
                  x="20"
                  y="15"
                  ry="10"
                  rx="10"
                ></rect>
                <path
                  fill="#666"
                  d="m 22.888567,10.000319 a 3.2175668,3.2771011 0 0 0 -2.887349,1.753582 4.8263502,4.9156518 0 0 0 -1.24731,1.436783 c -2.816103,4.766542 -5.009942,9.611367 -6.654421,14.518286 a 8.0439172,8.192753 0 0 0 -4.5336774,5.011154 c -3.4210738,10.453104 -3.4210899,24.106617 0,34.559721 A 8.0439172,8.192753 0 0 0 12.580192,72.5246 c 1.56453,4.664487 3.581872,9.355123 6.054324,14.067091 a 4.8263502,4.9156518 0 0 0 1.354139,1.641598 3.2175668,3.2771011 0 0 0 2.899912,1.766377 H 70.96502 a 3.2175668,3.2771011 0 1 0 0,-6.553547 H 27.664166 A 4.8263502,4.9156518 0 0 0 27.145771,81.958136 C 24.934783,77.744451 23.135668,73.643323 21.722943,69.625425 a 8.0439172,8.192753 0 0 0 1.102791,-7.526339 c -1.386294,-4.235836 -1.386294,-19.959123 0,-24.195008 a 8.0439172,8.192753 0 0 0 -1.426397,-7.881525 c 1.430033,-3.917252 3.299542,-7.828917 5.623889,-11.76311 a 4.8263502,4.9156518 0 0 0 0.653503,-1.705577 H 70.96502 a 3.2175668,3.2771011 0 1 0 0,-6.553547 z"
                ></path>
                <text className="seat__number" x="35" y="62.484478">
                  33
                </text>
              </svg>
            </button>
          </div>
        </div>
        <button onClick={handleSubmit} className="btn" type="button">
          Rezervovat
        </button>
      </div>
    </>
  );
};

export default JourneyPicker;
