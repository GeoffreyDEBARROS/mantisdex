import React, { useState } from "react";
import { mantisData } from "../data/mantisData";

const Cards = () => {
  const [mantis] = useState(mantisData);
  
  return (
    <div className="cards-container">
      {mantis.map((item, index) => (
        <div className="card">
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
