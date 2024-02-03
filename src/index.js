import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div>
        <Intro />
        {/* <SkillList /> */}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <p>
      Backend-Developer. When not coding or learning a new technology, I like to
      play video games, watch Anime or just browse the web.
    </p>
  );
}

function Avatar() {
  return (
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fstevano-ferdinand&psig=AOvVaw1jw6hzrz0mMQfXvB_Ak-jk&ust=1707063411810000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDmkfTIj4QDFQAAAAAdAAAAABAx" alt="Profile pic"/>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      <SkillList name="Javascript" emoji="🚀"/>
    </div>
  )
}

function Skill(props) {

}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
