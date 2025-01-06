import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80%;
  width: calc(100vw - 18px);
  background-color: var(--primary500);
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: auto;
  padding: 20px 20px;
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
`;

export const SubtitleText = styled.p`
  font-family: "Roboto Flex", serif;
  font-weight: 500;
  font-size: 20px;
  color: white;
  margin-top: 3rem;
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
