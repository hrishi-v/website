import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Liked from "./pages/Liked";
import Login from "./components/Login";
import Register from "./components/Register";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Liked" element={<Liked />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
