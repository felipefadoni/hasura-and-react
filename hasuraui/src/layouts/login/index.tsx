import { Outlet } from "react-router-dom";
import { LoginContextProvider } from "./context/provider";

export default function Login() {
  return (
    <LoginContextProvider>
      <Outlet />
    </LoginContextProvider>
  );
}
