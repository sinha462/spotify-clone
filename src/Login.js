import React from "react";
import "./Login.css";
import Logo from "./spotify-logo.png";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src={Logo} alt=""
      />
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;