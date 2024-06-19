import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css"; // Importando estilos

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    nomeUsuario: "",
    email: "",
    celular: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      const response = await axios.post("/api/submit", {
        nomeCompleto: formData.nomeCompleto,
        nomeUsuario: formData.nomeUsuario,
        email: formData.email,
        celular: formData.celular,
      });
      console.log(response.data);
      alert("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados", error);
      alert("Erro ao enviar dados");
    }
  };

  return (
    <main id="container">
      <div className="cabecalho">
        <img
          className="logo"
          src="./src/assets/img/logo.png"
          alt="EduMentor Logo"
        />
        <h1 style={{ color: "white" }} id="title">
          EDUMENTOR
        </h1>
      </div>
      <section className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>

          <div className="input-register">
            <div className="input-field">
              <label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="input-field">
              <label>
                <input
                  type="text"
                  placeholder="UserName"
                  name="nomeUsuario"
                  value={formData.nomeUsuario}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>

          <div className="input-register">
            <div className="input-field">
              <label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="input-field">
              <label>
                <input
                  type="phone"
                  placeholder="Phone Number"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="input-field">
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="input-field">
              <label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          <label>
            <input type="checkbox" required />
            Li e aceito os termos de uso
          </label>
          <button type="submit">
            <a href="Login">Register</a>
          </button>
        </form>
      </section>
    </main>
  );
};

export default RegisterForm;
