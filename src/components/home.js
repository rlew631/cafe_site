import {Container, Row, Col } from 'reactstrap';

// stock photos
import book_coffee from '../assets/stock_photos/book_coffee.jpg';
import latte_art from '../assets/stock_photos/latte_art.jpg';
import neon_coffee from '../assets/stock_photos/neon_coffee.jpg';
import pastries from '../assets/stock_photos/pastries.jpg';


function Home() {
  return (
    <Container className="main">
      <Col lg={{size: 10, offset: 1}} className="statements">
        <Row>
          <Col lg="5" className="textAlign">
            <h2>What We Do</h2>
            <p className = "statement">We make coffee and food for the SOUUULLLLL</p>
          </Col>
          <Col lg="7">
            <p>
              <img src={book_coffee} alt='book and coffee on a table' className="pictures"/>
            </p>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col lg='5' className="textAlign">
            <h2>About The Team</h2>
            <p className = "statement">
              Blah blah lorem ipsum up in dis spot
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={latte_art} alt='latte art' className="pictures"/>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg='5' className="textAlign">
            <h2>Why Use Pressta</h2>
            <p className = "statement">
              Blah blah lorem ipsum up in dis spot
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={neon_coffee} alt='neon sign of a coffee cup' className="pictures"/>
            </p>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col lg='5' className="textAlign">
            <h2>Industries Served</h2>
            <p className = "statement">
              Blah blah lorem ipsum up in dis spot
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={pastries} alt='display case full of pastries' className="pictures"/>
            </p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Home;