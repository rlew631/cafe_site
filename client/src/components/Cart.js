import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Order from '../components/order';
import {
  Badge,
  Button,
  ButtonGroup,
  // List,
  Drawer,
  Box,
  Divider,
  // ListItem,
  // ListItemIcon,
  // ListItemText
} from '@mui/material';

//https://mui.com/components/drawers/

function cartItems(arr, itemCount, setItemCount) {
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

function getSubTotal(arr) {
  if(arr){
    var subtotal = 0
    for (var i = 0; i < arr.length; i++) {
      var lineItem = arr[i].quantity * arr[i].price
      subtotal = subtotal + lineItem; }
  }
  return subtotal
}

function getCartCount(arr) {
  if(arr){
    var subtotal = 0
    for (var i = 0; i < arr.length; i++) {
      subtotal = subtotal + arr[i].quantity; }
  }
  return subtotal
}

function Cart() {
  // cart item count
  const [itemCount, setItemCount] = useState(0);
  // drawer toggle
  const [drawerState, setDrawerState] = useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  // sidebar code
  const list = (anchor) => (
    <Box
      sx={250}
      role="presentation"
      onKeyDown={toggleDrawer('right', false)}
      className = "sidebar"
    >
      <h3 className="cart-title">Your Cart</h3>
      <Divider className="sidebar-divider"/>
      {cartItems(global.itemData, itemCount, setItemCount)}
      <Divider className="sidebar-divider"/>
      <div className="sidebar-pricing">
        <div>Subtotal: </div>
        <div>${getSubTotal(global.itemData)}</div>
      </div>
      <div className="sidebar-pricing">
        <div>Tax(7.5%): </div>
        <div>${(getSubTotal(global.itemData)*0.075).toFixed(2)}</div>
      </div>
      <div className="sidebar-pricing">
        <b>Total: </b>
        <b>${(getSubTotal(global.itemData)*1.075).toFixed(2)}</b>
      </div>
    </Box>
  );
  // icon to activate the sidebar
  return (
    <div className="cart">
      <Button onClick={toggleDrawer('right', true)}>
        <Badge color="secondary" badgeContent={getCartCount(global.itemData)}>
          {/* <Badge color="secondary" badgeContent={getCartCount(Order.state.data)}> */}
          <ShoppingCartIcon />{" "}
        </Badge>
      </Button>
      <Drawer
        anchor={'right'}
        open={drawerState['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );

}

export default Cart;