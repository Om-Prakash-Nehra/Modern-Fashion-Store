import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Villas from "./components/Villa/Villas";
import SingleVilla from "./components/Villa/SingleVilla";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import OwnerLogin from "./components/OwnerLogin/OwnerLogin";
import Messages from "./components/Messages/Messages";
import OwnerDashboard from "./components/OwnerDashboard/OwnerDasboard";
import UserLogin from "./components/UserLogin/UserLogin";
import UserSignup from "./components/UserSignup/UserSignup";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/villa/:id" element={<SingleVilla />} />
          <Route path="/owner-login" element={<OwnerLogin />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/owner-dashboard" element={<OwnerDashboard />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-signup" element={<UserSignup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
