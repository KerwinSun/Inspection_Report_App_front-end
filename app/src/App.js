import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EmptyPage from "./pages/EmptyPage";
import CategoryPage from "./pages/CategoryPage";

import "tabler-react/dist/Tabler.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={EmptyPage} />
        <Route exact path="/new-inspection" component={EmptyPage} />
        <Route exact path={`/inspect/:id(\\d+)`} component={CategoryPage} />
        <Route exact path="/profile" component={EmptyPage} />
        <Route exact path="/register" component={EmptyPage} />
        <Route exact path="/empty" component={EmptyPage} />
      </Switch>
    </Router>
  );
}

export default App;
