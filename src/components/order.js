import React, { Component } from 'react';
import {
  // Card,
  // CardImg,
  // CardText,
  // CardBody,
  // CardTitle,
  // CardSubtitle,
  Container,
  Row,
  Col
} from 'reactstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// function makeCardsBootStrap(arr){ if(arr){
//     return( arr.map((d) => {
//       return(
//         <Col lg="3" md="6" className="cardCol">
//           <Card>
//             <CardBody>
//               <CardTitle tag="h3">{d.item_data.name}</CardTitle>
//               {/* The card images might have problems if there's multiple pics */}
//               <CardImg width="100%" src={d.item_data.ecom_image_uris}/>
//               <div>
//                 <CardText>
//                   {d.item_data.description}
//                 </CardText>
//               </div>
//               <div className="grow" />
//               <div className="priceBox">
//                 <b>Price:</b> ${(d.item_data.variations[0].item_variation_data.price_money.amount/100).toFixed(2)}
//               </div>
//             </CardBody>
//           </Card>
//         </Col>
//       );
//     })
//   )
// }};

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
              // alt="green iguana"
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
            <Button size="small" color="primary">
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
          {/* {makeCardsBootStrap(this.state.data)} */}
          {makeCardsMUI(this.state.data)}
        </Row>
      </Container>
    );
  }
}

export default Order;