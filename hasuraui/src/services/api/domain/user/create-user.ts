import api from "../..";

export interface RootObject {
  body: Body;
  message: string;
  statusCode: number;
}

export interface Body {
  token: string;
  user: User;
}

export interface User {
  created_at: Date;
  email: string;
  last_name: string;
  name: string;
}

type Props = {
  name: string;
  last_name: string;
  email: string;
  password: string;
};

export default async function createUser({
  email,
  last_name,
  name,
  password,
}: Props): Promise<Body> {
  const { data } = await api.post<RootObject>("/user", {
    email,
    last_name,
    name,
    password,
  });

  return data.body;
}
