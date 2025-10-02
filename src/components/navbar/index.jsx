import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { FaHome, FaHeart, FaSearch } from "react-icons/fa";

export default function NavBar() {
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">
          <NavLink to={"/"} className="link">
            Flavorly
          </NavLink>
        </h2>

        <form onSubmit={handleSubmit} className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Enter a recipe..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSubmit} className="search-btn">
            <FaSearch />
            <span>Search</span>
          </button>
        </form>

        <div className="links">
          <NavLink to={"/"} className="link">
            <FaHeart />
            <span>Home</span>
          </NavLink>
          <NavLink to={"/favourites"} className="link">
            <FaHome />
            <span>Favourite</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
