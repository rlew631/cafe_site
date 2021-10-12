import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Badge,
  Button,
  ButtonGroup,
  CardActionArea,
  CardActions,
  Drawer,
  Box,
  Divider,
} from '@mui/material';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

export function getSubTotal(arr) {
  if(arr){
    var subtotal = 0
    for (var i = 0; i < arr.length; i++) {
      var lineItem = arr[i].quantity * arr[i].price
      subtotal = subtotal + lineItem; }
  }
  return subtotal
}

export function getCartCount(arr) {
  if(arr){
    var subtotal = 0
    for (var i = 0; i < arr.length; i++) {
      subtotal = subtotal + arr[i].quantity; }
  }
  return subtotal
}


// fetching the GET route from the Express server which matches the GET route from server.js
export async function callBackendAPI() {
  const response = await fetch('/express_backend_catalog_items');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  console.log(body)
  return body;
};

export async function componentDidMount() {
  callBackendAPI()
  // import and pass the square data
  .then(res => {
    global.itemData = res // this can be accessed across files
  })
  .catch(err => console.log(err));
}

export function makeCardsMUI(arr){ if(arr){
    return( arr.map((item) => {
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

export function cartItems(arr, itemCount, setItemCount) {
  // const [itemCount, setItemCount] = useState(1);
  if(arr){
    return(
      arr.map((item) => {
        if(item.quantity>0){
          return(
            <Card className = "sidebar-item">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="100"
                image={item.image}
              />
              <div className="sidebar-item-text">
                ${item.price.toFixed(2)}
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      item.quantity = Math.max(item.quantity -1, 0);
                      setItemCount(Math.max(itemCount - 1, 0));
                    }}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button>
                    {item.quantity}
                  </Button>
                  <Button
                    onClick={() => {
                      item.quantity ++;
                      setItemCount(itemCount + 1);
                    }}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
                ${(item.price*item.quantity).toFixed(2)}
              </div>
            </Card>
          )
        }
      })
    )
  }
}