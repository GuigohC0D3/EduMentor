import React, { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [activeTab, setActiveTab] = useState("home"); // Inicializa com a aba home

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src="./src/assets/img/mundo-melhor.png" alt="Logo ICEV" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#quem-somos"
                onClick={() => handleTabClick("quem-somos")}
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                href="#escola-direito-aplicado"
                onClick={() => handleTabClick("escola-direito-aplicado")}
              >
                Escola de Direito Aplicado
              </a>
            </li>
            <li>
              <a
                href="#escola-negocios-gestao"
                onClick={() => handleTabClick("escola-negocios-gestao")}
              >
                Escola de Negócios e Gestão
              </a>
            </li>
            <li>
              <a
                href="#escola-tecnologia-aplicada"
                onClick={() => handleTabClick("escola-tecnologia-aplicada")}
              >
                Escola de Tecnologia Aplicada
              </a>
            </li>
            <li>
              <a
                href="#pos-extensao"
                onClick={() => handleTabClick("pos-extensao")}
              >
                Pós e Extensão
              </a>
            </li>
            <li>
              <a
                href="#blogs-noticias"
                onClick={() => handleTabClick("blogs-noticias")}
              >
                Blogs & Notícias
              </a>
            </li>
            <li>
              <a
                href="#fale-conosco"
                onClick={() => handleTabClick("fale-conosco")}
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar..." />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => handleTabClick("processos-seletivos")}>
            Processos Seletivos
          </button>
          <button onClick={() => handleTabClick("area-professor")}>
            Área do Professor
          </button>
          <button onClick={() => handleTabClick("area-aluno")}>
            Área do Aluno
          </button>
        </div>
      </header>
      <main className="content">
        {activeTab === "home" && (
          <section className="hero">
            <div className="hero-image">
              <img src="./src/assets/img/mundo-melhor.png" alt="Hero Image" />
            </div>
            <div className="hero-text">
              <h1>ICEV é, mais uma vez, 1º lugar no Exame de Ordem da OAB!</h1>
              <p>Entre as faculdades particulares do Piauí</p>
            </div>
          </section>
        )}
        {activeTab === "quem-somos" && (
          <section className="quem-somos">
            <h2>Quem Somos</h2>
            <p>Conteúdo sobre a ICEV</p>
          </section>
        )}
        {activeTab === "escola-direito-aplicado" && (
          <section className="escola-direito-aplicado">
            <h2>Escola de Direito Aplicado</h2>
            <p>Conteúdo sobre a Escola de Direito Aplicado</p>
          </section>
        )}
        {activeTab === "escola-negocios-gestao" && (
          <section className="escola-negocios-gestao">
            <h2>Escola de Negócios e Gestão</h2>
            <p>Conteúdo sobre a Escola de Negócios e Gestão</p>
          </section>
        )}
        {activeTab === "escola-tecnologia-aplicada" && (
          <section className="escola-tecnologia-aplicada">
            <h2>Escola de Tecnologia Aplicada</h2>
            <p>Conteúdo sobre a Escola de Tecnologia Aplicada</p>
          </section>
        )}
        {activeTab === "pos-extensao" && (
          <section className="pos-extensao">
            <h2>Pós e Extensão</h2>
            <p>Conteúdo sobre Pós e Extensão</p>
          </section>
        )}
        {activeTab === "blogs-noticias" && (
          <section className="blogs-noticias">
            <h2>Blogs & Notícias</h2>
            <p>Conteúdo sobre Blogs & Notícias</p>
          </section>
        )}
        {activeTab === "fale-conosco" && (
          <section className="fale-conosco">
            <h2>Fale Conosco</h2>
            <p>Conteúdo sobre Fale Conosco</p>
          </section>
        )}
        {activeTab === "processos-seletivos" && (
          <section className="processos-seletivos">
            <h2>Processos Seletivos</h2>
            <p>Conteúdo sobre Processos Seletivos</p>
          </section>
        )}
        {activeTab === "area-professor" && (
          <section className="area-professor">
            <h2>Área do Professor</h2>
            <p>Conteúdo sobre a Área do Professor</p>
            <a href="/area-professor" className="button">
              Acessar Área do Professor
            </a>{" "}
            {/* Link para a página da Área do Professor */}
          </section>
        )}
        {activeTab === "area-aluno" && (
          <section className="area-aluno">
            <h2>Área do Aluno</h2>
            <p>Conteúdo sobre a Área do Aluno</p>
            <a href="/area-aluno" className="button">
              Acessar Área do Aluno
            </a>{" "}
            {/* Link para a página da Área do Aluno */}
          </section>
        )}
      </main>
      <footer>
        <p>© 2023 ICEV - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default HomePage;
