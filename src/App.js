import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import colors from "./Themes/colors";

import MorningRoutine from "./Scenes/MorningRoutine/MorningRoutine";
import Done from "./Scenes/Done/Done";
import Dash from "./Scenes/Dash/Dash";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Router>
        <Switch>
          <Route exact path="/" component={MorningRoutine} />
          <Route exact path="/done" component={Done} />
          <Route exact path="/dash" component={Dash} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
