import React, { Component } from "react";
import CreateAccountCard from "../components/CreateAccountCard";
import DialogBox from "../components/DialogBox"
import AdminCreateUserModal from "../components/AdminCreateUserModal"
import API from "../api";


class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      empData: [],
      ogData: [],
      showModal: false,
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
                  dialogOkClick = {this.dialogOkClick}
                  title={"Account Created."}
                  /> 
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
    
    this.props.history.push("/login")
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
    API.createAccount(userData)
      .then(res => {
       
        this.setState({
          showModal: true,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  cancelClick = () => {
    this.props.history.push("/login")
  }
}

export default CreatePage;