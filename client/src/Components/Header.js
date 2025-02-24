import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import applogo from "../Images/logo-t.png";
const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <img src={applogo} className="logo" />
          </NavItem>
          <NavItem>
            <NavLink active>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active>
              <Link to="/profile">Profile</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
