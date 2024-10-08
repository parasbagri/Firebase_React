import { app } from "./firebase";
import "./App.css";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);
function App() {
  const putData = () => {
    set(ref(db, "user/paras"), {
      id: 1,
      name: "Paras",
      age: 24,
      registance: "india",
      imageUrl: " ",
    });
  };

  return (
    <div className="App">
      <h3>Sangu Firebase App</h3>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
