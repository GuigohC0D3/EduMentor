import React from "react";
import "./AnatomiaHumana.css";

const AnatomiaHumana = () => {
  return (
    <div className="AnatomiaHumana">
      <header>
        <h1>EDUMENTOR</h1>
      </header>
      <div className="post-container">
        <h1>INTRODUÇÃO A ANATOMIA HUMANA</h1>
        <img src="./src/assets//img/Anatfoto.png" alt="Imagem do post" />
        <video controls>
          <source src="./src/assets/components/mp4/vid_01.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default AnatomiaHumana;
