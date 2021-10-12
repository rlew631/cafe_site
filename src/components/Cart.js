import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Badge,
  Button,
  ButtonGroup,
  Drawer,
  Box,
  Divider,
} from '@mui/material';
import {
  cartItems,
  getSubTotal,
  getCartCount,
  // callBackendAPI,
  componentDidMount
} from './ordering';

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
  const list = () => (
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

  componentDidMount()

  // icon to activate the sidebar
  return (
    <div className="cart main">
      <Button onClick={toggleDrawer('right', true)}>
        <Badge color="secondary" badgeContent={getCartCount(global.itemData)}>
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