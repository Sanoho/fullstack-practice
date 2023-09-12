import React from "react";

function Login() {
  return (
    <div>
      <form className="loginForm">
        Login Username
        <input style={{ width: "300px", height: "30px" }}></input>
        <input style={{ width: "300px", height: "30px" }}></input>
        <button style={{ width: "100px", height: "30px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
