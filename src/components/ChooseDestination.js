import React from 'react';
import { Input } from 'reactstrap';
import Locations from './Locations';
import PropTypes from 'prop-types';

const ChooseDestination = ({ flightData, flyResults, handleChange, locationHandler, flightType }) => {
    return (
        <div>
            <Input placeholder="From:" name={flightType} onChange={(e) => handleChange(e)} value={flightData} />
            <Locations locations={flyResults} flightType={flightType} locationHandler={(name, flightType) => locationHandler(name, flightType)} />
        </div>
    );
};

ChooseDestination.propTypes = {
    flightData: PropTypes.string,
    flyResults: PropTypes.array,
    handleChange: PropTypes.func,
    locationHandler: PropTypes.func,
    flightType: PropTypes.string
}

export default ChooseDestination;