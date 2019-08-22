import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from "../api";
import "../components/Custom.css";
import { Page, Grid, Card, Button, Form, Alert } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import { jsonHouse, realEstateOptions } from "../config";
// import store from "store";
import Loader from "react-loader-spinner";
import NumberFormat from "react-number-format";
import CreateAccountCard from "../components/CreateAccountCard";


class CreatePage extends Component {
    constructor(props) {
    super(props);
    this.state = {
      userId: -1,
      inspectionDate: "",
      address: "",
      // iName: "",
      cName: "",
      cHomePhone: "",
      cMobilePhone: "",
      cEmailAddress: "",
      cAddress: "",
      cRealEstate: "",
      isSubmitClicked: false,
      isLoaded: true,
      loggedIn: false
      // userId: -1,
      // cName: "",
      // cMobilePhone: "",
      // cEmailAddress: "",
      // inspectionDate: "",
      // isSubmitClicked: false,
      // isLoaded: true
    };
  }

  render() {
    return (
      <div className="login">

        <CreateAccountCard
          IsAdmin={true}
          OnCreateClicked={this.handleClick}
        />
          <Button.List align="center">
            {this.state.isSubmitClicked ? (
              !this.isInputValid() ? (
                <Alert type="danger" icon="alert-triangle">
                  Invalid information
                </Alert>
              ) : this.state.isLoaded ? null : (
                <div className="btn-list text-center">
                  <Loader
                    type="ThreeDots"
                    color="#316CBE"
                    height={30}
                    width={30}
                  />
                </div>
              )
            ) : null}
            <Button
              onClick={() => this.props.history.push("/home")}
              color="secondary"
            >
              Back home
            </Button>
            <Button
              onClick={() => {
                this.setState(
                  {
                    isSubmitClicked: true
                  },
                  () => {
                    if (this.isInputValid()) {
                      this.setState({isLoaded: false},() => this.handleClick());
                    }
                  }
                );
              }}
              color="secondary"
            >
              Submit details
            </Button>
          </Button.List>
    
        </div>
    );
  }
  isInputValid = () => {
    return (
      this.isEmail(this.state.cEmailAddress) &&
      this.state.cEmailAddress !== "" &&
      this.state.cAddress !== "" &&
      this.state.cName !== "" &&
      this.state.cHomePhone !== "" &&
      this.state.cMobilePhone !== "" &&
      this.state.address !== ""
    );
  };
  isEmail = email => {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  handleClick = () => {
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
  };
}

export default CreatePage;