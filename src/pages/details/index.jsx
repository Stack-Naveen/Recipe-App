import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { recipeDetails, setRecipeDetails } = useContext(GlobalContext);
  const { id } = useParams();

  async function details() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    if (data?.data?.recipe) {
      setRecipeDetails(data?.data?.recipe);
    }
  }

  useEffect(() => {
    details();
  }, []);

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image-wrapper">
          <img
            className="details-img"
            src={recipeDetails?.image_url}
            alt={recipeDetails?.title}
          />
        </div>

        <div className="details-content">
          <div className="details-publisher">{recipeDetails?.publisher}</div>
          <h2 className="details-title">{recipeDetails?.title}</h2>

          <button className="details-btn">Add to Fav</button>

          <div className="ingredients-section">
            <h3 className="ingredients-heading">Ingredients :</h3>
            <div className="ingredients-list">
              {recipeDetails?.ingredients?.map((eachItem, index) => {
                const { quantity, unit, description } = eachItem;
                return (
                  <div key={index} className="ingredient-item">
                    <span>{`${quantity || ""} ${
                      unit || ""
                    } ${description}`}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
