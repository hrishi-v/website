import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
import Login from "./components/Login";
import Register from "./components/Register";
import { Cart } from "./pages/Cart/Cart";
import { ShopContextProvider } from "./shop-context";
import UniversalNavBar from "./components/UniversalNavBar";

export default function App() {
  return (
    <div className="container">
      <ShopContextProvider>
        <Router>
          <UniversalNavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
