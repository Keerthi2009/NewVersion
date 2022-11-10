import React, { Component, useEffect, useState } from "react";
import CacheBuster from "./CacheBuster";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }

        return (
          <div className="App">
            <header className="App-header">
              <h1>Cache Bustings </h1>
              <p>
                Bundle version : <code>v{global.appVersion}</code>
              </p>
              <button>click</button>
            </header>
          </div>
        );
      }}
    </CacheBuster>
  );
};

export default App;

// class App extends Component {
// axios.get()

//   render() {

//   }
// }

// export default App;
