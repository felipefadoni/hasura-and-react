import { CreateUserDTO } from "@/dto/user";
import { encryptHash } from "@/shared";
import { AppError } from "@/shared/errors";
import generateJwt from "@/shared/generate-jwt";
import { getUserRepository } from "../repositories";

type Return = {
  token: string;
  user: CreateUserDTO;
};

type Props = {
  email: string;
  password: string;
};

export default async function authenticateUserService({
  email,
  password,
}: Props): Promise<Return> {
  if (!email) throw new AppError("Email is required");
  if (!password) throw new AppError("Password is required");

  const passWordEncrypt = encryptHash({ values: password });

  const user = await getUserRepository({ email, password: passWordEncrypt });

  if (!user) throw new AppError("User not found");

  const token = generateJwt({
    created_at: user.created_at,
    email: user.email,
    id: user.id,
    last_name: user.last_name,
    name: user.name,
    profiles: user.profiles,
  });

  delete user.id;
  delete user.profiles;

  return { user, token };
}
