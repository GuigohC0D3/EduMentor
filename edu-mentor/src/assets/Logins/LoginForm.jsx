import React from "react";
import "./LoginForm.css"; // Importando estilos

const LoginForm = () => {
  return (
    <main id="container">
      <h1 id="title">EDUMENTOR</h1>
      <section>
        <form>
          <h1>Login</h1>
          <div class="inputbox">
            <input type="text" required />
            <label for="">User Name</label>
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
              Remember me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button>Log in</button>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
