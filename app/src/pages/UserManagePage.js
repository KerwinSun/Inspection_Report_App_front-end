import React from "react";
import { Card } from "tabler-react";
import UserTable from "../components/UserTable";
import API from "../api";
import Loader from "react-loader-spinner";
import SiteWrapper from "../SiteWrapper";
import { Page, } from "tabler-react";
import AdminCreateUserModal from "../components/AdminCreateUserModal";
import "../components/Custom.css"

class UserManagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      empData: [],
      ogData: [],
      showModal: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.togggleShowModal = this.togggleShowModal.bind(this);
  }

  componentDidMount() {
    API.getUsers()
      .then(res => {
        this.setState({
          empData: res,
          ogData: res,
          isLoaded: true,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  togggleShowModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

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

  createUserClicked = () => {
    this.setState({
      showModal: true,
    });
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
              <button className="create" type="submit" onClick={()=>this.createUserClicked()}>
                Create Account
              </button>
            </Card.Header>
            {this.state.showModal ? (
                  <AdminCreateUserModal
                    togggleShowModal={this.togggleShowModal}
                    componentDidMount={this.componentDidMount}
                  />
                ) : null}
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
