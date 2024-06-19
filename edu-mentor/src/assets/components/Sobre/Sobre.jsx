import React from 'react';
import './Sobre.css';

function AboutPage() {
  return (
    <div>
      <header>
        <h1>Sobre</h1>
      </header>
      <div className="about-container">
        <div className="about-content">
          <p>
          EduMentor é uma plataforma que conecta estudantes de áreas rurais e desfavorecidas com tutores voluntários e recursos educacionais online.
          O objetivo é Reduzir a desigualdade educacional e fornecer oportunidades de aprendizado para todos os estudantes, independentemente de sua localização ou situação econômica.
          </p>
          <h2>Tecnologias Utilizadas</h2>
          <ul>
            <li>CSS</li>
            <li>React</li>
            <li>JavaScript</li>
          </ul>
          <h2>Integrantes do Grupo</h2>
          <ul>
            <li>Antonio Neves Aguiar Neto</li>
            <li>Guilherme Ancheschi Werneck Pereira</li>
            <li>Heitor Macedo Monteiro de Araújo</li>
            <li>Wickham Carneiro Pereira</li>
            <li>Charles Lucas Lopes Freitas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
