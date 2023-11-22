import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../../Assets/Images/hero_img.jpg";
import { auth } from "../../Firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { appContext } from "../../Context/ContextConfig";

const Login = () => {
  const { setUser } = useContext(appContext);
  const [loginEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, password)
      .then((userCredential) => {
        const useremail = userCredential.user.email;
        let userName = useremail.substring(0, 6);
        setUser(userName);
        console.log(userName, useremail);
        navigate("/TaskManager");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <>
      <div className="logincontainer">
        <h4 className="logolo">Sign In </h4>
        <div className="form-containerbox">
          <form className="formbox" onSubmit={handleLogin}>
            <img src={img} className="imgpic" alt="book" />
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="form--input"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="form--input"
            />
            <button className="form--login" type="submit">
              Login
            </button>
            <p>
              Don't have a Account{" "}
              <Link to="/SignupPage" className="Register2">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
