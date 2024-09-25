import "./App.css";
import Heading from "./components/heading/Heading";
import Display from "./components/display/Display";
import Settings from "./components/settings/Settings";
import PasswordProvider from "./context/PasswordProvider";

function App() {
  return (
    <div className="App">
      <main>
        <PasswordProvider>
          <Heading />
          <Display />
          <Settings />
        </PasswordProvider>
      </main>
    </div>
  );
}

export default App;
