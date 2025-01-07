import {
  MainContainer,
  LoginBox,
  Title,
  Input,
  LoginButton,
  FormContainer,
  BackButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <MainContainer>
      <LoginBox>
        <Title>Login</Title>
        <FormContainer>
          <Input type="email" placeholder="Digite seu email" />
          <Input type="password" placeholder="Digite sua senha" />
          <LoginButton>Entrar</LoginButton>
          <BackButton onClick={handleBackClick}>Voltar</BackButton>
        </FormContainer>
      </LoginBox>
    </MainContainer>
  );
}
