import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import colors from './Themes/colors';

import MorningRoutine from './Scenes/MorningRoutine/MorningRoutine';
import Dash from './Scenes/Dash/Dash';
import Journal from './Scenes/Journal/Journal';
import { MorningRoutineContextProvider } from './lib/Context/MorningRoutineContext';
import { TimerStackContextProvider } from './lib/Context/timerStackContext';
import { HabitContextProvider } from './lib/Context/HabitContext';

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Router>
        <MorningRoutineContextProvider>
          <TimerStackContextProvider>
            <HabitContextProvider>
              <Switch>
                <Route exact path="/" component={MorningRoutine} />
                <Route exact path="/dash" component={Dash} />
                <Route exact path="/journal" component={Journal} />
              </Switch>
            </HabitContextProvider>
          </TimerStackContextProvider>
        </MorningRoutineContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
