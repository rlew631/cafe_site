import {createUseStyles} from 'react-jss';
import {Container, Row, Col } from 'reactstrap';
import copy from '../copy.json';
import adapter from '../assets/oil_adapter.jpg';
import flange from '../assets/AluminumFlange.jpg';
import plug from '../assets/BrassPlug.jpg';
import cams from '../assets/AluminumCams.png'
import clasps from '../assets/StainlessClasps.jpg'

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
            <p className = {classes.statement}>{copy.Home.WhatWeDoStatement}</p>
          </Col>
          <Col lg="7">
            <p>
              <img src={flange} alt='thread milled aluminum flange' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col lg='5' className={classes.textAlign}>
            <h2>About The Team</h2>
            <p className = {classes.statement}>
              {copy.Home.AboutUsStatement}
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={plug} alt='brass plug' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg='5' className={classes.textAlign}>
            <h2>Why Use Pressta</h2>
            <p className = {classes.statement}>
              {copy.Home.WhyUsePresstaStatement} 
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={adapter} alt='aluminum adapter fitting' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col lg='5' className={classes.textAlign}>
            <h2>Industries Served</h2>
            <p className = {classes.statement}>
              {copy.Home.IndustriesStatement}
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={cams} alt='small aluminum camshafts' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg='5' className={classes.textAlign}>
            <h1>Classifications and Certifications</h1>
            <p className = {classes.statement}>
              {copy.Home.ClassificationsCertifications}
              <br /><br />
              We are registered on SAM.gov as Fresh Press LLC and DUNS / CAGE codes are 118160742 and 92SM7 respecively.
              <br /><br />
              Pressta has been in business since 2017.
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={clasps} alt='small stainless clasps' className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Home;