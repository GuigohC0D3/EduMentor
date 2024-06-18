import React from "react";
import "./TutorRegister.css"; // Importando estilos

const TutorRegister = () => {
  return (
    <main id="container">
      <div>
        <h1 id="title">EDUMENTOR</h1>
      </div>
      <section className="wrapper">
        <form>
          <h1>Register do Tutor</h1>

          <div className="input-register">
            <div className="input-field">
              <label>
                <input type="text" placeholder="Full Name" required />
              </label>
            </div>
            <div className="input-field">
              <label>
                <input type="text" placeholder="RA" required />
              </label>
            </div>
          </div>

          <div className="input-register">
            <div className="input-field">
              <label>
                <input type="email" placeholder="Email" required />
              </label>
            </div>
            <div className="input-field">
              <label>
                <input type="phone" placeholder="Phone Number" required />
              </label>
            </div>
            <div className="input-field">
              <label>
                <input type="password" placeholder="Password" required />
              </label>
            </div>
            <div className="input-field">
              <label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </label>
            </div>
          </div>

          <label>
            {" "}
            <input type="checkbox" /> I hereby declare that the above
            information provied is true and correct
          </label>
          <label>
            {" "}
            <input type="checkbox" /> I have read and accept the terms of use
          </label>
          <button type="subimit">Register</button>
        </form>
      </section>
    </main>
  );
};

export default TutorRegister;
