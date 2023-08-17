import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
import Profile from "./pages/Profile/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import { Cart } from "./pages/Cart/Cart";
import { Helmet } from "react-helmet";
import { ShopContextProvider } from "./shop-context";

export default function App() {
  return (
    <div className="container">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
