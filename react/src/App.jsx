import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Results from "./pages/Results";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/results" element={<Results />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
