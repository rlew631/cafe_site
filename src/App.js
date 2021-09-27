import React, { Component } from 'react';
import {createUseStyles} from 'react-jss';
import logo from './logo.svg';
import Header from './components/header';
import Home from './components/home'
import Order from './components/order';
import Manufacturing from './components/manufacturing';
import ManufacturingMachining from './components/manufacturing-machining';
import ManufacturingPrinting from './components/manufacturing-printing';
import ManufacturingLaser from './components/manufacturing-laser';
import ManufacturingWelding from './components/manufacturing-welding';
import Contact from './components/contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = createUseStyles({
  body: {
    textAlign: 'center'
  }
});

class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">{this.state.data}</p>
        </div>
      );
    }
  }
  
  export default App;

