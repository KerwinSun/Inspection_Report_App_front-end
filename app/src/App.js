import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EmptyPage from "./pages/EmptyPage";
import CategoryPage from "./pages/CategoryPage";
import FeaturePage from "./pages/FeaturePage";
import InspectionDetailsPage from "./pages/InspectionDetailsPage";

import "tabler-react/dist/Tabler.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={EmptyPage} />
          <Route exact path="/new-inspection" component={InspectionDetailsPage} />
          <Route exact path={`/inspect/:id(\\d+)`} component={CategoryPage} />
          <Route exact path="/profile" component={EmptyPage} />
          <Route exact path="/register" component={EmptyPage} />
          <Route exact path="/feature" component={FeaturePage} />
          <Route exact path="/empty" component={EmptyPage} />
        </Switch>
      </Router>
    );  
  }
}

export default App;
