import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bugAdded, getUsers } from "./store/bugs";

function App() {
  const bugs = useSelector((state) => state.bugs);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(bugAdded("Bug 1"))}>Add bug</button>
    </div>
  );
}

export default App;
