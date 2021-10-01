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

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
            <Switch>
              <Route path="/" exact={true} component={Home} ></Route>
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