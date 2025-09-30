import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
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

  return (
    <GlobalContext.Provider
      value={{ search, setSearch, handleSubmit, list, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
