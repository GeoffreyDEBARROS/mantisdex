import React, { useState } from "react";
import { mantisData } from "../data/mantisData";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [mantis] = useState(mantisData);
  const navigate = useNavigate();

  const cardClick = (index) => {
    localStorage.setItem("mantisIndex", index);
    navigate("/mantis");
  };

  return (
    <div className="cards-container">
      {mantis.map((item, index) => (
        <div className="card" onClick={() => cardClick(index)} key={index}>
          <h4>{item.nom}</h4>
          <div className="pic-container">
            <img src={item.img} alt={item.nom} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
