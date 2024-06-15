import "./App.css";
import LoginForm from "./assets/components/Logins/LoginForm";
import RegisterForm from "./assets/components/Register/RegisterForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
