import { NavLink } from "react-router-dom";
import "./Header.css";
import { useTheme } from "../../context/theme.context";

export const Header = () => {
  const { theme, toggleTheme } = useTheme() as {
    theme: string;
    toggleTheme: () => void;
  };

  return (
    <header className="heading">
      <h2>LOGO</h2>
      <button className="themeToggle" onClick={toggleTheme}>
        {theme === "LIGHT" ? "🌙" : "☀️"}
      </button>
      <nav>
        <ul className="navLinks">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>

          <NavLink to="/trips">
            <li>Trips</li>
          </NavLink>

          <NavLink to="/add-trip">
            <li>Add Trip</li>
          </NavLink>

          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
