import { Component,
  // createContext,
  // useContext
} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import "./styles.css";

// Importing the pages
import Header from './components/header';
import Order from './components/order';
import Cart from './components/Cart';


// export const MyContext = createContext([]);

class App extends Component {

  //main part of the app
  render() {
    return (
      <div>
        <Header/>
        <Cart/>
        <Order/>
      </div>
    );
  }
}
  
  export default App;

