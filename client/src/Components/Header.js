import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Features/UserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(logout());
    //ensure that the state update from the logout action has been processed before proceeding to the next step.
    await new Promise((resolve) => setTimeout(resolve, 100));
    navigate("/login"); //redirect to login page route.
  };

  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <img src={logo} />
          </NavItem>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>

          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>

          <NavItem>
            <Link to="/register">Register</Link>
          </NavItem>

          <NavItem>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
