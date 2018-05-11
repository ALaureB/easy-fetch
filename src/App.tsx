import * as React from "react";
import "./App.css";
import List from "./List";

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Making fetch easy</h1>
        </header>
        <List
          url="https://api.github.com/users/ALaureB/repos"
          // tslint:disable-next-line:jsx-no-lambda
          render={({ list, isLoading }) => (
            <div>
              <h2>Fetching my repos</h2>
              {isLoading && <h2>Loading...</h2>}

              <ul className="text-left">
                {list.length > 0 &&
                  list.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
              </ul>
            </div>
          )}
        />

        <List
          url="https://api.github.com/users/Facebook/repos"
          // tslint:disable-next-line:jsx-no-lambda
          render={({ list, isLoading }) => (
            <div>
              <h2>Fetching facebook repos</h2>
              {isLoading && <h2>Loading...</h2>}

              <ul className="text-left">
                {list.length > 0 &&
                  list.map(repo => (
                    <li key={repo.id}>
                      {repo.full_name}{" "}
                      <span className="ml-3 mr-1 font-weight-bold">URL</span>
                      {repo.url}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
