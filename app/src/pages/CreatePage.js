import React, { Component } from "react";
import CreateAccountCard from "../components/CreateAccountCard";
import DialogBox from "../components/DialogBox";
import { Alert } from "tabler-react";
import API from "../api";


class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      showModal: false,
      errorMessage: "",
      showAlert: false
    };
  }

  render() {
    return (
      <div className="login">

        <CreateAccountCard
          IsAdmin={false} // default false - for client creation page
          SubmitClicked={this.handleClick}
          CancelClicked={this.cancelClick}
          ContainerStyle="client_create"
        />

        {this.state.showModal ? (
          <DialogBox
            togggleShowModal={this.togggleShowModal}
            dialogOkClick={this.dialogOkClick}
            title={this.state.errorMessage}
          />
        ) : null}

        {this.state.showAlert ? (
          <Alert type="danger" icon="alert-triangle">
            Account already registered
        </Alert>
        ) : null}
      </div>

    );
  }
  togggleShowModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  isInputValid = () => {
    return (
      this.isEmail(this.state.emailAddress) &&
      this.state.emailAddress !== "" &&
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.phoneNumber !== "" &&
      this.state.password !== "" &&
      this.state.confirmPassword !== ""
    );
  };

  isEmail = email => {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  dialogOkClick = () => {
    if (this.state.errorMessage === "Account Created.") {
      this.props.history.push("/login")
    } else {
      this.togggleShowModal();
    }
  }

  handleClick = (userInfo) => {

    let userData = {
      FirstName: userInfo.firstName,
      LastName: userInfo.lastName,
      Password: userInfo.password,
      Phone: userInfo.phoneNumber,
      Email: userInfo.emailAddress,
      AccountType: userInfo.accountType,
    };
    API.checkAccount(userInfo.emailAddress)
      .then(res => {
        this.setState({
          showAlert: false
        });
        API.createAccount(userData)
          .then(res => {
            if (res !== "User created failed") {
              this.setState({ errorMessage: "Account Created." })
            } else {
              this.setState({ errorMessage: "Account creation failed." })
            }
            this.setState({ showModal: true });
          })
          .catch(error => {
            this.setState({
              errorMessage: "Account creation failed.",
              showModal: true
            })
          })
      })
      .catch(error => {
        this.setState({
          showAlert: true
        });
      })
  }
  cancelClick = () => {
    this.props.history.push("/login")
  }
}

export default CreatePage;