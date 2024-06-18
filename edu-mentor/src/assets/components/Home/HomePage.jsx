import React from "react";
import "./HomePage.css"; // Importando estilos

const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <header className="header">
          <div className="container">
            <h1 className="logo">Edumentor</h1>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#courses">Cursos</a>
                </li>
                <li>
                  <a href="#mentors">Mentores</a>
                </li>
                <li>
                  <a href="#contact">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="container">
          <h2>Bem-vindo ao Edumentor</h2>
          <p>
            Plataforma de mentoria e cursos online para potencializar seus
            estudos
          </p>
          <a href="#courses" className="cta-button">
            Ver Cursos
          </a>
        </div>

        <div className="container">
          <h3>Sobre Nós</h3>
          <p>
            Edumentor é uma plataforma dedicada a fornecer mentoria educacional
            de alta qualidade. Nossos mentores são especialistas nas suas áreas
            e estão prontos para ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="container">
          <h3>Nossos Cursos</h3>
          <div className="course-list">
            <div className="course-item">
              <h4>Curso de Matemática</h4>
              <p>
                Aprimore suas habilidades em matemática com nossos mentores
                especializados.
              </p>
            </div>
            <div className="course-item">
              <h4>Curso de Programação</h4>
              <p>
                Aprenda a programar com cursos desde o nível iniciante até o
                avançado.
              </p>
            </div>
            <div className="course-item">
              <h4>Curso de Física</h4>
              <p>
                Entenda os conceitos fundamentais da física e aplique-os na
                prática.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <h3>Nossos Mentores</h3>
          <div className="mentor-list">
            <div className="mentor-item">
              <h4>João Silva</h4>
              <p>Especialista em Matemática</p>
            </div>
            <div className="mentor-item">
              <h4>Maria Oliveira</h4>
              <p>Especialista em Programação</p>
            </div>
            <div className="mentor-item">
              <h4>Carlos Souza</h4>
              <p>Especialista em Física</p>
            </div>
          </div>
        </div>

        <div className="container">
          <h3>Contato</h3>
          <p>
            Entre em contato conosco para mais informações sobre nossos cursos e
            mentoria.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu Email" />
            <textarea placeholder="Sua Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Edumentor. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;