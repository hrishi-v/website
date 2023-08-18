import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
import Login from "./components/Login";
import Register from "./components/Register";
import { Cart } from "./pages/Cart/Cart";
import { ShopContextProvider } from "../src/context/shop-context";
import UniversalNavBar from "./components/UniversalNavBar";
import { NavbarV2 } from "./components/NavbarV2";

export default function App() {
  return (
    <ShopContextProvider>
      <div className="App">
        <Router>
          <NavbarV2 />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </ShopContextProvider>
  );
}
