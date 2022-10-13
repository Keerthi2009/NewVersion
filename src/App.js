import React, { Component } from "react";
import CacheBuster from "./CacheBuster";
import "./App.css";

class App extends Component {
  render() {
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
                {console.log(global.appVersion)}
                <p>
                  Bundle version :{" "}
                  <code>
                    v{global.appVersion}
                    {Math.random()}:abb
                  </code>
                </p>
              </header>
            </div>
          );
        }}
      </CacheBuster>
    );
  }
}

export default App;
