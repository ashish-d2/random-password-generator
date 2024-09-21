import "./App.css";
import Heading from "./components/heading/Heading";
import Display from "./components/display/Display";
import Settings from "./components/settings/Settings";

function App() {
  return (
    <div className="App">
      <main>
        <Heading />
        <Display />
        <Settings />
      </main>
    </div>
  );
}

export default App;
