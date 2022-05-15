import "./App.css";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addUser, deleteUser, updateUsername} from "./features/Users";

function App() {
  const userList = useSelector((state) => state.users.value);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1> {user.name}</h1>
              <h2> {user.username}</h2>

              <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <button onClick={() => {
                dispatch(updateUsername({id:user.id, username:newUsername}))
              }}>Güncelle</button>
              <button
                onClick={() => {
                  dispatch(deleteUser({id: user.id}));
                }}
              >
                Personel Sil
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
