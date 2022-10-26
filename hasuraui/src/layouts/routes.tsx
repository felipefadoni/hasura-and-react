import { Route, Routes } from "react-router-dom";
import Chat from "./chat";
import Home from "./chat/home";
import Login from "./login";
import LoginPage from "./login/pages/login";
import NewUserPage from "./login/pages/new-user";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route index element={<LoginPage />} />
        <Route path="sign-up-now" element={<NewUserPage />} />
      </Route>
      <Route path="/chat" element={<Chat />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
