import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">
          <NavLink to={"/"} className="link">
            Recipe App
          </NavLink>
        </h2>

        <div className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Enter a recipe name..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="links">
          <NavLink to={"/"} className="link">
            Home
          </NavLink>
          <NavLink to={"/item/:id"} className="link">
            Details
          </NavLink>
          <NavLink to={"/favourites"} className="link">
            Favourites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
