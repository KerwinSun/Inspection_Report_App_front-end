import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";
import InspectionDetailsPage from "./pages/InspectionDetailsPage";
import CameraPage from "./pages/CameraPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import PrivateRoute from "./components/PrivateRoute";
import CreatePage from "./pages/CreatePage";
import API from "./api";

import "tabler-react/dist/Tabler.css";
import "./App.css";

const hist = createBrowserHistory();
class App extends Component {
  componentDidMount() {
    hist.listen((location, action) => this.onRouteChanged());

    // check if user is logged in on refresh
    this.toggleAuthenticationStatus();
  }

  onRouteChanged() {
    window.scrollTo(0, 0);
  }

  toggleAuthenticationStatus = () => {
    // check authenticated status and toggle state based on that
    return API.isUserAuthenticated();
  };

  render() {
    return (
      <Router history={hist} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact
            path="/login"
            render={props => <LoginPage {...props} />}
          />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/create" component={CreatePage} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute
            exact
            path="/new-inspection"
            component={InspectionDetailsPage}
          />
          <PrivateRoute
            exact
            path={`/inspect/:id(\\d+)`}
            component={CategoryPage}
          />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute
            exact
            path={"/inspect/:id(\\d+)/images/:featureId(\\d+)"}
            component={CameraPage}
          />
          <PrivateRoute component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
