import {createUseStyles} from 'react-jss';
import {Container, Row, Col } from 'reactstrap';

import book_coffee from '../assets/stock_photos/book_coffee.jpg';
import latte_art from '../assets/stock_photos/latte_art.jpg';
import neon_coffee from '../assets/stock_photos/neon_coffee.jpg';
import pastries from '../assets/stock_photos/pastries.jpg';


const useStyles = createUseStyles({
  statements: {
    textAlign: 'left'
  },
  main: {
    paddingTop: 90
  },
  pictures: {
    width: '100%'
  },
  textAlign: {
    paddingTop: '3em',
    paddingBottom: '1em'
  },
});

function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Col lg={{size: 10, offset: 1}} className={classes.statements}>
        <Row>
          <Col lg="5" className={classes.textAlign}>
            <h2>What We Do</h2>
            <p className = {classes.statement}>We make coffee and food for the SOUUULLLLL</p>
          </Col>
          <Col lg="7">
            <p>
              <img src={book_coffee} alt='book and coffee on a table' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col lg='5' className={classes.textAlign}>
            <h2>About The Team</h2>
            <p className = {classes.statement}>
              Blah blah lorem ipsum up in dis spot
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={latte_art} alt='latte art' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg='5' className={classes.textAlign}>
            <h2>Why Use Pressta</h2>
            <p className = {classes.statement}>
              Blah blah lorem ipsum up in dis spot
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={neon_coffee} alt='neon sign of a coffee cup' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col lg='5' className={classes.textAlign}>
            <h2>Industries Served</h2>
            <p className = {classes.statement}>
              Blah blah lorem ipsum up in dis spot
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={pastries} alt='display case full of pastries' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Home;