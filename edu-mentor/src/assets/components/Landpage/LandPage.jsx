import React, { useState } from "react";
import "./LandPage.css";

function LandPage() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <header className="header borda">
        <div className="logo">
          <div className="logo">
            <img src="./src/assets/img/logo.png" alt="EduMentor Logo" />
          </div>
          <h1>EduMentor</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <button className="button">
                <a href="Login" className="button text-button">
                  Login
                </a>
              </button>
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
          <button className="button">
            <a href="Home">Explore →</a>
          </button>
        </div>
        <div className="illustration">
          <img src="./src/assets/img/logo.png" alt="Classroom Illustration" />
        </div>
      </main>
    </div>
  );
}

export default LandPage;
