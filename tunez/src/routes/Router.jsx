import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homepage/homepage";
import { AdoptPage } from "../pages/adoptpage/adoptpage";
import { DonatePage } from "../pages/donatepage/donatepage";
import { AboutPage } from "../pages/aboutpage/aboutpage";
import { ContactPage } from "../pages/contactpage/contactpage";
import { FaqPage } from "../pages/faqpage/faqpage";
import { Column } from "../components/column/column"

export const Router = () => {

  return (
    <BrowserRouter>
          <Column/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/adote" element={<AdoptPage/>} />
        <Route path="/contribua" element={<DonatePage/>} />
        <Route path="/sobre" element={<AboutPage/>} />
        <Route path="/fale-conosco" element={<ContactPage/>} />
        <Route path="/faq" element={<FaqPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
