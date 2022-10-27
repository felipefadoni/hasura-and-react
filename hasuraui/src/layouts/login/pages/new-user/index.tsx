import { useUser } from "@/context/user/hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormNewUser } from "../../components/FormNewUser";
import { NewUserBox, NewUserContainer } from "./styles";

export default function NewUserPage() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) navigate("/chat");
  }, [isAuthenticated]);

  return (
    <NewUserContainer>
      <NewUserBox>
        <FormNewUser />
      </NewUserBox>
    </NewUserContainer>
  );
}
