import "./App.css";
import { Skills } from "./components/skills/skill";

function App() {
  return (
    <div className="App">
      <Skills skills={["java", "go", "HTML"]} />
    </div>
  );
}

export default App;
