import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";
import InspectionDetailsPage from "./pages/InspectionDetailsPage";
import CameraPage from "./pages/CameraPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import api from "./api";

import "tabler-react/dist/Tabler.css";
import "./App.css";

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      api.isUserAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

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
    this.setState({ loggedIn: api.isUserAuthenticated() });
  };

  render() {
    return (
      <Router history={hist} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact
            path="/login"
            render={props => (
              <LoginPage
                {...props}
                toggleAuthenticationStatus={this.toggleAuthenticationStatus}
              />
            )}
          />
          <Route exact path="/logout" component={LogoutPage} />
          <PrivateRoute
            exact
            path="/"
            component={HomePage}
            toggleAuthenticationStatus={this.toggleAuthenticationStatus}
          />
          <PrivateRoute
            exact
            path="/new-inspection"
            component={InspectionDetailsPage}
            toggleAuthenticationStatus={this.toggleAuthenticationStatus}
          />
          <PrivateRoute
            exact
            path={`/inspect/:id(\\d+)`}
            component={CategoryPage}
            toggleAuthenticationStatus={this.toggleAuthenticationStatus}
          />
          <PrivateRoute
            exact
            path="/profile"
            component={ProfilePage}
            toggleAuthenticationStatus={this.toggleAuthenticationStatus}
          />
          <PrivateRoute
            exact
            path={"/inspect/:id(\\d+)/images/:featureId(\\d+)"}
            component={CameraPage}
            toggleAuthenticationStatus={this.toggleAuthenticationStatus}
          />
          <PrivateRoute
            component={HomePage}
            toggleAuthenticationStatus={this.toggleAuthenticationStatus}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
