import React from "react";
import mentores from "./Mentores";
import "./HomePage.css"; // Importando estilos

const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <div className="container">
          <div className="nav">
            <nav className="navbar">
              <ul>
                <li>
                  <img
                    className="logo"
                    src="./src/assets/img/logo.png"
                    alt="EduMentor Logo"
                  />
                </li>
                <li>
                  <a href="Sobre">Sobre</a>
                </li>
                <li>
                  <a href="TutorPerfil">Perfil Tutor</a>
                </li>
                <li>
                  <a href="Perfil">Perfil</a>
                </li>
                <li>
                  <a href="Biblioteca">Biblioteca</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="bemvindo">
            <h2>Bem-vindo ao Edumentor</h2>
            <p>
              Plataforma de mentoria e cursos online para potencializar seus
              estudos
            </p>
            <a href="Search" className="cta-button">
              Buscar Tutores
            </a>
          </div>

          <div className="about borda">
            <h3>Sobre Nós</h3>
            <p>
              Edumentor é uma plataforma dedicada a fornecer mentoria
              educacional de alta qualidade. Nossos mentores são especialistas
              nas suas áreas e estão prontos para ajudar você a alcançar seus
              objetivos.
            </p>
          </div>

          <div className="cursos">
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

          <div>
            <div className="mentores">
              <h3>Nossos Mentores</h3>
              <div className="mentor-list">
                {mentores.map((mentor) => (
                  <div className="mentor-item" key={mentor.id}>
                    <h4>{mentor.nome}</h4>
                    <p>Especialista em {mentor.especialidade}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contato">
            <h3>Contato</h3>
            <p>
              Entre em contato conosco para mais informações sobre nossos cursos
              e mentoria.
            </p>
            <form className="contact-form">
              <input type="text" placeholder="Seu Nome" />
              <input type="email" placeholder="Seu Email" />
              <textarea placeholder="Sua Mensagem"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>

          <div className="footer">
            <p className="text-footer">
              &copy; 2024 Edumentor. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
