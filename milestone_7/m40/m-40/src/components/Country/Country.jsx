import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        if(visited){
            setVisited(false);
            handleVisitedCountries(country, true);
        }
        else{
            setVisited(true);
            handleVisitedCountries(country, false);
        }
        
        
    }

    return (
        <div className={`country-box ${visited && 'country-box-bg'}`}>
            <img className='flag' src={country.flags.png} alt="" srcset="" />
            <h3>{country.name.common}</h3>
            <p>is Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <button onClick={handleVisited} className={visited? 'visit-btn' : 'not-visit-btn'}>{visited? 'Visited' : 'Visit Now'}</button>
        </div>
    );
};

export default Country;