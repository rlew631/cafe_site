import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, /*CardSubtitle,*/
} from 'reactstrap';
import copy from '../copy.json';

import stratysis from "../assets/Stratysis.png";

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

function ManufacturingPrinting() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container>
        <Row justify="stretch"> {/* doesn't seem to work like flexbox stretch */}
          <Col lg="3" md="6">
            <Card>
              <CardImg top width="100%" src={stratysis} alt="Stratysis SLA 3D Printer" />
              <CardBody>
                <CardTitle tag="h3">3D Printing</CardTitle>
                <CardText>{copy.Manufacturing.Services.Printing.Statement}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <h2>Materials</h2>
            <ul className = {classes.materialFinishes}>
              {listItems(copy.Manufacturing.Services.Printing.Materials)}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ManufacturingPrinting;