import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import '../assets/css/App.css';
import { dataService } from '../service/DataService';
import { dateFormatter } from '../common/helpers';
import FlightResults from '../components/FlightResults';
import Locations from '../components/Locations';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from "react-js-pagination";

const itemsCountPerPage = 5;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightData: { flyFrom: "", flyTo: "", fDate: "" },
      flightResults: [],
      flyFromResults: [],
      flyToResults: [],
      activePage: 1
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activePage !== this.state.activePage) {
      window.scrollTo(0, 0);
    }
  }


  fetchFlights = () => {
    const searchData = { ...this.state.flightData };
    searchData.fDate = dateFormatter(searchData.fDate);
    dataService.getFlights(searchData, (flightResults) => {
      this.setState({ flightResults, activePage: 1 });
    }, (error) => {
      console.log(error);
    });
  }

  fetchLocations = (name, searchString) => {
    dataService.getLocations(searchString, locationResults => {
      if (name === "flyFrom") {
        this.setState({
          flyFromResults: locationResults
        })
      } else if (name === "flyTo") {
        this.setState({
          flyToResults: locationResults
        })
      }
    }, (error) => {
      console.log(error);
    });
  }

  locationHandler = (location, flightType) => {
    const flightData = { ...this.state.flightData };
    flightData[flightType] = location;
    if (flightType === "flyFrom") {
      this.setState({ flightData, flyFromResults: null });
    } else if (flightType === "flyTo") {
      this.setState({ flightData, flyToResults: null });
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const flightData = { ...this.state.flightData };
    flightData[name] = value;
    this.setState({ flightData });
    if (name !== "fDate") {
      this.fetchLocations(name, value);
    }
  }

  hideList = () => {
    this.setState({ flyFromResults: null, flyToResults: null });
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  }

  render() {
    const numResults = this.state.flightResults.length;
    const activePage = this.state.activePage;

    return (
      <div className="App" onClick={this.hideList}>
        <Header />
        <div className="App-intro">
          <Container>
            <Row>
              <Col xs="12">
                <h5 className="text-left">Seek a flight:</h5>
              </Col>
              <Col xs="12" sm="4" lg="3">
                <Input placeholder="From:" name="flyFrom" onChange={this.handleChange} value={this.state.flightData.flyFrom} onFocus={this.hideList} aria-describedby="initInstr" aria-owns="results" aria-expanded="false" aria-autocomplete="both" aria-activedescendant=""/>
                {this.state.flyFromResults ? <Locations locations={this.state.flyFromResults} flightType="flyFrom" locationHandler={this.locationHandler} /> : ""}
              </Col>
              <Col xs="12" sm="4" lg="3">
                <Input placeholder="To:" name="flyTo" onChange={this.handleChange} value={this.state.flightData.flyTo} onClick={this.handleClick} onFocus={this.hideList} />
                {this.state.flyToResults ? <Locations locations={this.state.flyToResults} flightType="flyTo" locationHandler={this.locationHandler} /> : ""}
              </Col>
              <Col xs="12" sm="4" lg="3">
                <Input type="date" placeholder="Date:" name="fDate" onChange={this.handleChange} onFocus={this.hideList} />
              </Col>
              <Col xs="12" sm="4" lg="3" className="text-left">
                <Button color="info" onClick={this.fetchFlights}>Search flights</Button>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FlightResults flights={this.state.flightResults} activePage={activePage} itemsCountPerPage={itemsCountPerPage} />
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                {this.state.flightResults.length ?
                  this.state.flightResults.length > itemsCountPerPage ?
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={itemsCountPerPage}
                      totalItemsCount={numResults}
                      pageRangeDisplayed={6}
                      onChange={this.handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    /> : "" : ""}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
