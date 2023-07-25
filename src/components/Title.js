import React from "react";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const navigate = useNavigate();
  const contactBtn = () => {
    navigate("/contact");
  };

  return (
    <div className="title">
      <button id="contact" onClick={contactBtn}>
        contact
      </button>
      <img src="./img/mantis1.png" alt="Une mante" id="imgMante"/>
      <h1>mantisDEX</h1>
    </div>
  );
};

export default Title;
