import Modular from "modular-ui";
import globalStyle from "./style.js";

// The current value of the timer
let timer = 0;

// The structure of the app
function App() {
  return (
    <div style={globalStyle}>
      <div className="top-container">
        <h1>
          Welcome to Modular!
        </h1>

        <TimerComponent />
      </div>

      <img src="assets/modular-logo.svg" className="logo" />
    </div>
  );
}

function TimerComponent() {
  return (
    <h2>
      You've been on this page for <span $bind={{ innerHTML: "timer" }} /> seconds!
    </h2>
  );
}

// Building an element-tree and adding it to the dom
Modular.render(App, "#root");

// Updating the content on the page
function updateTimer() {
  Modular.setBinding("timer", timer);
  timer++;

  window.setTimeout(() => {
    window.requestAnimationFrame(updateTimer);
  }, 1000);
}

updateTimer();