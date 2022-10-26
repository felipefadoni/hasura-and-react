import { useContext } from "react";
import { LoginContext } from ".";

export const useLogin = () => {
  const context = useContext(LoginContext);

  if (context === undefined)
    throw new Error("useLogin must be used within a LoginProvider");

  return context;
};
