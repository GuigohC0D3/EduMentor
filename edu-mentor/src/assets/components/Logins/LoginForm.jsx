import React from "react";
import "./LoginForm.css"; // Importando estilos

const LoginForm = () => {
  return (
    <main id="container">
      <div>
        <h1  style={{ color: 'white' }} id="title" >EDUMENTOR</h1>
      </div>
      <section>
        <form>
          <h1>Login do Aluno</h1>
          <div class="inputbox">
            <input type="text" required />
            <label for="text">UserName</label>
          </div>
          <div class="inputbox">
            <input type="email" required />
            <label for="email">Email</label>
          </div>
          <div class="inputbox">
            <input type="password" required />
            <label for="password">Password</label>
          </div>
          <div class="forget">
            <label>
              <input type="checkbox" />
              <h4>Remember me</h4>
            </label>
          </div>
          <div className="recall-forget">
            <label>
              <a href="Forget">Forgot Password?</a>
            </label>
          </div>
          <button class="btn">
            <a href="Perfil" className="lgn">
              Login
            </a>
          </button>
          <div className="create-forget">
            <label>
              <p>
                Don't have an account? <a href="Register">Register</a>
              </p>
            </label>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
