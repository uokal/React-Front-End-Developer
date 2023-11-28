import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./pages/form";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
