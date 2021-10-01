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
  return( arr.map((d) => {
    return(
      <Col lg="3" md="6" className="cardCol">
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={d.item_data.ecom_image_uris}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {d.item_data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {d.item_data.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className="price">
              <b>Price:</b> ${(d.item_data.variations[0].item_variation_data.price_money.amount/100).toFixed(2)}
            </div>
            <Button size="small" color="primary"
              // onClick={() => handleAddToCart(item)}
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

  componentDidMount() {
    this.callBackendAPI()
      // import and pass the square data
      .then(res => {
        this.setState({ data: res })
        // global.itemData = res // this can be accessed across files
        global.itemData = res.map((d) => {
          return {
            'name': d.item_data.name,
            'description': d.item_data.description,
            //image returns an Array with the urls or undefined if no images
            'image': d.item_data.ecom_image_uris,
            'price': d.item_data.variations[0].item_variation_data.price_money.amount/100,
            'quantity': 0
          }
        })
      })
      // log the square data
      // .then(res => console.log(res))

      .catch(err => console.log(err));
  }
  // main part of page
  render() {
    return (
      <Container>
        <Row>
          {makeCardsMUI(this.state.data)}
          {/* {makeCardsMUI(global.itemData)} */}
        </Row>
      </Container>
    );
  }
}

export default Order;