import { useUser } from "@/context/user/hook";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  const { state } = useUser();

  const isAuthenticated = () => !!state.token;

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
