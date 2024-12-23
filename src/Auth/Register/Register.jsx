import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [isToggle, setIsToggle] = useState("SAAS");
  const handleButton = (view) => {
    setIsToggle(view);
  };
  return (
    <>
      <div className="register__div">
        <div className="reg__divs">
          <div className="reg__div">
            <div className="reg__logo">
              <div className="logo__img">
                <img src="./img/subtract2.png" />
              </div>
              <h5 className="h5">CodeAnt Ai</h5>
            </div>
            <h4 className="h4">Welcome to CodeAnt AI</h4>
            <div className="button">
              <button
                className={`btns ${isToggle === "SAAS" ? "active" : ""}`}
                onClick={() => handleButton("SAAS")}
              >
                SAAS
              </button>
              <button
                className={`btns ${isToggle === "Self Hosted" ? "active" : ""}`}
                onClick={() => handleButton("Self Hosted")}
              >
                Self hosted
              </button>
            </div>
          </div>
          {isToggle === "SAAS" && (
            <div className="login__alternatives">
              <Link className="login__icon" to="dashboard">
                <img src="./img/icon5.png" alt="GitHub" />
                <span>Sign in with GitHub</span>
              </Link>
              <Link className="login__icon" to="dashboard">
                <img src="./img/icon4.png" alt="Bitbucket" />
                <span>Sign in with Bitbucket</span>
              </Link>
              <Link className="login__icon" to="dashboard">
                <img src="./img/icon3.png" alt="Azure" />
                <span>Sign in with Azure</span>
              </Link>
              <Link className="login__icon" to="dashboard">
                <img src="./img/icon2.png" alt="GitLab" />
                <span>Sign in with GitLab</span>
              </Link>
            </div>
          )}

          {isToggle === "Self Hosted" && (
            <div className="login__alternatives">
              <div className="login__icon">
                <img src="./img/icon2.png" alt="Self-hosted GitLab" />
                <span>Self-hosted GitLab</span>
              </div>
              <div className="login__icon">
                <img src="./img/icon1.png" alt="SSO" />
                <span>Sign in with SSO</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="privacy">
        By signing up you agree to the <span>Privacy Policy</span>.
      </p>
    </>
  );
};

export default Register;
