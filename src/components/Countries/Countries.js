import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';


const textCenter = {
    textAlign: "center",
    color: 'slateblue',
};

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        const loadData = async() => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data);
        };
        loadData();
    }, []);
  
  return (
    <div className='container'>
      <h3 style={textCenter}>Total countries: {countries.length}</h3>
      <div className='coutries'>
        {
          countries.map(country => {
            return <Country country={country} key={country.cca3}></Country>
          })
        };
      </div>
    </div>
  );
};

export default Countries;