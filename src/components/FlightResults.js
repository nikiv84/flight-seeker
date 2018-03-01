import React from 'react';
import Flight from './Flight';
import PropTypes from 'prop-types';

const FlightResults = ({ flights, itemsCountPerPage, activePage }) => {
    return (
        <div>
            {flights
                .filter((element, index) => {
                    return index >= ((activePage - 1) * itemsCountPerPage) && index < activePage * itemsCountPerPage;
                })
                .map((flight, index) => {
                    return <Flight flightInfo={flight} key={index} />
                })}
        </div>
    );
};

FlightResults.propTypes = {
    flights: PropTypes.array,
    itemsCountPerPage: PropTypes.number,
    activePage: PropTypes.number
}

export default FlightResults;