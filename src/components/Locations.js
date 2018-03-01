import React from 'react';
import airport from '../assets/images/airport.svg';
import city from '../assets/images/city.svg';
import country from '../assets/images/country.svg';
import unknown from '../assets/images/unknown.png';
import PropTypes from 'prop-types';

const Locations = ({locations, flightType, locationHandler}) => {


    function handleClick(e) {
        const name = e.target.dataset.name;
        const flightType = e.target.dataset.flighttype;
        locationHandler(name, flightType);
    }

    function addAvatar(type) {
        let avatar;
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
        <ul className={`locations-list ${(!locations || !locations.length) ? "" : "show-locations"}`}>
            {!locations ? "" : locations.map((location, index) => {
                return (<li key={index} onClick={(e) => handleClick(e)} data-name={location.code} data-flighttype={flightType}>
                    <img className="avatar" src={addAvatar(location.type)} alt={location.type} /> - {location.name}
                </li>);
            })}
        </ul>
    );
};

Locations.propTypes = {
    locations: PropTypes.array,
    flightType: PropTypes.string,
    handleClick: PropTypes.func,
    locationHandler: PropTypes.func,
}

export default Locations;