import { CreateUserDTO } from "@/dto/user";
import { encryptHash } from "@/shared";
import { AppError } from "@/shared/errors";
import generateJwt from "@/shared/generate-jwt";
import { createUserRepository } from "../repositories";

type Return = {
  token: string;
  user: CreateUserDTO;
};

type Props = {
  name: string;
  last_name: string;
  email: string;
  password: string;
};

export default async function createUserService({
  email,
  last_name,
  name,
  password,
}: Props): Promise<Return> {
  if (!email) throw new AppError("Email is required");
  if (!last_name) throw new AppError("Last name is required");
  if (!name) throw new AppError("Name is required");
  if (!password) throw new AppError("Password is required");

  const profiles = ["user"];

  const passWordEncrypt = encryptHash({ values: password });

  const user = await createUserRepository({
    email,
    last_name,
    name,
    password: passWordEncrypt,
    profiles,
  });

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
