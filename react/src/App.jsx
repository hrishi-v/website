import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
