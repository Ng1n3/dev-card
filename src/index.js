import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Olayinka Olumuyiwa</h1>
    <p>
      Backend-Developer. When not coding or learning a new technology, I like to
      play video games, watch Anime or just browse the web.
    </p>
    </div>
  );
}

function Avatar() {
  return (
      <img className="avatar" src="../public/profile3.jpg" alt="Profile pic"/>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill   name="Javascript" emoji="🚀" color="blue"/>
      <Skill name="HTML+CSS" emoji="💪" color="grey"/>
      <Skill name="NodeJs" emoji="👍" color="purple"/>
      <Skill name="MongoDB" emoji="🧧" color="gray"/>
      <Skill name="React" emoji="🧧" color="yellow"/>
    </div>
  )
}

function Skill(props) {
  console.log(props)
  const style = {
    backgroundColor: props.color
  }
  return (
    <div className="skill">
      <span style={style}>{props.name} {props.emoji}</span>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
