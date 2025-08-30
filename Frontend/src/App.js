import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import About from "./About";
import Foods from "./Foods";
import Booking from "./Booking";
import Contact from "./Contact";
import Footer from "./Footer";
import ConfirmBooking from "./ConfirmBooking";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Content />
            <About />
            <Foods />
            <Booking />
            <Contact />
            <Footer />
          </>
        } />
         <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/confirm-booking" element={<ConfirmBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
