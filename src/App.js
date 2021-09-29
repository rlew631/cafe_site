import React, { Component } from 'react';
import Header from './components/header';
import Home from './components/home'
import Order from './components/order';
import Manufacturing from './components/manufacturing';
import Contact from './components/contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./styles.css";

class App extends Component {
  state = {
      data: null
    };
  
  componentDidMount() {
    this.callBackendAPI()
      // this one works with the string response
      // .then(res => this.setState({ data: res.express }))

      // this one works importing the square data
      .then(res => this.setState({ data: res }))

      //this one works logging the square data
      // .then(res => console.log(res))

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

  //main part of the app
  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <div>
            <Switch>
              <Route path="/" exact={true} component={Home} ></Route>
              <Route path="/order" component={Order}></Route>
              <Route path="/manufacturing" component={Manufacturing}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
            {/* <p className="App-intro">{this.state.data}</p> */}
            {/* <p className="App-intro">{JSON.stringify(this.state.data)}</p> */}
          </div>
        </Router>
      </div>
    );
  }
}
  
  export default App;

