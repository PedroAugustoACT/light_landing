import styled from "styled-components";

const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1200px",
};

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--primary500);
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .logo-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .button-container {
    flex: 0;
  }
`;

export const LoginButton = styled.button`
  background-color: var(--secondary300);
  font-family: "Roboto Flex", serif;
  color: var(--text);
  height: 3rem;
  width: 6.313rem;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
    img {
      max-width: 100%;
      height: auto;
    }
    padding: 2rem;
    gap: 1rem;
  }
`;

export const TextsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35rem;
`;

export const TitleText = styled.p`
  font-family: "League Gothic", serif;
  font.weight: 400;
  color: var(--text);
  font-size: 96px;
  line-height: 1;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    width: 340px;
    font-size: 48px;
  }
`;

export const SubtitleText = styled.p`
  font-family: "Roboto Flex", serif;
  font-weight: 500;
  font-size: 20px;
  color: white;
  margin-top: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 340px;
    font-size: 20px;
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  font-family: "Roboto Flex", serif;
  font-weight: 600;
  font-size: 18px;
  background-color: white;
  color: var(--text);
  height: 3.5rem;
  width: 15rem;
  margin-top: 2rem;
  box-shadow: 0px 8px 16px 0px var(--primary300);
  border: none;
  border-radius: 15px;
`;
