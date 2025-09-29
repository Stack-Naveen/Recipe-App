import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  console.log(search);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <GlobalContext.Provider value={{ search, setSearch, handleSubmit }}>
      {children}
    </GlobalContext.Provider>
  );
}
