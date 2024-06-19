import React from "react";
import "./Acompanhamento.css";

const Dashboard = () => {
  return (
    <main id="dashboard-container">
      <header className="dashboard-header">
        <div className="profile-section">
          <img src="profile.png" alt="Profile" className="profile-img" />
          <span>Professor Guilio</span>
        </div>
        <button className="logout-button">Sair</button>
      </header>

      <section className="dashboard-content">
        <div className="chart-section">
          <h2>Progresso</h2>
          <div className="chart-placeholder"><img src="./src/assets/img/grafico.png" alt="" /></div>
        </div>

        <div className="activities-section">
          <h2>Atividades</h2>
          <table className="activities-table">
            <thead>
              <tr>
                <th>Atividade</th>
                <th>Nota</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atividade 1</td>
                <td>10</td>
                <td>01/01/2023</td>
              </tr>
              <tr>
                <td>Atividade 2</td>
                <td>8</td>
                <td>02/01/2023</td>
              </tr>
              <tr>
                <td>Atividade 3</td>
                <td>9</td>
                <td>03/01/2023</td>
              </tr>
              <tr>
                <td>Atividade 4</td>
                <td>7</td>
                <td>04/01/2023</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="chat-section">
          <h2>Chat</h2>
          <div className="chat-placeholder">[Chat Aqui]</div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
