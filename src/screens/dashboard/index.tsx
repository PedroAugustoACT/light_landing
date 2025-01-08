import {
  MainContainer,
  LoginBox,
  Title,
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
        <Title>Dashboard em andamento...</Title>
        <FormContainer>
          <BackButton onClick={handleBackClick}>Sair</BackButton>
        </FormContainer>
      </LoginBox>
    </MainContainer>
  );
}
