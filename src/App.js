import "./App.css";
import { app } from "./firebase"; // import your firebase app
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"; // method for getting
// User Authentication using firebase
import SignupPage from "./pages/sign-up.component";

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
      <SignupPage />
    </div>
  );
}

export default App;
