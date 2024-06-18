import React, { useState } from "react";
import "./PerfilAluno.css";

function PerfilAluno() {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("nmaxwell");
  const [email, setEmail] = useState("nmaxwell@mail.com");
  const [company, setCompany] = useState("Company Ltd.");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };

  return (
    <div className="account-settings">
      <h1>Perfil do Aluno</h1>
      <div className="general">
        <h2>General</h2>
        <div className="profile-image">
          <label htmlFor="profile-image-upload">
            {profileImage ? (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Profile Picture"
              />
            ) : (
              <div className="placeholder">
                <p>Upload new photo</p>
              </div>
            )}
          </label>
          <input
            type="file"
            id="profile-image-upload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
          <button type="button" className="reset-button">
            Reset
          </button>
        </div>
        <div className="username">
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            id="username-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="email">
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Your email is not confirmed. Please check your inbox.</p>
          <button type="button" className="resend-confirmation-button">
            Resend confirmation
          </button>
        </div>
        <div className="company">
          <label htmlFor="company-input">Company</label>
          <input
            type="text"
            id="company-input"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>
      <button type="button" className="save-changes-button">
        Save changes
      </button>
      <button type="button" className="cancel-button">
        Cancel
      </button>
    </div>
  );
}

export default PerfilAluno;
