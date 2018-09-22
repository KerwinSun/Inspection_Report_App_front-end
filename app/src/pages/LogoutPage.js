import React from "react";
import api from "../api";
class LogoutPage extends React.Component {
  componentDidMount() {
    // deauthenticate user
    api.logout();
    // change the current URL to / after logout
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
      </div>
    );
  }
}
export default LogoutPage;
