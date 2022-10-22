import { useEffect, useState } from "react";
import { socket } from "../..";

type User = {
  id: string;
  name: string;
  email: string;
};

export default function getAllUser() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect((): any => {
    const getUsers = (message: any) => setUsers(message.user as User[]);

    socket.on("users", getUsers);

    return () => socket.off("users", getUsers);
  }, []);

  return { users };
}
