import {createUseStyles} from 'react-jss';
import Header from './components/header';
import Home from './components/home'
import Home1 from './components/home1'
import Home2 from './components/home2'
import Home3 from './components/home3'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = createUseStyles({
  // body: {
  //   textAlign: 'center'
  // }
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
            <Route path="/order" component={Home1}></Route>
            <Route path="/checkout" component={Home2}></Route>
            <Route path="/about_us" component={Home3}></Route>
          </Switch>
        </body>
      </Router>
    </div>
  );
}

export default App;

