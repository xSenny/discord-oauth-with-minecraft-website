import logo from './logo.svg';
import './App.css';
import {DiscordRedirectPage} from "./pages/DiscordRedirectPage";
import {BrowserRouter as Router, Routes as Switch, Route, Navigate} from "react-router-dom";
import React from "react";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {
  return (
      <Router>
          <Switch>
              <Route path={'/connect'} element={<DiscordRedirectPage />}></Route>
              <Route path={'/*'} element={<NotFoundPage />}></Route>
          </Switch>
      </Router>
  );
}

export default App;
