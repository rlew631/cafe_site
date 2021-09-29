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
      // console.log(d.item_data.variations.item_variation_data)
      return(
        <Col lg="3" md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h3">{d.item_data.name}</CardTitle>
              <CardText>
                {d.item_data.description}
                < br />
                {/* {d.item_data.variations.item_variation_data.price_money.amount} */}
              </CardText>
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
  
  componentDidMount() {
    this.callBackendAPI()
      // this one works importing the square data
      .then(res => this.setState({ data: res }))

      //this one works logging the square data
      // .then(res => console.log(res))

      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  // const classes = useStyles();
  //main part of the app
  render() {
    return (
      <div>
        <br /><br /><br /><br /><br />
        From the catalog API:
        <Container>
          <Row>
            {makeCards(this.state.data)}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Order;