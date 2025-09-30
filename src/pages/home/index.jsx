import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Link } from "react-router-dom";

export default function Home() {
  const { list, loading } = useContext(GlobalContext);
  if (loading) return <h3 className="loading">Please wait . . .</h3>;

  return (
    <div className="home">
      <div className="home-container">
        {list && list.length > 0 ? (
          list.map((items) => {
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
          <h1 className="empty">Search something . . .</h1>
        )}
      </div>
    </div>
  );
}
