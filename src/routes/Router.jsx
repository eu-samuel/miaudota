import { Column } from "../components/column/column"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CatsList } from "../components/cats";
import { HomePage } from "../pages/homepage/homepage";
import { AdoptPage } from "../pages/adoptpage/adoptpage";
import { DonatePage } from "../pages/donatepage/donatepage";
import { AboutPage } from "../pages/aboutpage/aboutpage";
import { FaqPage } from "../pages/faqpage/faqpage";
import { FemalePage } from '../pages/catsPage/FemalePage';
import { ChiaraPage } from './../pages/catsPage/FemaleCats/ChiaraPage';
import { DinorahPage } from './../pages/catsPage/FemaleCats/DinorahPage';
import { KakauPage } from './../pages/catsPage/FemaleCats/KakauPage';
import { KikaPage } from './../pages/catsPage/FemaleCats/KikaPage';
import { LilicaPage } from './../pages/catsPage/FemaleCats/LilicaPage';
import { MayaPage } from './../pages/catsPage/FemaleCats/MayaPage';
import { RainhaPage } from './../pages/catsPage/FemaleCats/RainhaPage';
import { TietaPage } from './../pages/catsPage/FemaleCats/TietaPage';
import { TigresaPage } from './../pages/catsPage/FemaleCats/TigresaPage';
import { TinaPage } from './../pages/catsPage/FemaleCats/TinaPage';
import { MalePage } from '../pages/catsPage/MalePage';
import { BebezaoPage } from './../pages/catsPage/MaleCats/BebezãoPage';
import { ChicoPage } from './../pages/catsPage/MaleCats/ChicoPage';
import { CrispimPage } from './../pages/catsPage/MaleCats/CrispimPage';
import { FielPage } from './../pages/catsPage/MaleCats/FielPage';
import { FrajolaPage } from './../pages/catsPage/MaleCats/FrajolaPage';
import { GaelPage } from './../pages/catsPage/MaleCats/GaelPage';
import { GeorgePage } from './../pages/catsPage/MaleCats/GeorgePage';
import { JoaquimPage } from './../pages/catsPage/MaleCats/JoaquimPage';
import { LeaoPage } from './../pages/catsPage/MaleCats/LeãoPage';
import { TigraoPage } from './../pages/catsPage/MaleCats/TigrãoPage';


export const Router = () => {

  return (
    <BrowserRouter>
          <Column/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/adote" element={<AdoptPage/>} />
        <Route path="/contribua" element={<DonatePage/>} />
        <Route path="/sobre" element={<AboutPage/>} />
        <Route path="/adote/femeas" element={<FemalePage CatsList={CatsList}/>}/>
        <Route path="/adote/femeas/chiara" element={<ChiaraPage/>}/>
        <Route path="/adote/femeas/dinorah" element={<DinorahPage/>}/>
        <Route path="/adote/femeas/kakau" element={<KakauPage/>}/>
        <Route path="/adote/femeas/kika" element={<KikaPage/>}/>
        <Route path="/adote/femeas/lilica" element={<LilicaPage/>}/>
        <Route path="/adote/femeas/maya" element={<MayaPage/>}/>
        <Route path="/adote/femeas/rainha" element={<RainhaPage/>}/>
        <Route path="/adote/femeas/tieta" element={<TietaPage/>}/>
        <Route path="/adote/femeas/tigresa" element={<TigresaPage/>}/>
        <Route path="/adote/femeas/tina" element={<TinaPage/>}/>
        
        <Route path="/adote/machos" element={<MalePage CatsList={CatsList}/>}/>
        <Route path="/adote/machos/bebezão" element={<BebezaoPage/>}/>
        <Route path="/adote/machos/chico" element={<ChicoPage/>}/>
        <Route path="/adote/machos/crispim" element={<CrispimPage/>}/>
        <Route path="/adote/machos/fiel" element={<FielPage/>}/>
        <Route path="/adote/machos/frajola" element={<FrajolaPage/>}/>
        <Route path="/adote/machos/gael" element={<GaelPage/>}/>
        <Route path="/adote/machos/george" element={<GeorgePage/>}/>
        <Route path="/adote/machos/joaquim" element={<JoaquimPage/>}/>
        <Route path="/adote/machos/leão" element={<LeaoPage/>}/>
        <Route path="/adote/machos/tigrao" element={<TigraoPage/>}/>

        <Route path="/faq" element={<FaqPage/>} />
      </Routes>
    </BrowserRouter>
  );
  }
