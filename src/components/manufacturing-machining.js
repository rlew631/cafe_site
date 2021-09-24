import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, /*CardSubtitle,*/
} from 'reactstrap';
import copy from '../copy.json';

import haas from "../assets/Haas.png";

import aluminum from "../assets/Aluminum.svg";
import steel from "../assets/Steel.svg"
import brass from "../assets/Brass.svg";
import plastic from "../assets/Plastic.svg"

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  materialFinishes: {
    textAlign: 'left'
  },
  materialIcon: {
    height:"1em", //still needs to be raised slightly to line up with heading but it's getting better
    minWidth: 0
  },
  aluminum: {
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  cnc: {
    flexWrap:"wrap"
  },
  main: {
    paddingTop: 90
  }
});

function ManufacturingMachining() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container>
        <Row justify="stretch"> {/* doesn't seem to work like flexbox stretch */}
          <Col lg="3" md="6">
            <Card>
              <CardImg top width="100%" src={haas} alt="Haas VF2SSYT CNC Machine" />
              <CardBody>
                <CardTitle tag="h3">Machining</CardTitle>
                <CardText>{copy.Manufacturing.Services.Machining.Statement}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col lg="6" md="12">
                <h2>Materials</h2>
                Contact us for questions regarding titanium and other exotic metals.
                <Row>
                  <Col md="6">
                    <h3><img src={steel} alt="" className={classes.materialIcon}></img> Steel</h3>
                    <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Steel)}</ul>
                  </Col>
                  <Col md="6">
                    <h3 className={classes.Aluminum}>
                      <img src={aluminum} alt="" className={classes.materialIcon}></img> Aluminum
                    </h3>
                    <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Aluminum)}</ul>
                  </Col>
                  <Col md="6">
                    <h3><img src={brass} alt="" className={classes.materialIcon}></img> Brass and Bronze</h3>
                    <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.BrassBronze)}</ul>
                  </Col>
                  <Col md="6">
                    <h3><img src={plastic} alt="" className={classes.materialIcon}></img> Plastic</h3>
                    <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Plastic)}</ul>
                  </Col>
                </Row>
              </Col>
              <Col lg="6" md="12">
                <h2>Finishes</h2>
                <Row justify="center">
                  <Col lg={{size: 4, offset: 2}} md="6">
                    <h3>Anodized</h3>
                    <ul className = {classes.materialFinishes}>
                      {listItems(copy.Manufacturing.Services.Machining.Finishes.Anodized)}
                    </ul>
                  </Col>
                  <Col lg="4" md="6">
                    <h3>Other</h3>
                    <ul className = {classes.materialFinishes}>
                      {listItems(copy.Manufacturing.Services.Machining.Finishes.Other)}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ManufacturingMachining;