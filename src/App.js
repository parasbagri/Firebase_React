import "./App.css";
import { app } from "./firebase"; // import your firebase app
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"; // method for getting
// User Authentication using firebase

// create Auth's instance
const auth = getAuth(app);
function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "parasbagri@gmail.com",
      "paras@123"
    ).then((value) => console.log(value));
  };
  return (
    <div className="App">
      <h3>Sangu Firebase App</h3>
      <button onClick={signupUser}>Create User</button>
    </div>
  );
}

export default App;
