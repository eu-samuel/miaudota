import { StyledColumn, StyledList } from "./styledColumn";
import { useNavigate } from "react-router-dom";
import { goToHome, goToAbout, goToAdopt, goToFaq, goToContact, goToDonate } from "../../routes/coordinator";

export const Column = () => {

  const navigate = useNavigate()

  return (
    <StyledColumn>
      <StyledList>

      <li>
        <button onClick={() => goToHome(navigate)}>
            <img id="nav-img" src="https://i.ibb.co/Dw786kN/nav0.png" />
            Principal
          </button>
        </li>

        <li>
        <button onClick={() => goToAdopt(navigate)}>
            <img id="nav-img" src="https://i.ibb.co/FzGxQmd/nav1.png" />
            Adote Agora
          </button>
        </li>

        <li>
        <button onClick={() => goToDonate(navigate)}>
            <img id="nav-img" src="https://i.ibb.co/3mRxXjm/nav2.png" />
            Doações
          </button>
        </li>

        <li>
        <button onClick={() => goToAbout(navigate)}>
            <img id="nav-img" src="https://i.ibb.co/sJXxnFx/nav3.png" />
            Sobre nós
          </button>
        </li>
        <li>
        <button onClick={() => goToContact(navigate)}>
            <img id="nav-img" src="https://i.ibb.co/25x2hdH/nav4.png" />
            Fale Conosco
          </button>
        </li>
        <li>
        <button onClick={() => goToFaq(navigate)}>
            <img id="nav-img" src="https://i.ibb.co/VLyQH1M/nav5.png" />
            FAQ
          </button>
        </li>
      </StyledList>
      <h2>Nossas mídias sociais</h2>
        <div className="social-media">
        <img id="icon" src="https://i.ibb.co/sCRgMwm/catagram.png"/>
        <img id="icon" src="https://i.ibb.co/gS4b575/catbook.png"/>
        <img id="icon" src="https://i.ibb.co/gFq4VFG/catwitter.png"/>
        </div>
        <span>Ícones por <a href="https://www.deviantart.com/therealflamecat/gallery">@TheRealFlameCat</a></span>
        <span>Rio de Janeiro - RJ.</span>
    </StyledColumn>
  );
};
