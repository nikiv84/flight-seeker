import React from 'react';

import airport from '../assets/images/airport.svg';
import city from '../assets/images/city.svg';
import country from '../assets/images/country.svg';
import unknown from '../assets/images/unknown.png';

const Locations = (props) => {
    const locations = props.locations;
    const flightType = props.flightType;

    function handleClick(e) {
        const name = e.target.dataset.name;
        const flightType = e.target.dataset.flighttype;
        props.locationHandler(name, flightType);
    }

    function avatar(type) {
        let avatar = "";
        switch (type) {
            case "airport":
                avatar = airport;
                break;
            case "city":
                avatar = city;
                break;
            case "country":
                avatar = country;
                break;
            default:
                avatar = unknown;
        }
        return avatar;
    }

    return (
        <ul className="locations-list">
            {locations.map((location, index) => {
                return <li key={index} onClick={handleClick} data-name={location.code} data-flighttype={flightType}><img className="avatar" src={avatar(location.type)} alt={location.type} /> - {location.name}</li>
            })}
        </ul>
    );
};

export default Locations;