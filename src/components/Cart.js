import { useState, Fragment } from 'react';
// import Badge from '@mui/core/BadgeUnstyled';
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
  const [itemCount, setItemCount] = useState(1);
  const [state, setState] = useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // working sidebar code
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {['food item 1', 'food item 2'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <div>food item 1 icon</div> : <div>food item 2 icon</div>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
//working shopping cart badge code
  // return (
  //   <div style={{ display: "block", padding: 30 }}>
  //     <h4>Shopping Cart:</h4>
  //     <div>
  //       <Badge color="secondary" badgeContent={itemCount}>
  //         <ShoppingCartIcon />{" "}
  //       </Badge>
  //       <ButtonGroup>
  //         <Button
  //           onClick={() => {
  //             setItemCount(Math.max(itemCount - 1, 0));
  //           }}
  //         >
  //           {" "}
  //           <RemoveIcon fontSize="small" />
  //         </Button>
  //         <Button
  //           onClick={() => {
  //             setItemCount(itemCount + 1);
  //           }}
  //         >
  //           {" "}
  //           <AddIcon fontSize="small" />
  //         </Button>
  //       </ButtonGroup>
  //     </div>
  //   </div>
  // return (
  //   <div>
  //     {['left', 'right', 'top', 'bottom'].map((anchor) => (
  //       <Fragment key={anchor}>
  //         <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
  //         <Drawer
  //           anchor={anchor}
  //           open={state[anchor]}
  //           onClose={toggleDrawer(anchor, false)}
  //         >
  //           {list(anchor)}
  //         </Drawer>
  //       </Fragment>
  //     ))}
  //   </div>
  // );

// working sidebar
  return (
    <div>
          <Button onClick={toggleDrawer('right', true)}>view cart</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
    </div>
  );

}

export default Cart;