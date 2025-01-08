import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary500);
`;

export const LoginBox = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-family: "Roboto Flex", serif;
  font-size: 2rem;
  color: var(--primary500);
  margin-bottom: 1rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: white;
  border: 1px solid var(--primary300);
  border-radius: 5px;
  font-family: "Roboto Flex", serif;
  font-size: 1rem;
  color: var(--text);
  &:focus {
    outline: none;
    border-color: var(--primary700);
  }
`;

export const LoginButton = styled.button`
  background-color: var(--secondary300);
  color: white;
  font-family: "Roboto Flex", serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--secondary500);
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  color: var(--primary500);
  font-family: "Roboto Flex", serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem;
  border: 1px solid var(--primary500);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: var(--primary300);
    color: white;
  }
`;
