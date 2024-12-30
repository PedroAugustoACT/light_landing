import {
  ContentBox,
  ContentsContainer,
  MainContainer,
  SubtitleText,
  TitleText,
} from "./styles";
import barChart from "../../assets/bar_chart.png";
import codeBlocks from "../../assets/code_blocks.png";
import database from "../../assets/database.png";

export default function CarrousselSection() {
  return (
    <MainContainer>
      <ContentsContainer>
        <ContentBox>
          <img
            src={barChart}
            alt="Ícone de gráfico de barras"
            height={48}
            width={48}
          />
          <TitleText>Insights poderosos em um clique</TitleText>
          <SubtitleText>
            Transforme dados complexos em gráficos e análises claros, prontos
            para ajudar na tomada de decisão.
          </SubtitleText>
        </ContentBox>
        <ContentBox>
          <img
            src={codeBlocks}
            alt="Ícone de gráfico de barras"
            height={48}
            width={48}
          />
          <TitleText>Soluções Personalizadas para Sua Gestão</TitleText>
          <SubtitleText>
            Desenvolvemos sistemas sob demanda que atendem às necessidades
            únicas do seu negócio.
          </SubtitleText>
        </ContentBox>
        <ContentBox>
          <img
            src={database}
            alt="Ícone de gráfico de barras"
            height={48}
            width={48}
          />
          <TitleText>Decisões Baseadas em Dados Reais</TitleText>
          <SubtitleText>
            Não se preocupe com adaptar sua operação, nós utilizamos os seus
            dados da mesma forma que você!
          </SubtitleText>
        </ContentBox>
      </ContentsContainer>
    </MainContainer>
  );
}
