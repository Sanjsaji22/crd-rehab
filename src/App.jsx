// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Officers from "./pages/Officers";
import DonationPage from "./pages/DonationPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/donation-page" element={<DonationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
