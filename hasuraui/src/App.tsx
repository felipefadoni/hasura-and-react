import { gql, useSubscription } from "@apollo/client";
import "./App.css";

function App() {
  const { loading, error, data } = useSubscription(
    gql`
      subscription {
        user(order_by: { name: asc }) {
          id
          name
          email
        }
      }
    `
  );

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    console.error(error);
    return <span>Error!</span>;
  }

  return (
    <div className="App">
      <div className="card">
        {data.user.map((user: any) => (
          <div key={user.id}>
            {user.name} - {user.email}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
