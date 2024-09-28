import "./App.css";
import Heading from "./components/heading/Heading";
import Display from "./components/display/Display";
import Settings from "./components/settings/Settings";
import PasswordProvider from "./context/PasswordProvider";
import CopyProvider from "./context/CopyProvider";

function App() {
  return (
    <div className="App">
      <main>
        <PasswordProvider>
          <Heading />
          <CopyProvider>
            <Display />
          </CopyProvider>
          <Settings />
        </PasswordProvider>
      </main>
    </div>
  );
}

export default App;
