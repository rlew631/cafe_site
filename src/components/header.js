import {useState} from 'react';
import logo from '../logo.svg';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  // NavItem,
} from 'reactstrap';

const links = [
  { href: "/", text: 'Home' },
  { href: "/order", text: 'Order' },
  { href: '/manufacturing', text: 'Manufacturing' },
  { href: '/contact', text: 'Contact' }
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const createNavItem = ({ link, text }) => (
    <a href={link} className="headerLinks">{text}</a>
  );

  return (
    <div className="headerStrip">
      <Navbar color="light" light expand="md" className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 header">
        <NavbarBrand href="/" className="logo">
          <img src={logo} alt="logo" height="35"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="toggle"/>
        <Collapse isOpen={isOpen} navbar className="navBar">
          <Nav navbar>
            {links.map(createNavItem)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
  );
}

export default Header;
