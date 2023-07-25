import React, { useState } from "react";
import { mantisData } from "../data/mantisData";
import { useNavigate } from "react-router-dom";

const Mantis = () => {
  const navigate = useNavigate();
  const [mantis] = useState(mantisData);
  const mantisIndex = localStorage.getItem("mantisIndex");

  const backButton = () => {
    navigate("/");
    localStorage.removeItem("mantisIndex");
  };

  return (
    <div className="mantis-container">
      <div className="header">
        <h1>mantisDEX</h1>
        <button onClick={backButton}>retour</button>
      </div>
      <div className="mantis-title">
        <h3>{mantis[mantisIndex].nom}</h3>
        <h4>{mantis[mantisIndex].nomCommun}</h4>
        <div className="mantis-pic">
          <img src={mantis[mantisIndex].img} alt="{mantis[mantisIndex].nom}" />
        </div>
      </div>
      <div className="mantis-infos">
        <p>
          <span className="info-name">origine : </span>
          <span className="info">{mantis[mantisIndex].origine}</span>
        </p>
        <p>
          <span className="info-name">taille : </span>
          <span className="info">{mantis[mantisIndex].taille}</span>
        </p>
        <p>
          <span className="info-name">température : </span>
          <span className="info">{mantis[mantisIndex].temp}</span>
        </p>
        <p>
          <span className="info-name">hygrométrie : </span>
          <span className="info">{mantis[mantisIndex].hygro}</span>
        </p>
        <p>
          <span className="info-name">terrarium : </span>
          <span className="info">{mantis[mantisIndex].terrarium}</span>
        </p>
      </div>
    </div>
  );
};

export default Mantis;
