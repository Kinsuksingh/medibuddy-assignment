import React, { lazy, Suspense, useEffect } from "react";
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
const Faq = lazy(() => import("./components/Faq"));
const Booking = lazy(() => import("./components/Booking"));

// Utility function to set dynamic page titles
const DynamicTitle = ({ defaultTitle = "E-Hospital" }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      "/booking": "Booking Form - E-Hospital",
    };

    document.title = titles[location.pathname] || defaultTitle;
  }, [location, defaultTitle]);

  return null; // No UI for this component
};

// ScrollToTop component to ensure scrolling to the top on every route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
};

// Error boundary component for graceful error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <DynamicTitle />
      <ScrollToTop />
      <Header />
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen" style={{ paddingTop: "var(--header-height)" }}>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </div>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}

export default App;
