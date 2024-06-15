import React from "react";
import "./RegisterForm.css"; // Importando estilos

const RegisterForm = () => {
  return (
    <main id="container">
      <h1 id="title">EDUMENTOR</h1>
      <section className="wrapper">
        <form>
          <h1>Registration</h1>

          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Username" required />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <input type="phone" placeholder="Phone Number" required />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Confirm Password" required />
            </div>
          </div>

          <label>
            {" "}
            <input type="checkbox" /> I hereby declare that the above
            information provied is true and correct
          </label>
          <button type="subimit" class="btn">
            Register
          </button>
        </form>
      </section>
    </main>
  );
};

export default RegisterForm;
