import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleChange = () => {
    
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
                <Input placeholder="From:" onChange={this.handleChange} />
                <Input placeholder="To:" onChange={this.handleChange} />
                <Input placeholder="Date:" type="date" />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
