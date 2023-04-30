import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { goToAdopt } from "./coordinator";
import { HomePage } from "../pages/homepage/homepage";
import { AdoptPage } from "../pages/adoptpage/adoptpage";
import { DonatePage } from "../pages/donatepage/donatepage";
import { AboutPage } from "../pages/aboutpage/aboutpage";
import { ContactPage } from "../pages/contactpage/contactpage";
import { FaqPage } from "../pages/faqpage/faqpage";
import { FemalePage } from "../pages/catsPage/FemalePage";
import { MalePage } from "../pages/catsPage/MalePage";
import { Column } from "../components/column/column"
import { CatsList } from './../components/cats';


export const Router = () => {

  const [modelCat, setModelCat] = useState([])
  const [showCat, setShowCat] = useState(false)
  
  const backToAdopt = (navigate) => {
    goToAdopt(navigate) 
    setShowCat(false)}

  const content = [modelCat, setModelCat, showCat, setShowCat, backToAdopt]

  return (
    <BrowserRouter>
          <Column/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/adote" element={<AdoptPage/>} />
        <Route path="/contribua" element={<DonatePage/>} />
        <Route path="/sobre" element={<AboutPage/>} />
        <Route path="/adote/femeas" element={<FemalePage content={content} CatsList={CatsList}/>}/>
        <Route path="/adote/machos" element={<MalePage content={content} CatsList={CatsList}/>}/>
        <Route path="/fale-conosco" element={<ContactPage/>} />
        <Route path="/faq" element={<FaqPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
