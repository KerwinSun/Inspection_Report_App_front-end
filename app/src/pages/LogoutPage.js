import React from "react";
import API from "../api";
class LogoutPage extends React.Component {
  componentDidMount() {
    // deauthenticate user
    API.logout().then(() => {
      this.props.history.push("/login");
    });

    // change the current URL to / after logout
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
