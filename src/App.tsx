import React from 'react';
import Home from './pages/home/Home';
import './App.css';
import 'decentraland-ui/lib/styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Balance from "./pages/balance/Balance";
import { Navbar, Page } from "decentraland-ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Page-story-container">
          <Navbar activePage="marketplace" />
          <Page>
            <Router>
            <Switch>
              <Route path="/balance">
                <Balance />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
          </Page>
        </div>
      </header>
    </div>
  );
}

export default App;
