
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const [themeColor, setThemeColor] = useState('white');
  console.log('Raheel')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  const changeColor = (color) => {
    setThemeColor(color);
    document.body.style.backgroundColor = color;
    showAlert(`Theme color changed to ${color}`, "success");
  };
  return(
        <div>
          <Navbar
            title="TextUtils"
            mode={mode}
            toggleMode={toggleMode}
            colors={['#ff0000', '#00ff00', '#0000ff', '#ffa500', '#800080']}
            changeColor={changeColor}
          />
          <Alert alert={alert} />
          <div className="container">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </div>
        </div>
  );
}
export default App;







