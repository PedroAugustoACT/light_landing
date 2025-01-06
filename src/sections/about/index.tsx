import {
  ContentBox,
  ContentsContainer,
  MainContainer,
  SubtitleText,
} from "./styles";
import lightHouseLogo2 from "../../assets/lighthouselogo_2.png";

export default function AboutSection() {
  return (
    <MainContainer>
      <ContentsContainer>
        <img
          src={lightHouseLogo2}
          alt="Logo da Lighthouse com o farol e o nome"
          height={224}
          width={224}
        />
        <ContentBox>
          <SubtitleText>
            A Lighthouse é uma empresa inovadora comprometida em iluminar o caminho para o sucesso dos nossos clientes.
          </SubtitleText>
          <SubtitleText>
            Fundada com a missão de oferecer soluções modernas e eficazes, somos especializados em desenvolvimento de tecnologia, consultoria estratégica e projetos personalizados que atendem às demandas do mundo atual.
          </SubtitleText>
          <SubtitleText>
            Nosso diferencial está na combinação de criatividade e tecnologia, entregando resultados que transformam negócios e impactam positivamente a vida das pessoas. Acreditamos que, assim como um farol guia os navegantes, somos parceiros confiáveis para guiar empresas rumo a um futuro próspero.
          </SubtitleText>
        </ContentBox>
      </ContentsContainer>
    </MainContainer>
  );
}
