import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/Hero";
import Blueprint from "./components/Blueprint";
import WhatIsPurbi from "./components/WhatIsPurbi";
import CoreFocusAreas from "./components/CoreFocusAreas";
import WhyPurbi from "./components/WhyPurbi";
import CoreDomains from "./components/CoreDomains";
import WhoWeServe from "./components/WhoWeServe";
import CallToAction from "./components/CallToAction";
import InstitutionalAlignment from "./components/InstitutionalAlignment";
import Partners from "./components/Partners";
import GlobalAdvisors from "./components/GlobalAdvisors";
import GlobalAdvisorsPage from "./components/GlobalAdvisorsPage";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-sans">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Blueprint />
                <WhatIsPurbi />
                <CoreFocusAreas />
                <WhyPurbi />
                <CoreDomains />
                <WhoWeServe />
                <CallToAction />
                <InstitutionalAlignment />
                {/* <GlobalAdvisors /> removed from home page */}
                <ContactForm />
              </>
            }
          />
          <Route path="/advisors" element={<GlobalAdvisorsPage />} />
        </Routes>
        <Footer />
        <Analytics />
      </Router>
    </div>
  );
}

export default App;
