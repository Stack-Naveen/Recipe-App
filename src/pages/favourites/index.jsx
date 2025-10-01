import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Link } from "react-router-dom";

export default function Favourites() {
  const { fav } = useContext(GlobalContext);
  return (
    <div className="home">
      <div className="home-container">
        {fav && fav.length > 0 ? (
          fav.map((items) => {
            return (
              <div key={items.id} className="card">
                <img
                  src={items.image_url}
                  alt="recipe image"
                  className="card-img"
                />
                <div className="card-body">
                  <p className="card-publisher">{items.publisher}</p>
                  <h3 className="card-title">{items.title}</h3>
                  <Link to={`/item/${items?.id}`} className="card-btn">
                    Recipe Details
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="empty">No Fav . . .</h1>
        )}
      </div>
    </div>
  );
}
