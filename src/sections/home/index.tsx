import {
  Button,
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
  return (
    <MainContainer>
      <TopBar>
        <img src={logo} alt="Logo Lighthouse" />
        <LoginButton>Login</LoginButton>
      </TopBar>
      <ContentsContainer>
        <TextsBox>
          <TitleText>O próximo passo na gestão estratégica</TitleText>
          <SubtitleText>
            Dashboards inteligentes e analytics sem prejudicar sua operação.
          </SubtitleText>
          <Button>Faça um orçamento</Button>
        </TextsBox>
        <img src={frame} alt="Adicionar" height={396} width={491} />
      </ContentsContainer>
    </MainContainer>
  );
}
