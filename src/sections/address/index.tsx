import {
  ContentBox,
  ContentsContainer,
  MainContainer,
  SubtitleText,
  TitleText,
} from "./styles";

export default function AddressSection() {
  return (
    <MainContainer>
      <ContentsContainer>
        <ContentBox>
          <TitleText>Onde estamos localizados?</TitleText>
          <SubtitleText>
            Estamos localizados em um ponto estratégico para atender você com eficiência e conforto. Nosso endereço é Rua das Inovações, 123, no coração do Bairro Criativo, na Cidade do Futuro. Venha nos visitar e conhecer de perto o que temos a oferecer!
          </SubtitleText>
        </ContentBox>
        <ContentBox>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8389864384743!2d-122.08424968542063!3d37.4219997798257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba201b41f0c9%3A0xa40a0e8af6c7369d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617657467873!5m2!1sen!2sus&hl=pt"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </ContentBox>
      </ContentsContainer>
    </MainContainer>
  );
}
