import {createUseStyles} from 'react-jss';
import Header from './components/header';
import Home from './components/home'
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
        <body className={classes.body}>
          <Switch>
            <Route path="/" exact={true} component={Home} ></Route>
            {/* <Route path="/order" component={}></Route>
            <Route path="/checkout" component={}></Route>
            <Route path="/about_us" component={}></Route> */}
          </Switch>
        </body>
      </Router>
    </div>
  );
}

export default App;

