import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [fav, setFav] = useState([]);
  const navigate = useNavigate();
  console.log(search);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setList(data?.data?.recipes);
        setLoading(false);
        setSearch("");
        navigate("/");
      }
      console.log(data);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearch("");
    }
  }
  console.log(list);
  console.log(loading);

  function handleFav(currentItem) {
    console.log(currentItem);
    let cpyFav = [...fav];
    let index = cpyFav.findIndex((eachItem) => eachItem.id === currentItem.id);

    if (index === -1) {
      cpyFav.push(currentItem);
    } else {
      cpyFav.splice(index, 1);
    }
    setFav(cpyFav);
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        list,
        loading,
        recipeDetails,
        setRecipeDetails,
        fav,
        setFav,
        handleFav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
