import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5555/users")
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {profiles.map((profile, index) => (
          <img
            key={index}
            width={"200px"}
            height={"200px"}
            src={profile.picture}
            alt={`user-${index}`}
          />
        ))}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
