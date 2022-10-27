import { User } from "@/services/api/domain/user/create-user";

const localStorageHelper = {
  setUser: (user: User): void => {
    localStorage.setItem("@hasura-user", JSON.stringify(user));
  },
  getUser: (): User | null => {
    const user = localStorage.getItem("@hasura-user");
    return user ? (JSON.parse(user) as User) : null;
  },
  setToken: (token: string): void => {
    localStorage.setItem("@hasura-token", JSON.stringify(token));
  },
  getToken: (): string | null => {
    const token = localStorage.getItem("@hasura-token");
    return token ? token : null;
  },
};

export default localStorageHelper;
