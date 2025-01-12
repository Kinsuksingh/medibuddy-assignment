import React, { lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


// Lazy load components for better performance
const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const Cart = lazy(() => import("./components/Cart"));
const Wallet = lazy(() => import("./components/Wallet"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const OurServices = lazy(() => import("./components/OurServices"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));
const Faq = lazy(()=> import("./components/Faq"))
const Booking = lazy(()=> import ('./components/Booking'))

// Function to dynamically update the page title based on the route
const DynamicTitle = ({ defaultTitle = "E-Hospital" }) => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home - E-Hospital",
      "/login": "Login - E-Hospital",
      "/signup": "Signup - E-Hospital",
      "/cart": "Your Cart - E-Hospital",
      "/wallet": "Wallet - E-Hospital",
      "/about": "About Us - E-Hospital",
      "/services": "Our Services - E-Hospital",
      "/contact": "Contact Us - E-Hospital",
      "/faq": "Faq - E-Hospital",
      "/booking" : "Booking Form - E-Hospital",
    };

    document.title = titles[location.pathname] || defaultTitle;
  }, [location, defaultTitle]);

  return null; // No UI for this component
};

function App() {
  return (
    <Router>
        <DynamicTitle />
        <Header />
        <div
          className="flex flex-col min-h-screen"
          style={{ paddingTop: "var(--header-height)" }}
        >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<OurServices />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
