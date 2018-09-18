import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage";
import EmptyPage from "./pages/EmptyPage";
import CategoryPage from "./pages/CategoryPage";
import InspectionDetailsPage from "./pages/InspectionDetailsPage";
import CameraPage from "./pages/CameraPage";
import GalleryPage from "./pages/GalleryPage";

import "tabler-react/dist/Tabler.css";
import "./App.css";

const hist = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    hist.listen((location, action) => this.onRouteChanged());

    // TODO: Add authentication check here
  }

  onRouteChanged() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Router history={hist} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={EmptyPage} />
          <Route
            exact
            path="/new-inspection"
            component={InspectionDetailsPage}
          />
          <Route exact path={`/inspect/:id(\\d+)`} component={CategoryPage} />
          <Route exact path="/profile" component={EmptyPage} />
          <Route exact path="/register" component={EmptyPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/empty" component={EmptyPage} />
          <Route exact path={'/inspect/:id(\\d+)/images/:featureId(\\d+)'} component={CameraPage} />
          <Route component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
