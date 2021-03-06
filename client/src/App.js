import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./styles.css";

// Importing the pages
import Header from './components/header';
import Home from './components/home'
import Order from './components/order';
import Cart from './components/Cart';
import Manufacturing from './components/manufacturing';
import Contact from './components/contact';

global.itemData = null;

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
            <Switch>
              <Route path="/" exact={true} component={Home} ></Route>
              {/* <Route path="/order" component={Order}></Route> */}
              <Route path="/order">
                <div className="main">
                  <Cart />
                  <Order />
                </div>
              </Route>
              <Route path="/manufacturing" component={Manufacturing}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
        </Router>
      </div>
    );
  }
}
  
  export default App;

