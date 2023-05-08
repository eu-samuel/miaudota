import {
    goToBebezão,
    goToChico,
    goToCrispim,
    goToFiel,
    goToFrajola,
    goToGael,
    goToGeorge,
    goToJoaquim,
    goToLeão,
    goToTigrão
} from './coordinator'

import {
    goToChiara,
    goToDinorah,
    goToKakau,
    goToKika,
    goToLilica,
    goToMaya,
    goToRainha,
    goToTieta,
    goToTigresa,
    goToTina
} from './coordinator';

export const CatRoutes = (name, navigate) => {

    if(name === "Bebezão"){
        return goToBebezão(navigate)
    }  if(name === "Chico"){
        return goToChico(navigate)
    }  if(name === "Crispim"){
        return goToCrispim(navigate)
    }  if(name === "Fiel"){
        return goToFiel(navigate)
    }  if(name === "Frajola"){
        return goToFrajola(navigate)
    }  if(name === "Gael"){
        return goToGael(navigate)
    }  if(name === "George"){
        return goToGeorge(navigate)
    }  if(name === "Joaquim"){
        return goToJoaquim(navigate)
    }  if(name === "Leão"){
        return goToLeão(navigate)
    }  if(name === "Tigrão"){
        return goToTigrão(navigate)
    }  
    
        if(name === "Chiara"){
        return goToChiara(navigate)
    }  if(name === "Dinorah"){
        return goToDinorah(navigate)
    }  if(name === "Kakau"){
        return goToKakau(navigate)
    }  if(name === "Kika"){
        return goToKika(navigate)
    }  if(name === "Lilica"){
        return goToLilica(navigate)
    }  if(name === "Maya"){
        return goToMaya(navigate)
    }  if(name === "Rainha"){
        return goToRainha(navigate)
    }  if(name === "Tieta"){
        return goToTieta(navigate)
    }  if(name === "Tigresa"){
        return goToTigresa(navigate)
    }  if(name === "Tina"){
        return goToTina(navigate)
    }
}