import React from "react";
import "./App.css";
import { containerStyle, headerStyle } from "./constant/styles";
import Login from "./features/Login";

function App() {
  const [showLoginComponent, setShowLoginComponent] = React.useState(false);
  const name = "Devanshi";

  return (
    <div id="container" style={{ ...containerStyle }}>
      <header style={headerStyle}>
        <h1>{`hello ${name}`}</h1>
        <div>
          <button
            onClick={() => setShowLoginComponent(true)}
            type="submit"
            style={{
              marginRight: 10,
            }}
          >
            Login
          </button>
          <button type="submit">SignUP</button>
        </div>
      </header>
      {showLoginComponent && <Login />}
    </div>
  );
}

export default App;
