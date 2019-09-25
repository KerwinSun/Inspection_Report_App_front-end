import React from "react";
import { Table, Button } from "tabler-react";
import UserEditModal from "./UserEditModal";
import ChangePasswordModal from "./ChangePasswordModal"
import api from "../api";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showPwModal: false,
      id: null
    };
    this.togggleShowModal = this.togggleShowModal.bind(this);
    this.toggleShowPwModal = this.toggleShowPwModal.bind(this);
  }

  togggleShowModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  toggleShowPwModal = () => {
    this.setState(prevState => ({
      showPwModal: !prevState.showPwModal
    }));
  };

  editButtonClicked(buttonId) {
    this.setState({
      showModal: true,
      id: buttonId
    });
  }

  pwButtonClicked(buttonId) {
    this.setState({
      showPwModal: true,
      id: buttonId
    })
  }

  disableButtonClicked(user) {
    let userData = {
      id : user.id,
      firstName : user.firstName,
      lastName : user.lastName,
      phoneNumber : user.phoneNumber,
      emailAddress : user.emailAddress,
      password : user.password,
      accountType : user.accountType
    }
    api.disableAccount(userData)
      .then(res => {
        this.props.componentDidMount
      })
      .catch(error => {
        console.log(error);
      });
  }

  disableButton(user) {
    let button;
    if(user.isDisabled) {
      button = <Button color="success" onClick={() => this.disableButtonClicked(user)} id={user.id}>Enable</Button>
    } else {
      button = <Button color="danger" onClick={() => this.disableButtonClicked(user)} id={user.id}>Disable</Button>
    }
    return button;
  }

  render() {
    //User card can be stateless (functional component)
    return (
      <div>
        <Table>
          <Table.Header>
            <Table.ColHeader alignContent={"center"}>
              First Name
            </Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Last Name</Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Email</Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Phone</Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>
              Account Type
            </Table.ColHeader>
            <Table.ColHeader alignContent={"center"}>Action</Table.ColHeader>
          </Table.Header>
          <Table.Body>
            {this.props.users.map(user => (
              <Table.Row key={user.firstName}>
                <Table.Col alignContent={"center"}>{user.firstName}</Table.Col>
                <Table.Col alignContent={"center"}>{user.lastName}</Table.Col>
                <Table.Col alignContent={"center"}>{user.email}</Table.Col>
                <Table.Col alignContent={"center"}>{user.phone}</Table.Col>
                <Table.Col alignContent={"center"}>
                  {user.accountType}
                </Table.Col>
                <Table.Col alignContent={"center"}>
                  <Button.List align="center">
                    <Button
                      color="primary"
                      onClick={() => this.editButtonClicked(user.id)}
                      id={user.id}
                    >
                      Edit
                    </Button>
                    <Button
                      color="info"
                      onClick={() => this.pwButtonClicked(user.id)}
                      id={user.id}
                    >
                      Change Password
                    </Button>
                    {this.disableButton(user)}
                  </Button.List>
                </Table.Col> {}
                {this.state.showModal ? (
                  <UserEditModal
                    togggleShowModal={this.togggleShowModal}
                    user={this.props.users.find(x => x.id === this.state.id)}
                    componentDidMount={this.props.componentDidMount}
                  />
                ) : null}
                {this.state.showPwModal ? (
                  <ChangePasswordModal
                    toggleShowPwModal={this.toggleShowPwModal}
                    user={this.props.users.find(x=> x.id === this.state.id)}
                    componentDidMount={this.props.componentDidMount}
                  />
                ) : null}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default UserTable;
