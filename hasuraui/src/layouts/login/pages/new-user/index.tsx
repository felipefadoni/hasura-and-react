import { FormNewUser } from "../../components/FormNewUser";
import { NewUserBox, NewUserContainer } from "./styles";

export default function NewUserPage() {
  return (
    <NewUserContainer>
      <NewUserBox>
        <FormNewUser />
      </NewUserBox>
    </NewUserContainer>
  );
}
