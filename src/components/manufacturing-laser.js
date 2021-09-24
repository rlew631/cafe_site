import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, /*CardSubtitle,*/
} from 'reactstrap';
import copy from '../copy.json';

import trotec from "../assets/Trotec.png";

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  materialFinishes: {
    textAlign: 'left'
  },
  main: {
    paddingTop: 90
  }
});

function ManufacturingLaser() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container>
        <Row justify="stretch"> {/* doesn't seem to work like flexbox stretch */}
          <Col lg="3" md="6">
            <Card>
              <CardImg top width="100%" src={trotec} alt="Trotec laser cutter" />
              <CardBody>
                <CardTitle tag="h3">Laser Cutting</CardTitle>
                <CardText>{copy.Manufacturing.Services.LaserCutting.Statement}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <h2>Materials</h2>
            Some materials listed can be engraved but not cut, contact us to find out more
            <ul className = {classes.materialFinishes}>
              {listItems(copy.Manufacturing.Services.LaserCutting.Materials)}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ManufacturingLaser;