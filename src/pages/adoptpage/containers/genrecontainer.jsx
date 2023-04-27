import React from "react";

export const GenreContainer = (props) => {
  return (
    <div className="cat-genres">
      <h1>Confira nosso quadro de adoções!</h1>

      <p id="description">
        Disponibilizamos sempre os gatinhos que estamos em mais urgência de
        adoção e atendam todos os nossos requisitos.
      </p>
      <p id="description">
        Porém, nos mande uma mensagem se você tiver especificações quanto a cor,
        sexo ou idade.
      </p>
      <div className="genre-select">
        <img src="https://i.ibb.co/jhCZxKf/image.png" alt="male-cats" onClick={() => props.setPage(1)} />
        <img src="https://i.ibb.co/cDL4QQ6/image.png" alt="female-cats" onClick={() => props.setPage(2)}/>
      </div>

      <p id="credits">Nomes fictícios, todas as imagens foram retiradas do catálogo da <a href="https://www.patinhascarentes.org/gatos-para-adocao">Ong Patinhas Carentes.</a></p>
    </div>
  );
};
