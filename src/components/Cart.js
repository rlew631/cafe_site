import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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

function Cart() {
  // cart item count
  const [itemCount, setItemCount] = useState(1);
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
    >
      <h3 className="cart-title">Your Cart</h3>
      <Divider />
      <List>
        {['food item 1', 'food item 2'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ?
              <div>food item 1 icon</div> : <div>food item 2 icon</div>}
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
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {JSON.stringify(global.itemData)}
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