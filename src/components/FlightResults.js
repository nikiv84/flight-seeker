import React from 'react';
import Flight from './Flight';

const FightResults = (props) => {
    const flights = props.flights;
    const itemsCountPerPage = props.itemsCountPerPage;
    const activePage = props.activePage;

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

export default FightResults;