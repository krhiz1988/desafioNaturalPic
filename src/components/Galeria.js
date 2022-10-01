import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useState, useContext } from "react";
import Context from "../Context/Context";

export default function Home() {
  const [favoritos, setFavoritos] = useState({});

  const { fotos, setFotos } = useContext(Context);

  const getLiked = (id) => {
    console.log(id)
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto) => (
        <div
          onClick={getLiked(foto.id)}
          className="foto"
          key={foto.id}
          style={{ backgroundImage: `url(${foto.src.original})` }}
        >
          <Heart filled={foto.liked} />
          <p> {foto.alt} </p>
        </div>
      ))}
    </div>
  );
}
