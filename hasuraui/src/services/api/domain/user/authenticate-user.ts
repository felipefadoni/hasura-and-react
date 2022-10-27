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
  email: string;
  password: string;
};

export default async function authenticateUser({
  email,
  password,
}: Props): Promise<Body> {
  const { data } = await api.post<RootObject>("/user/authenticate", {
    email,
    password,
  });

  return data.body;
}
