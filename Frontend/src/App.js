import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import About from "./About";
import Foods from "./Foods";
import Booking from "./Booking";
import Contact from "./Contact";
import Footer from "./Footer";
import ConfirmBooking from "./ConfirmBooking";

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
        <Route path="/confirm-booking" element={<ConfirmBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
