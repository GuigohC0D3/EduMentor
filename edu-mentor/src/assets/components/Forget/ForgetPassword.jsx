import React from "react";
import "./ForgetPassword.css"; // Importando estilos

const ForgetPassword = () => {
  return (
    <main id="container">
      <h1 id="title">EDUMENTOR</h1>
      <section>
        <form>
          <div class="inputbox">
            <input type="password" required />
            <label for="">Password</label>
          </div>
          <div class="inputbox">
            <input type="password" required />
            <label for="">Confirm Password</label>
          </div>
          <button>
            <a href="#">Send</a>
          </button>
        </form>
      </section>
    </main>
  );
};

export default ForgetPassword;
