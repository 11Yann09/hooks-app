import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Profile from "./components/useMemo/Profile";
import axios from "axios";

function App() {
  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  const goDark = () => {
    setDark(!dark);

    if (!dark) {
      document.body.classList.add("bg-secondary");
    } else {
      document.body.classList.remove("bg-secondary");
    }
  };

  const classBtnTheme = dark ? "btn-light" : "btn-dark";

  const textBtnTheme = dark ? "Theme clair" : "Theme sombre";

  const memoizedValue = useMemo(() => {
    console.log("je suis dans memoizedValue");
    return count > 10;
  }, [count]);

  return (
    <div>
      <h1 className="text-center">useMemo()</h1>

      {memoizedValue && (
        <div className="alert alert-danger" role="alert">
          STOP !!!
        </div>
      )}

      <button className="btn btn-info m-3" onClick={() => setCount(count + 1)}>
        Increment {count}
      </button>
      <button className={`float-end btn ${classBtnTheme} m-3`} onClick={goDark}>
        {textBtnTheme}
      </button>

      <Profile profile={profile} count={count} />
    </div>
  );
}

export default App;
