import { LoginForm } from "../../components/Form";
import { LoginBox, LoginContainer } from "./styles";

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </LoginContainer>
  );
}
