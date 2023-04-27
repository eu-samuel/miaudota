import React from "react";
import { CatsList } from '../../../components/cats';
import { CatCard } from "../../../components/UI/Cards/CatCard";

export const MaleContainer = (props) => {

  const maleCats = CatsList.filter(cat => cat.genre === "male")

  console.log(maleCats);

  return (
    <>
    <p id="back" onClick={() => props.setPage(0)}>Voltar</p>
    <div className="cats-container"> 
    {maleCats.map((cat) => {
      return(
        <CatCard
        name={cat.name}
        image={cat.image}
        color="#0099CC"
        hover="#017095"
        />
      )
    })}
    </div>
    </>
  );
};
