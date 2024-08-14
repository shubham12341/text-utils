import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been Enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been Disabled!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze..."
                  mode={mode}
                />
              }
            />
            <Route
              exact
              path="/home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze..."
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/contact" element={<ContactUs mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
