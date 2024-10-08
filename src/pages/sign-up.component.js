import React, { useState } from "react";
import { Fragment } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // firebase se auth method import kiya
import { app } from "../firebase.js";
const auth = getAuth(app); // apne app ka instance create kiya jo firebase me bana hai app usko or app ko import kiya firebase wala

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("User created")
    );
  };
  return (
    <Fragment>
      <div className="signup-page">
        <label className="lable">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Email"
          required
        />
        <label className="lable">password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <button onClick={createUser}>Sign Up</button>
      </div>
    </Fragment>
  );
};

export default SignupPage;
