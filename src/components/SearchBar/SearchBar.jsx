import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Search..."
        className={style.busqueda}
        onChange={handleChange}
      />
      <button className={style.agregar} onClick={() => onSearch(character)}>
        Agregar
      </button>
    </div>
  );
}
