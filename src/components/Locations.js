import React from 'react';

const Locations = (props) => {
    const locations = props.locations;
    const flightType = props.flightType;
    
    function handleClick(e) {
        const name = e.target.dataset.name;
        const flightType = e.target.dataset.flighttype;
        props.locationHandler(name, flightType);
    }

    return (
        <ul className="locations-list">
            {locations.map((location, index) => {
                return <li key={index} onClick={handleClick} data-name={location.code} data-flighttype={flightType}>{location.name}</li>
            })}
        </ul>
    );
};

export default Locations;