import { StyledColumn, StyledList } from "./styledColumn";

export const Column = () => {
  return (
    <StyledColumn>
      <StyledList>
        <li>
          <button>
            <img id="nav-img" src="https://i.ibb.co/FzGxQmd/nav1.png" />
            Adote Agora
          </button>
        </li>

        <li>
          <button>
            <img id="nav-img" src="https://i.ibb.co/3mRxXjm/nav2.png" />
            Apadrinhe
          </button>
        </li>

        <li>
          <button>
            <img id="nav-img" src="https://i.ibb.co/25x2hdH/nav4.png" />
            Fale Conosco
          </button>
        </li>
        <li>
          <button>
            <img id="nav-img" src="https://i.ibb.co/VLyQH1M/nav5.png" />
            Blog
          </button>
        </li>
        <li>
          <button>
            <img id="nav-img" src="https://i.ibb.co/NY0WmVf/nav6.png" />
            FAQ
          </button>
        </li>
      </StyledList>
      <h2>Nossas mídias sociais</h2>
        <div className="social-media">
        <img id="icon" src="https://i.ibb.co/sCRgMwm/catagram.png"/>
        <img id="icon" src="https://i.ibb.co/gS4b575/catbook.png"/>
        <img id="icon" src="https://i.ibb.co/gFq4VFG/catwitter.png"/>
        <img id="icon" src="https://i.ibb.co/zXkVqbz/catmail.png"/>
        </div>
        <span>Ícones por <a href="https://www.deviantart.com/therealflamecat/gallery">@TheRealFlameCat</a></span>

        <p>Rio de Janeiro - RJ.</p>
    </StyledColumn>
  );
};
