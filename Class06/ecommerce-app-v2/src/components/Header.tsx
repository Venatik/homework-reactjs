import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export const Header = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "activeLink" : "pendingLink";
  //   const flexBetween = "flex items-center justify-between";

  return (
    <div>
      <header className="heading">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="Company Logo" />
          </Link>
        </div>

        <nav>
          <ul className="navLinks">
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/products" className={getNavLinkClass}>
              Products
            </NavLink>
            <NavLink to="/add-product" className={getNavLinkClass}>
              Add Product
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

//  className=" sticky top-0 z-50"
