import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
  const { onSearch } = props;

  return (
    <div className={style.navegador}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
