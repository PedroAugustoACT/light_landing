import {
  ContentBox,
  ContentsContainer,
  MainContainer,
  SubtitleText,
} from "./styles";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo_X from "../../assets/logo_X.png";


export default function CopyrightSection() {
  return (
    <MainContainer>
      <ContentsContainer>
        <ContentBox>
          <SubtitleText>
            © 2025 Lighthouse Software Systems. Todos os direitos reservados
          </SubtitleText>
          <SubtitleText>
            Política de Privacidade
          </SubtitleText>
          <SubtitleText>
            Termos de Uso
          </SubtitleText>
        </ContentBox>
        <ContentBox>
          <img
            src={logo_X}
            alt="Logo da Rede Social: X"
            height={18}
            width={18}
          />
          <img
            src={instagram}
            alt="Logo da Rede Social: Instagram"
            height={18}
            width={18}
          />
          <img
            src={linkedin}
            alt="Logo da Rede Social: LinkedIn"
            height={18}
            width={18}
          />
        </ContentBox>
      </ContentsContainer>
    </MainContainer>
  );
}
