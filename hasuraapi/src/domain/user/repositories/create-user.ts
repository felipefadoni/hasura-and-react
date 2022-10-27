import { CreateUserDTO, UserEntity } from "@/dto/user";
import { postgresWrite } from "@/infra/postgres";

type Props = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  profiles: string[];
};

export default async function createUserRepository({
  email,
  last_name,
  name,
  password,
  profiles,
}: Props): Promise<CreateUserDTO> {
  const db = postgresWrite.getInstance();

  const query = db<UserEntity>("user")
    .insert({
      email,
      last_name,
      name,
      password,
      profiles: JSON.stringify(profiles),
      created_at: new Date(),
    })
    .returning(db.raw("id, name, last_name, email, profiles, created_at"));

  const [user] = await query;

  return user as CreateUserDTO;
}
