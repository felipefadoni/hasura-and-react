import { useUser } from "@/context/user/hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/Form";
import { LoginBox, LoginContainer } from "./styles";

export default function LoginPage() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) navigate("/chat");
  }, [isAuthenticated]);

  return (
    <LoginContainer>
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </LoginContainer>
  );
}
