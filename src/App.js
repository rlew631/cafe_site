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

function listItems(data){
  console.log(data);
  return(data.map((d) => <li>{d}</li>));
}

class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
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
      // console log to see what's up
      console.log(body)
      return body;
    };

    //main part of the app
    render() {
      // const classes = useStyles();
      return (
        <div className="App">
          <Router>
            <Header/>
            <div>
              <Switch>
                <Route path="/" exact={true} component={Home} ></Route>
                <Route path="/order" component={Order}></Route>
                <Route path="/manufacturing" component={Manufacturing}></Route>
                <Route path="/manufacturing-machining" component={ManufacturingMachining}></Route>
                <Route path="/manufacturing-printing" component={ManufacturingPrinting}></Route>
                <Route path="/manufacturing-laser" component={ManufacturingLaser}></Route>
                <Route path="/manufacturing-welding" component={ManufacturingWelding}></Route>
                <Route path="/contact" component={Contact}></Route>
              </Switch>
              <p className="App-intro">{this.state.data}</p>
              {/* <p className="App-intro">{JSON.stringify(this.state.data)}</p> */}
              {/* <p>{listItems([1,2,3])}</p> */}
              {/* <p>{listItems(this.state.data)}</p> */}
            </div>
          </Router>
        </div>
      );
    }
  }
  
  export default App;

