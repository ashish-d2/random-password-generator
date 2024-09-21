import "./App.css";
import Heading from "./components/heading/Heading";
import Display from "./components/display/Display";

function App() {
  return (
    <div className="App">
      <main>
        <Heading />
        <Display />
        {/*<Settings /> */}
      </main>
    </div>
  );
}

export default App;
