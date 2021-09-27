import {createUseStyles} from 'react-jss';
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

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <Header/>
        <div className={classes.body}>
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
        </div>
      </Router>
    </div>
  );
}

export default App;

