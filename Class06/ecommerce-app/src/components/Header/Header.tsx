import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/ecommerce-app-icon-free-vector.jpg";

export const Header = () => {
  return (
    <div>
      <header className="heading">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>

        <nav>
          <ul className="navLinks">
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (isActive) {
                  return "activeLink";
                }
                return "pendingLink";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                if (isActive) {
                  return "activeLink";
                }
                return "pendingLink";
              }}
            >
              Products
            </NavLink>
            <NavLink
              to="add-product"
              className={({ isActive }) => {
                if (isActive) {
                  return "activeLink";
                }
                return "pendingLink";
              }}
            >
              Add Product
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};
