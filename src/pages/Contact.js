import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate("/");
    localStorage.removeItem("mantisIndex");
  };

  return (
    <div className="contact">
      <div className="header">
        <h1>mantisDEX</h1>
        <button onClick={backButton}>retour</button>
      </div>
      <div className="title">
        <h3>contact</h3>
        <p>
          N’hésitez pas à me contacter s’il vous semble qu'il y a une erreur sur
          le site, si une des photos est à vous et que vous souhaitez que je la
          retire, ou pour toute autre question.
        </p>
        <div className="social">
          <ul>
            <li
              onClick={() =>
                (window.location.href = "mailto:debarrosg01@gmail.com")
              }
            >
              <img src="./img/email.svg" alt="email icon" />
            </li>
            <li
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/geoffrey-de-barros-1430a7255/"
                )
              }
            >
              <img src="./img/linkedin.svg" alt="linkedin icon" />
            </li>
            <li onClick={() => window.open("https://twitter.com/Pardaliss")}>
              <img src="./img/twitter.svg" alt="twitter icon" />
            </li>
          </ul>
        </div>
      </div>
      <div className="img-container">
        <img src="./img/mantis2.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;
