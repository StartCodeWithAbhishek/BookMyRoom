import { useContext } from "react";
import "./navbar.css"
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link  to="/" style={{color:"inherit",textDecoration:"none"}} >
        <span className="logo">lamabooking</span>
        </Link>
        {user?(user.username):(<div className="navItems">
          <button className="navButton">Register</button>

          <Link  to="/login" style={{color:"inherit",textDecoration:"none"}} >
          <button className="navButton" action="/login">Login or logout</button>
        </Link>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar