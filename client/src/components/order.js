import { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function makeCardsMUI(arr){ if(arr){
    // return( arr.map((item) => {
    return( global.itemData.map((item) => {
      return(
        <Col lg="3" md="6" className="cardCol">
          <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div className="price">
                <b>Price:</b> ${(item.price).toFixed(2)}
              </div>
              <Button size="small" color="primary"
                // onClick={() => handleAddToCart(item)}
                onClick={() => item.quantity ++}
              >
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Col>
      );
    })
    )

}};

// global.itemData = null;

class Order extends Component {
  state = {
      data: null
    };
  
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend_catalog_items');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body)
    return body;
  };

  componentDidMount = async () => {
    this.callBackendAPI()
    // import and pass the square data
    .then(res => {
      this.setState({ data: res })
      // don't overwrite if already loaded...
      if (global.itemData == null) {
        global.itemData = res // this can be accessed across files
      }
    })
    .catch(err => console.log(err));
  }
  // main part of page
  render() {
    return (
      <Container>
        <Row>
          {/* {makeCardsMUI(this.state.data)} */}
          {/* {makeCardsMUI(global.itemData)} */}
          {makeCardsMUI(this.state.data)}
        </Row>
      </Container>
    );
  }
}

export default Order;