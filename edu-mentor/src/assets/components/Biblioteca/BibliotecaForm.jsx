// src/components/BibliotecaComponent.js
import React from "react";
import "./BibliotecaForm.css";

const BibliotecaForm = () => {
  return (
    <div className="biblioteca">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meu Blog</title>
      </head>
      <body>
        <header>
          <h1>EDUMENTOR - Biblioteca</h1>
          <nav>
            <ul>
              <li>
                <a href="LandPage.jsx">HOMEPAGE</a>
              </li>
            </ul>
          </nav>
        </header>
        <main id="post">
          <a href="AnatomiaHumana">
            <div className="post">
              <img src="./src/assets/img/anatomia.jpg" alt="Logo anatomia" />
              <h2>INTRODUÇÃO A ANATOMIA HUMANA</h2>
              <h3 className="nome-cientifico">
                Este campo da biologia examina a organização e a relação entre
                os diversos sistemas e órgãos que compõem o corpo, bem como suas
                funções específicas.
              </h3>
            </div>
          </a>
          <a href="CalculoForm">
            <div className="post">
              <img
                src="./src/assets/img/logo_calculoI_01.png"
                alt="Logo Calculo"
              />
              <h2>INTRODUÇÃO A CALCULO 1</h2>
              <h3 className="nome-cientifico">
                O Cálculo 1 é uma disciplina fundamental no campo da matemática
                que serve como base para diversas áreas da ciência, engenharia e
                economia.
              </h3>
            </div>
          </a>
        </main>
        <footer>
          <p>&copy; 2024 EDUMENTOR</p>
        </footer>
      </body>
    </div>
  );
};

export default BibliotecaForm;
