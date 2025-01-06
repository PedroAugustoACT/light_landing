import {
  ContentsContainer,
  MainContainer,
} from "./styles";
import lighthouseLogo3 from "../../assets/lighthosuelogo_3.png";


export default function Footer() {
  return (
    <MainContainer>
      <ContentsContainer>
          <img
            src={lighthouseLogo3}
            alt="Logo da Lighthouse apenas com o farol"
            width={120}
          />
      </ContentsContainer>
    </MainContainer>
  );
}
