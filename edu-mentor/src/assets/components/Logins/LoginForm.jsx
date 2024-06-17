import React from "react";
import "./LoginForm.css"; // Importando estilos

const LoginForm = () => {
  return (
    <main id="container">
      <h1 id="title">EDUMENTOR</h1>
      <section>
        <form>
          <h1>Login do Aluno</h1>
          <div class="inputbox">
            <input type="text" required />
            <label for="">UserName</label>
          </div>
          <div class="inputbox">
            <input type="email" required />
            <label for="">Email</label>
          </div>
          <div class="inputbox">
            <input type="password" required />
            <label for="">Password</label>
          </div>
          <div class="forget">
            <label for="">
              <input type="checkbox" />
              <h4>Remember me</h4>
            </label>
          </div>
          <div className="recall-forget">
            <label>
              <a href="Forget">Forgot Password?</a>
            </label>
          </div>
          <button>Log in</button>
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
