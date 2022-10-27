import { env } from "@/config";
import jwt from "jsonwebtoken";

type User = {
  id?: string;
  name: string;
  last_name: string;
  email: string;
  profiles?: string;
  created_at: Date;
};

export default function generateJwt({
  id,
  name,
  last_name,
  email,
  profiles,
  created_at,
}: User): string {
  const jwtGeneration = jwt.sign(
    {
      id,
      name,
      last_name,
      email,
      profiles,
      created_at,
    },
    env.jwtSecret,
    {
      algorithm: "HS512",
      expiresIn: "1d",
    }
  );

  return jwtGeneration;
}
