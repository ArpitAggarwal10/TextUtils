import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setdarkMode] = useState("light")
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const handleDarkMode = () => {
    if (darkMode === "light") {
      setdarkMode("dark")
      document.body.style.backgroundColor = "#01203f"
      showAlert("Dark Mode Has Been Enabled", "Success")
    } else {
      setdarkMode("light")
      document.body.style.backgroundColor = "White"
      showAlert("Light Mode Has Been Enabled", "Success")
    }
  }

  return (

    <div className="App" >

      <Navbar title="TextUtils" mode={darkMode} toggleMode={handleDarkMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <TextForm showalert={showAlert} alert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Copy The Text " mode={darkMode} />
      </div>
    </div>
  );
}

export default App;