import "./App.css";
import LoginForm from "./assets/components/Logins/LoginForm";
import ForgetPassword from "./assets/components/Forget/ForgetPassword";
import RegisterForm from "./assets/components/Register/RegisterForm";
import HomePage from "./assets/components/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Forget" element={<ForgetPassword />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
