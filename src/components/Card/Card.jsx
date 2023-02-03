import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  name,
  image,
  species,
  gender,
  onClose,
  detailId,
}) {
  return (
    <div className={style.card}>
      <div className={style.border}>
        <button className={style.boton} onClick={onClose}>
          X
        </button>
      </div>
      <Link to={`/detail/${detailId}`}>
        <div className={style.letra}>{name}</div>
      </Link>
      <div>
        <img className={style.foto} alt={image} src={image} />
      </div>
      <div className={style.datos}>{species}</div>
      <div className={style.datos}>{gender}</div>
    </div>
  );
}
