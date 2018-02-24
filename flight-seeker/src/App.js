import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { dataService } from './service/DataService';
import { dateFormatter } from './common/helpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightData: { flyFrom: "", flyTo: "", fDate: "" },
      flightResults: []
    }
  }

  fetchFlights = () => {
    const searchData = { ...this.state.flightData };
    searchData.fDate = dateFormatter(searchData.fDate);
    dataService.getFlights(searchData, (flightResults) => {
      this.setState({ flightResults });
    }, (error) => {
      console.log(error);
    })
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const flightData = { ...this.state.flightData };
    flightData[name] = value;
    this.setState({ flightData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
          <Row>
            <Col xs="12" sm={{ size: 4, offset: 4 }}>
              <p className="App-intro">
                <Input placeholder="From:" name="flyFrom" onChange={this.handleChange} />
                <Input placeholder="To:" name="flyTo" onChange={this.handleChange} />
                <Input placeholder="Date:" name="fDate" onChange={this.handleChange} type="date" />
                <Button color="primary" onClick={this.fetchFlights}>Search flights</Button>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm={{ size: 6, offset: 3 }}>
              {this.state.flightResults.map((flight, index) => {
                const { cityFrom, cityTo, dTime, aTime, flyDuration, price } = flight;
                return <p key={index}>From: {cityFrom}, to: {cityTo},
                        departure time: {dTime}, arrival time: {aTime},
                        travel duration: {flyDuration}, price: <strong>{price}&euro;</strong>
                </p>;
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
