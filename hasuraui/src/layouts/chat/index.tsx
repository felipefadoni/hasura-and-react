import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  const isAuthenticated = () => false;

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
