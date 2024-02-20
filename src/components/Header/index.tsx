import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../contexts/auth/useAuth";
import logoOficial from "../../assets/logoOficial.png";
import { ButtonsHeader } from "../Buttons/ButtonsHeader";

import iconMotor from "../../assets/iconMotor2.png";
import iconRegistration from "../../assets/iconRegistration.png";
import iconExit from "../../assets/iconExit.png";

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.ContentLogo>
        <C.Logo>
          <a href="/home">
            <img src={logoOficial} alt="logo da Nova Cilindrada" />
          </a>
        </C.Logo>
      </C.ContentLogo>
      <C.ContentButtons>
        <ButtonsHeader onClick={() => [navigate("/home")]}>
          <span>MODELOS</span>
        </ButtonsHeader>
        <ButtonsHeader onClick={() => [navigate("/registration")]}>
          <span>CADASTRO</span>
        </ButtonsHeader>
        <ButtonsHeader exit="exit" onClick={() => [logout(), navigate("/")]}>
          <span>SAIR</span>
        </ButtonsHeader>
      </C.ContentButtons>
      <C.ContentIcons>
        <a href="/home/">
          <img src={iconMotor} alt="modelos disponíveis" />
        </a>
        <a href="/registration/">
          <img src={iconRegistration} alt="cadastro de usuario" />
        </a>
        <a href="/">
          <img src={iconExit} alt="sair" />
        </a>
      </C.ContentIcons>
    </C.Container>
  );
}

export default Header;
