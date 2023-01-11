import React from "react";
import Registerpage from "pages/Registerpage";
import CALCULATORPAGE from "pages/CALCULATORPAGE";
import ContactUsPage from "pages/ContactUsPage";
import PPaymentPlanPage from "pages/PPaymentPlanPage";
import ProfilePage from "pages/ProfilePage";
import PCongratulations from "pages/PCongratulations";
import PTransferDetails from "pages/PTransferDetails";
import PSecurePayment from "pages/PSecurePayment";
import PPaymentofrentalPage from "pages/PPaymentofrentalPage";
import PRentApartmentPage from "pages/PRentApartmentPage";
import PropertiesPage from "pages/PropertiesPage";
import LoginPage from "pages/LoginPage";
import AboutUsPage from "pages/AboutUsPage";
import LandingPageDesktop from "pages/LandingPageDesktop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageDesktop />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/propertiespage" element={<PropertiesPage />} />
        <Route path="/prentapartmentpage" element={<PRentApartmentPage />} />
        <Route
          path="/ppaymentofrentalpage"
          element={<PPaymentofrentalPage />}
        />
        <Route path="/psecurepayment" element={<PSecurePayment />} />
        <Route path="/ptransferdetails" element={<PTransferDetails />} />
        <Route path="/pcongratulations" element={<PCongratulations />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/ppaymentplanpage" element={<PPaymentPlanPage />} />
        <Route path="/contactuspage" element={<ContactUsPage />} />
        <Route path="/calculatorpage" element={<CALCULATORPAGE />} />
        <Route path="/registerpage" element={<Registerpage />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
