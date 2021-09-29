import React, { Component } from 'react';
import {
  Card,
  // CardImg,
  CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  Container,
  Row,
  Col
} from 'reactstrap';

function makeCards(arr){ if(arr){
    return( arr.map((d) => {
      return(
        <Col lg="3" md="6" className="cardCol">
          <Card>
            <CardBody>
              <CardTitle tag="h3">{d.item_data.name}</CardTitle>
              <div>
                <CardText>
                  {d.item_data.description}
                </CardText>
              </div>
              <div className="grow" />
              <div className="priceBox">
                <b>Price:</b> {d.item_data.variations[0].item_variation_data.price_money.amount}
              </div>
            </CardBody>
          </Card>
        </Col>
      );
    })
  )
}};

class Order extends Component {
  state = {
      data: null
    };
  
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    // console.log(body)
    return body;
  };

  componentDidMount() {
    this.callBackendAPI()
      // import and pass the square data
      .then(res => this.setState({ data: res }))
      // log the square data
      // .then(res => console.log(res))

      .catch(err => console.log(err));
  }
  // main part of page
  render() {
    return (
      <Container className="main">
        <Row>
          {makeCards(this.state.data)}
        </Row>
      </Container>
    );
  }
}

export default Order;