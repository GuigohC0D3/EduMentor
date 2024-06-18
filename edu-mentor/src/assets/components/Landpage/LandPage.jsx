import React, { useState } from "react";
import "./LandPage.css";

function LandPage() {
  const [activeTab, setActiveTab] = useState("home"); // Inicializa com a aba home

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="./src/assets/img/logo.png" alt="EduMentor Logo" />
          <h1>EduMentor</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="Login" className="login">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <h2>Welcome to</h2>
          <h1>EduMentor</h1>
          <p>
            Elevate Education Together: Connecting Tutors and Students
            Seamlessly!
          </p>
          <button className="explore">Explore →</button>
        </div>
        <div className="illustration">
          <img
            src="./src/assets/img/logo-melhor.png"
            alt="Classroom Illustration"
          />
        </div>
      </main>
    </div>
  );
}

export default LandPage;
