import React, { useState, useCallback } from 'react';
import "./SearchPage.css";

const SearchPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [lessonMarked, setLessonMarked] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');

  const handleBlockClick = (image, title) => {
    setShowPopup(true);
    setImage(image);
    setTitle(title);
  };

  const handleMarkLesson = () => {
    setLessonMarked(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="search">
      <h1>EDUMENTOR - Busca de Tutor</h1>
      <nav>
        <ul>
          <li>
            <a href="index.html">HOMEPAGE</a>
          </li>
        </ul>
      </nav>
      <main id="post">
        <div className="container">
          <div className="tutores" onClick={() => handleBlockClick('/src/assets/img/ProfessorMatematica.jpeg', 'Professor Matemática')}>
            <h3>Professor de Matemática</h3>
            <img src="/src/assets/img/ProfessorMatematica.jpeg" alt="" />
            <h2>João Silva</h2>
          </div>
          <div className="tutores" onClick={() => handleBlockClick('/src/assets/img/ProfessoraFisica.jpeg', 'Professor Física')}>
            <h3>Professora de Física</h3>
            <img src="/src/assets/img/ProfessoraFisica.jpeg" alt="" />
            <h2>Maria Oliveira</h2>
          </div>
          <div className="tutores" onClick={() => handleBlockClick('/src/assets/img/MestreCristOvao.jpeg', 'Professor de Programa')}>
            <h3>Mestre de Programa</h3>
            <img src="/src/assets/img/MestreCristOvao.jpeg" alt="" />
            <h2>Christ ✞ Ovão</h2>
          </div>
        </div>
        {showPopup && (
          <div className="overlay">
            <div className="popup">
              <button className="close-button" onClick={handleClosePopup}>
                &times;
              </button>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <button onClick={handleMarkLesson}>Marcar aula</button>
              {lessonMarked && <p>Aula marcada com sucesso!</p>}
            </div>
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 EDUMENTOR</p>
      </footer>
    </div>
  );
};

export default SearchPage;