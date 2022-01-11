import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("black");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <TextForm mode={Mode} />
            </Route>
          </Switch>
        </div>
      </Router> */}

      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm mode={Mode} />
      </div>
    </>
  );
}

export default App;
