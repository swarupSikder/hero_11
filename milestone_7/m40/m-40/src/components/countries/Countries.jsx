import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ promise }) => {
    const countries = use(promise);
    const [visitedCountries, setVisitedCountries] = useState([]);
    console.log(visitedCountries);

    const handleVisitedCountries = (country, performDelete=false) => {
        if(performDelete){
            const newVisitedCountries = [...visitedCountries.filter(c => c!=country)]
            setVisitedCountries(newVisitedCountries);
        }
        else{
            const newVisitedCountries = [...visitedCountries, country]
            setVisitedCountries(newVisitedCountries);
        }
    }

    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h4>Travelled Countries: {visitedCountries.length}</h4>

            <div className='country-container'>
                {
                    countries.map(country => <Country 
                        key={country.name.common} 
                        handleVisitedCountries = {handleVisitedCountries} 
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;