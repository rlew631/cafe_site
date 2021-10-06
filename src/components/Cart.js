import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Badge,
  Button,
  ButtonGroup,
  List,
  Drawer,
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';

//https://mui.com/components/drawers/

function cartItems(arr, itemCount, setItemCount) {
  // const [itemCount, setItemCount] = useState(1);
  if(arr){
    return(
      arr.map((item) => 
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
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
      </Card>
      )
    )
  }
}

function Cart() {
  // cart item count
  const [itemCount, setItemCount] = useState(1);
  // global.const [itemCount, setItemCount] = useState(1);
  // drawer toggle
  const [drawerState, setDrawerState] = useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  // working sidebar code
  const list = (anchor) => (
    <Box
      sx={250}
      role="presentation"
      onKeyDown={toggleDrawer('right', false)}
      className = "sidebar"
    >
      <h3 className="cart-title">Your Cart</h3>
      <Divider />
      {cartItems(global.itemData, itemCount, setItemCount)}
    </Box>
  );
  // icon to activate the sidebar
  return (
    <div className="cart">
      <Button onClick={toggleDrawer('right', true)}>
        <Badge color="secondary" badgeContent={itemCount}>
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