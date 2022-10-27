import { CreateUserDTO, UserEntity } from "@/dto/user";
import { postgresWrite } from "@/infra/postgres";

type Props = {
  email: string;
  password: string;
};

export default async function getUserRepository({
  email,
  password,
}: Props): Promise<CreateUserDTO> {
  const db = postgresWrite.getInstance();

  const query = db<UserEntity>("user")
    .columns(["id", "name", "last_name", "email", "profiles", "created_at"])
    .where({ email, password });

  const user = await query.first();

  return user as CreateUserDTO;
}
