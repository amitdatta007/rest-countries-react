import React from 'react';
import './country.css'

const Country = ({country}) => {
    const {name, flags, capital, region, population} = country;
    return (
        <div className='country'>
          <img src={flags.png} alt="" />
          <div className="country-info">
            <h3>Name: {name.common}</h3>
            <h4>Capital: {capital ? capital[0]: 'Data not found'}</h4>
            <h4>Region: {region}</h4>
            <h4>Population: {population}</h4>
          </div>
        </div>
    );
};

export default Country;