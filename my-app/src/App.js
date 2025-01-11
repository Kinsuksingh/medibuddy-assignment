import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFoundPage from './components/NotFoundPage'
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Wallet from "./components/Wallet";

function App() {
  return (
    <Router>
      <Header/>
      <div className="flex flex-col min-h-screen" style={{ paddingTop: "var(--header-height)" }}>
        <Routes>
          {/* Updated to Routes component, with element prop */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wallet" element={<Wallet />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
