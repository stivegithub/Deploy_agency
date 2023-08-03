import Navigation from "./Navigation/Navigation";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agence-communication" element={<Navigation />} />
        <Route index path="/training" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
