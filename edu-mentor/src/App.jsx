import "./App.css";
import LoginForm from "./assets/components/Logins/LoginForm";
import ForgetPassword from "./assets/components/Forget/ForgetPassword";
import RegisterForm from "./assets/components/Register/RegisterForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandPage from "./assets/components/Landpage/LandPage";
import PerfilAluno from "./assets/components/Perfil/PerfilAluno";
import HomePage from "./assets/components/Home/HomePage";
import TutorLogin from "./assets/components/Tutor/TutorLogin";
import TutorRegister from "./assets/components/Tutor/TutorRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/TutorLogin" element={<TutorLogin />} />
        <Route path="/TutorRegister" element={<TutorRegister />} />
        <Route path="/Forget" element={<ForgetPassword />} />
        <Route path="/Land" element={<LandPage />} />
        <Route path="/Perfil" element={<PerfilAluno />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="*" element={<LandPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
