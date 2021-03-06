import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact name="home" path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
