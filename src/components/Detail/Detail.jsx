import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {character ? (
        <div>
          <button onClick={handleClick}>← Back to main page</button>
          <div>
            <h1>NAME: {character.name}</h1>
            <h3>ESTADO: {character.status}</h3>
            <h3>ESPECIE: {character.species}</h3>
            <h3>GENERO: {character.gender}</h3>
            <h3>ORIGEN: {character.origin?.name}</h3>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
