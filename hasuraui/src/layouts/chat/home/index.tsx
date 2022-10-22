import getAllUser from "../../../services/socket/domain/user/get-all-users";

export default function Home() {
  const { users } = getAllUser();

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
