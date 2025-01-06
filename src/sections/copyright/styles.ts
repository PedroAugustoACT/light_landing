import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background-color: var(--text);
`;

export const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 3rem;
  gap: 5rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const TitleText = styled.p`
  font-family: "Roboto Flex", serif;
  font-weight: 700;
  font-size: 24px;
  color: var(--text);
  margin-top: 2rem;
`;

export const SubtitleText = styled.p`
  font-family: "Roboto Flex", serif;
  font-weight: 500;
  font-size: 20px;
  text-align: justify;
  color: white;
  margin-top: 1.5rem;
`;
