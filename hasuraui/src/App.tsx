import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

type User = {
  id: string;
  name: string;
  email: string;
};

const socket = io("http://localhost:3000", {
  reconnectionDelayMax: 10000,
  transports: ["websocket"],
});

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect((): any => {
    const getUsers = (message: any) => {
      setUsers(message.user as User[]);
    };
    socket.on("users", getUsers);
    return () => socket.off("users", getUsers);
  }, []);

  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Users</h5>
          <ul className="list-group">
            {users.map((user) => (
              <li className="list-group-item" key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
