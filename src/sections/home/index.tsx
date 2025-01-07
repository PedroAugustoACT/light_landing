import { useNavigate } from "react-router-dom";
import {
  ContentsContainer,
  LoginButton,
  MainContainer,
  SubtitleText,
  TextsBox,
  TitleText,
  TopBar,
} from "./styles";
import logo from "../../assets/lighthouselogo.png";
import frame from "../../assets/frame.png";

export default function HomeSection() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <MainContainer>
      <TopBar>
        <div className="logo-container">
          <img src={logo} alt="Logo Lighthouse" height={200} width={200} />
        </div>
        <div className="button-container">
          <LoginButton onClick={handleLoginClick}>Login</LoginButton>
        </div>
      </TopBar>
      <ContentsContainer>
        <TextsBox>
          <TitleText>O próximo passo na gestão estratégica</TitleText>
          <SubtitleText>
            Dashboards inteligentes e analytics sem prejudicar sua operação.
          </SubtitleText>
        </TextsBox>
        <img src={frame} alt="Adicionar" height={396} width={491} />
      </ContentsContainer>
    </MainContainer>
  );
}
