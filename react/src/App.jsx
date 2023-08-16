import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Profile from "./pages/Profile/Profile";
import Liked from "./pages/Liked/Liked";
import Login from "./components/Login";
import Register from "./components/Register";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route index element={<Shop />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Liked" element={<Liked />} />
        </Routes>
      </Router>
    </div>
  );
}
