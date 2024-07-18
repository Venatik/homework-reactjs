import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export const Header = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
      : "text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium";

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
            <NavLink
              to="/"
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              Products
            </NavLink>
            <NavLink
              to="/add-product"
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              Add Product
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};
