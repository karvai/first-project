import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="a">Home</a>
      <a href="a">News Feed</a>
      <a href="a">Message</a>
    </div>
  );
};

export default App;
