import React, { Component } from "react";
import CreateAccountCard from "../components/CreateAccountCard";
// import { Redirect } from "react-router-dom";
// import api from "../api";
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
          IsAdmin={true} // default false - for client creation page
          SubmitClicked={this.handleClick}
          CancelClicked={this.cancelClick}
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
  handleClick = () => {
    console.log("handleClick called ('Submit' clicked)");
    // @@@@@@@
    // Replace this part with how we handle the information
    // @@@@@@@

    // const {
    //   userId,
    //   inspectionDate,
    //   address,
    //   cName,
    //   cHomePhone,
    //   cMobilePhone,
    //   cEmailAddress,
    //   cAddress,
    //   cRealEstate
    // } = this.state;

    // var client = {};
    // client.name = cName;
    // client.homePhone = cHomePhone;
    // client.mobilePhone = cMobilePhone;
    // client.emailAddress = cEmailAddress;
    // client.address = cAddress;
    // client.realEstate = cRealEstate;

    // var json = jsonHouse;
    // var userObject = {
    //   UserId: userId
    // };
    // json.inspectedBy = [userObject];
    // json.inspectionDate = inspectionDate;
    // json.address = address;
    // json.summonsedBy = client;

    // API.postHouse(json)
    //   .then(id => {
    //     this.setState({ isLoaded: true });
    //     this.props.history.push("/inspect/" + id);
    //   })
    //   .catch(error => {});
  }
  cancelClick = () => {
    console.log("cancelClick called ('Cancel' clicked)");
    this.props.history.push("/login")
  }
}

export default CreatePage;