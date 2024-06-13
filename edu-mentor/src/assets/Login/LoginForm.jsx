import React from "react";
import "./LoginForm.css"; // Importando estilos

const LoginForm = () => {
  return (
    <main id="container">
      <h1>EDUMENTOR</h1>
      <form id="login_form">
        <div id="form_header">
          <h2>Login</h2>
        </div>

        <div id="inputs">
          <div className="input_box">
            <label htmlFor="name">
              Name
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" id="name" name="name" />
              </div>
            </label>
          </div>

          <div className="input_box">
            <label htmlFor="email">
              Email
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" id="email" name="email" />
              </div>
            </label>
          </div>

          <div className="input_box">
            <label htmlFor="password">
              Password
              <div className="input-field">
                <i className="fas fa-key"></i>
                <input type="password" id="password" name="password" />
              </div>
            </label>
            <div id="forgot_password">
              <a href="#"> Forgot your password? </a>
            </div>
          </div>
        </div>

        <button type="submit" id="login_button">
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
