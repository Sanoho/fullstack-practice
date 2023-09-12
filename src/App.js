import React, { useEffect, useState } from "react";
import "./App.css";

import Login from "./components/Login.js"


function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <div>
      <Login className="loginForm"/>
      </div>
      <header className="App-header">
        {profiles.map((profile) => (
          <div>
            <img
              key={profile.id}
              width={"200px"}
              height={"200px"}
              src={profile.picture}
              alt={profile.name}
            />
            <h5>{profile.username}</h5>
            <p>{profile.email}</p>
            <p>{profile.password}</p>
            
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
