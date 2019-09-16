import React, { Component } from "react";
import CreateAccountCard from "../components/CreateAccountCard";
import API from "../api";
// import { Redirect } from "react-router-dom";
// import "../components/Custom.css";
// import { Page, Grid, Card, Button, Form, Alert } from "tabler-react";
// import SiteWrapper from "../SiteWrapper";
// import { jsonHouse, realEstateOptions } from "../config";
// import store from "store";
// import Loader from "react-loader-spinner";
// import NumberFormat from "react-number-format";



class CreatePage extends Component {
  //   constructor(props) {
  //   super(props);
  //   this.state = {
  //     userId: -1,
  //     inspectionDate: "",
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     emailAddress: "",
  //     accountType: "",
  //     password: "",
  //     confirmPassword: "",
  //     isSubmitClicked: false,
  //     isLoaded: true,
  //     loggedIn: false
  //   };
  // }

  render() {
    return (
      <div className="login">

        <CreateAccountCard
          IsAdmin={false} // default false - for client creation page
          SubmitClicked={this.handleClick}
          CancelClicked={this.cancelClick}
          ContainerStyle="client_create"
        />
      </div>
    );
  }
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
  handleClick = (userInfo) => {
    console.log(userInfo)
    console.log("fuck this");
    let userData = {
      FirstName: userInfo.firstName,
      LastName: userInfo.lastName,
      Password: userInfo.password,
      Phone: userInfo.phoneNumber,
      Email: userInfo.emailAddress,
      AccountType: userInfo.accountType,
    };
    console.log(userData)
    API.createAccount(userData)
      .then(res => {
        this.props.history.push("/login")
      })
      .catch(error => {
        console.log(error);
      });
  }
  cancelClick = () => {
    console.log("cancelClick called ('Cancel' clicked)");
    this.props.history.push("/login")
  }
}

export default CreatePage;