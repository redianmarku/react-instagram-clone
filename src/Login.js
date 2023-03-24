import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login__left">
        <img
          src="https://i.imgur.com/XAkSDxb.png"
          alt="Instagram Screenshots"
        />
      </div>
      <div className="login__right">
        <div className="login__form">
          <img
            src="https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png"
            alt=""
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button>Log in</button>
        </div>
        <div className="login__more">
          <span>
            Don't have an account? <button>Sign Up</button>
          </span>
        </div>
      </div>
    </div>
  );
}

const Sigup = () => {
  return (
    <div className="signup">
      <div className="signup__form">
        <img
          src="https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png"
          alt=""
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button>Log in</button>
      </div>
      <div className="signup__more">
        <span>
          Don't have an account? <button>Sign Up</button>
        </span>
      </div>
    </div>
  );
};

export default Login;
