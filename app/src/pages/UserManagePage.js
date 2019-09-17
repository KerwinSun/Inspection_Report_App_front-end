import React from "react";
import { Card } from "tabler-react";
import UserTable from "../components/UserTable";
import API from "../api";
import Loader from "react-loader-spinner";
import SiteWrapper from "../SiteWrapper";
import { Page, } from "tabler-react";
import CreateAccountCard from "../components/CreateAccountCard";
import "../components/Custom.css"

class UserManagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      empData: [],
      ogData: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    API.getUsers()
      .then(res => {
        this.setState({
          empData: res,
          ogData: res,
          isLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  filterOnChange = e => {
    let filter = e.target.value;
    let filteredUsers = this.state.ogData.filter(user => {
      return (
        user.firstName.toLowerCase().includes(filter) ||
        user.lastName.toLowerCase().includes(filter) ||
        user.email.toLowerCase().includes(filter) ||
        user.phone.toLowerCase().includes(filter) ||
        user.accountType.toLowerCase().includes(filter)
      );
    });
    this.setState({
      empData: filteredUsers
    });
  };

  createClicked = () => {
    console.log("can this work?");

  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Manage User">
          <Card>
            <Card.Header>
              <Card.Title>Users</Card.Title>
              <div style={{ flex: "1", padding: "5px", width: "100%" }}>
                <input
                  type="text"
                  name="title"
                  style={{ flex: "10", padding: "5px" }}
                  placeholder="Filter Users"
                  value={this.state.title}
                  onChange={this.filterOnChange}
                />
              </div>
              <button className="create" type="submit" onClick={this.createClicked}>
                Create Account
              </button>
            </Card.Header>
            {this.state.isLoaded ? (
              <UserTable
                users={this.state.empData}
                componentDidMount={this.componentDidMount}
              />
            ) : (
                <Card.Body>
                  <div className="btn-list text-center">
                    <Loader
                      type="ThreeDots"
                      color="#316CBE"
                      height={30}
                      width={30}
                    />
                  </div>
                </Card.Body>
              )}
          </Card>
        </Page.Content>
      </SiteWrapper>
    );
  }
}
export default UserManagePage;
