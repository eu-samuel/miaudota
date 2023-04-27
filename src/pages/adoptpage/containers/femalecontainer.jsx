import React from "react";
import { CatsList } from '../../../components/cats';
import { CatCard } from "../../../components/UI/Cards/CatCard";

export const FemaleContainer = (props) => {

  const femaleCats = CatsList.filter(cat => cat.genre === "female")


  return (
    <>
    <p id="back" onClick={() => props.setPage(0)}>Voltar</p>
    <div className="cats-container"> 
    {femaleCats.map((cat) => {
      return(
        <CatCard
        name={cat.name}
        image={cat.image}
        color="#FF0099"
        hover="#ac0569"
        />
      )
    })}
    </div>
    </>
  );
};
