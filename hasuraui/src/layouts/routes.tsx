import { Route, Routes } from "react-router-dom";
import Chat from "./chat";
import Home from "./chat/home";
import Login from "./login";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
