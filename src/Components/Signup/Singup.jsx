import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { auth } from "../../Firebase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");

  const navigate = useNavigate()

  const handleSumbit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          navigate("/loginPage")
        })
        .catch((e) => {
          console.log(console.log(e.message));
        });
    } else {
      alert("passwords doesnt match please cheeck");
    }
  };

  return (
    <>
      <div className="signup">
        <h4 className="logolo">Sign Up</h4>
        <div className="form-container">
          <form className="form" onSubmit={handleSumbit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="form--input"
              autoComplete="username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form--input"
              autoComplete="new-password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              placeholder="Confirm password"
              className="form--input"
              autoComplete="new-password"
            />
            <button className="form--submit" type="submit">
              {" "}
              Sign up
            </button>
            <p className="already">
              Already have a Account ?{" "}
              <Link className="login2" to="/LoginPage">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
