import {useState} from 'react';
import logo from '../logo.svg';
import {createUseStyles} from 'react-jss';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import {Link} from "react-router-dom";

const useStyles = createUseStyles({
  main: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#f8f9fa",
    height: 75
  },
  toggle: {
    "margin-right": 10
  },
  logo: {
    "margin-left": 10
  },
  navbar: {
    "justify-content": "flex-end",
    "margin-right": 10
  },
  header: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    height: "auto",
    padding: "15px 0px"
  },
  links: {
    color: "rgba(0,0,0,.55)",
    paddingRight: ".5rem",
    paddingLeft: ".5rem",
    textDecoration: "none",
    "&:hover": {
      color: "rgba(0,0,0,.7)"
    }

  }
});

const links = [
  { href: "/", text: 'Home' },
  { href: "/order", text: 'Order' },
  { href: '/checkout', text: 'Checkout' },
  { href: '/about_us', text: 'About Us' }
];

function Header() {

  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const createNavItem = ({ href, text }) => (
    <NavItem>
      <Link to={href} className={classes.links}>{text}</Link>
    </NavItem>
  );
  const header = "col-lg-10 offset-lg-1 col-md-10 offset-md-1 " + classes.header;

  return (
    <div className={classes.main}>
      <Navbar color="light" light expand="md" className={header}>
        <NavbarBrand href="/" className={classes.logo}>
          <img src={logo} alt="logo" height="35"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={classes.toggle}/>
        <Collapse isOpen={isOpen} navbar className={classes.navbar}>
          <Nav navbar>
            {links.map(createNavItem)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
  );
}

export default Header;
