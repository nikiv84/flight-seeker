import React, { Component } from 'react';
import { Col, Card, CardText, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

class Flight extends Component {
    render() {
        const { cityFrom, cityTo, dTime, aTime, flyDuration, price } = this.props.flightInfo;
        return (
            <Col xs="12" sm={{ size: 6, offset: 3 }}>
                <Card body>
                    <CardTitle>{cityFrom} &rarr; {cityTo}</CardTitle>
                    <CardText><i className="fas fa-plane"></i> Duration: <strong>{flyDuration}</strong></CardText>
                    <CardText>
                        Departure: <strong>{dTime}</strong><br />Arrival: <strong>{aTime}</strong>
                    </CardText>
                    <CardText>
                        Price: <strong>{price}&euro;</strong>
                    </CardText>
                </Card>
            </Col>
        );
    }
}

Flight.propTypes = {
    flightInfo: PropTypes.object
}

export default Flight;