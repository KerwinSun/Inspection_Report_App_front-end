import React, { Component } from "react";
import { Page, Grid, Card, Button, Form, Alert } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import API from "../api";
import { jsonHouse, realEstateOptions } from "../config";
// import store from "store";
import Loader from "react-loader-spinner";
import NumberFormat from "react-number-format";
import store from "store";
import DialogBox from "../components/DialogBox";

class InspectionDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: -1,
      inspectionDate: "",
      address: "",
      iName: "",
      cName: "",
      cHomePhone: "",
      cMobilePhone: "",
      cEmailAddress: "",
      cAddress: "",
      cRealEstate: "",
      isSubmitClicked: false,
      isLoaded: true,
      account: {},
      showAlert: false
    };
  }

  componentDidMount() {
    // let user = store.get("user");
    this.setState({
      userId: store.get("user").id,
      iName: "Jake Miller", //hard coded inspector for now\
      inspectionDate: new Date().toJSON(),
      cRealEstate: realEstateOptions[0],
      account: store.get("user")
    });
  }

  toggleAlertModal = () => {
    this.setState(prevState => ({
      showAlert: !prevState.showAlert
    }));
  };

  saveButtonClicked() {
    this.setState({
      showAlert: true,
    });
  }

  dialogOkClick = () => {
    this.setState(
      {
        isSubmitClicked: true
      },
      () => {
        if (this.isAddressValid()) {
          this.setState({ isLoaded: false }, () =>
            this.handleClick()
          );
        }
      }
    );
  }

  render() {
    if (this.state.account.accountType === "Client") {
      return (
        <SiteWrapper>
          <Page.Content title="New Inspection">
            <Grid.Row cards={true}>
              <Grid.Col width={12} lg={6}>
                <Card title="Inspection Information">
                  <Card.Body>
                    <Form.Group label="Date">
                      <Form.Input
                        readOnly
                        value={this.state.inspectionDate
                          .substring(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")}
                      />
                    </Form.Group>
                    <Form.Group label="Address">
                      <Form.Input
                        placeholder="Address"
                        onChange={e =>
                          this.setState({ address: e.target.value })
                        }
                        feedback={
                          this.state.address === ""
                            ? "Please input an address"
                            : null
                        }
                        invalid={
                          this.state.isSubmitClicked
                            ? this.state.address === ""
                            : null
                        }
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Grid.Col>
            </Grid.Row>
            <Button.List align="center">
              {this.state.isSubmitClicked ? (
                !this.isAddressValid() ? (
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
                Back
              </Button>
              <Button
                onClick={() => {
                  this.setState(
                    {
                      showAlert: true
                    }
                  );
                }}
                color="secondary"
              >
                Send Request
              </Button>
              {this.state.showAlert ? (
                  <DialogBox
                    toggleShowModal={this.toggleAlertModal}
                    addBackButton={true}
                    dialogCancelClick={this.toggleAlertModal}
                    dialogOkClick={this.dialogOkClick}
                    title="Are you sure you want to begin a new inspection?"
                  />
                ) : null}
            </Button.List>
          </Page.Content>
        </SiteWrapper>
      );
    } else {
      return (
        <SiteWrapper>
          <Page.Content title="New Inspection">
            <Grid.Row cards={true}>
              <Grid.Col width={12} lg={6}>
                <Card title="Inspection Information">
                  <Card.Body>
                    <Form.Group label="Inspector">
                      <Form.Input readOnly value={this.state.iName} />
                    </Form.Group>
                    <Form.Group label="Date">
                      <Form.Input
                        readOnly
                        value={this.state.inspectionDate
                          .substring(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")}
                      />
                    </Form.Group>
                    <Form.Group label="Address">
                      <Form.Input
                        placeholder="Address"
                        onChange={e =>
                          this.setState({ address: e.target.value })
                        }
                        feedback={
                          this.state.address === ""
                            ? "Please input an address"
                            : null
                        }
                        invalid={
                          this.state.isSubmitClicked
                            ? this.state.address === ""
                            : null
                        }
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col width={12} lg={6}>
                <Card title="Client Details">
                  <Card.Body>
                    <Form.Group label="Summonsed By">
                      <Form.Input
                        placeholder="Name"
                        onChange={e => this.setState({ cName: e.target.value })}
                        feedback={
                          this.state.cName === ""
                            ? "Please input the client's name"
                            : null
                        }
                        invalid={
                          this.state.isSubmitClicked
                            ? this.state.cName === ""
                            : null
                        }
                      />
                    </Form.Group>
                    <Form.Group label="Home Phone">
                      <NumberFormat
                        displayType={"input"}
                        customInput={Form.Input}
                        placeholder="Phone Number"
                        onChange={e =>
                          this.setState({ cHomePhone: e.target.value })
                        }
                        feedback={
                          this.state.cHomePhone === ""
                            ? "Please input the client's home number"
                            : null
                        }
                        invalid={
                          this.state.isSubmitClicked
                            ? this.state.cHomePhone === ""
                            : null
                        }
                      />
                    </Form.Group>
                    <Form.Group label="Mobile Phone">
                      <NumberFormat
                        placeholder="Mobile Number"
                        displayType={"input"}
                        customInput={Form.Input}
                        onChange={e =>
                          this.setState({ cMobilePhone: e.target.value })
                        }
                        feedback={
                          this.state.cMobilePhone === ""
                            ? "Please input the client's mobile number"
                            : null
                        }
                        invalid={
                          this.state.isSubmitClicked
                            ? this.state.cMobilePhone === ""
                            : null
                        }
                      />
                    </Form.Group>
                    <Form.Group label="Address">
                      <Form.Input
                        placeholder="Address"
                        onChange={e =>
                          this.setState({ cAddress: e.target.value })
                        }
                        feedback={
                          this.state.cAddress === ""
                            ? "Please input the client's address"
                            : null
                        }
                        invalid={
                          this.state.isSubmitClicked
                            ? this.state.cAddress === ""
                            : null
                        }
                      />
                    </Form.Group>
                    <Form.Group label="Email Address">
                      <Form.Input
                        placeholder="Email Address"
                        feedback={
                          this.state.cEmailAddress === ""
                            ? "Please input a valid email address"
                            : "Invalid email"
                        }
                        invalid={
                          this.state.isSubmitClicked
                            ? !this.isEmail(this.state.cEmailAddress)
                            : !(
                                this.isEmail(this.state.cEmailAddress) ||
                                this.state.cEmailAddress === ""
                              )
                        }
                        onBlur={e => {
                          this.setState({ cEmailAddress: e.target.value });
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Real Estate</Form.Label>
                      <Form.Select
                        onChange={e =>
                          this.setState({ cRealEstate: e.target.value })
                        }
                      >
                        {realEstateOptions.map((dynamicData, i) => (
                          <option key={dynamicData}>{dynamicData}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Grid.Col>
            </Grid.Row>
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
                Back
              </Button>
              <Button
                onClick={() => {
                  this.setState(
                    {
                      showAlert: true
                    }
                  );
                }}
                color="secondary"
              >
                Begin Inspection
              </Button>
              {this.state.showAlert ? (
                  <DialogBox
                    toggleShowModal={this.toggleAlertModal}
                    addBackButton={true}
                    dialogCancelClick={this.toggleAlertModal}
                    dialogOkClick={this.dialogOkClick}
                    title="Are you sure you want to begin a new inspection?"
                  />
                ) : null}
            </Button.List>
          </Page.Content>
        </SiteWrapper>
      );
    }
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
  isAddressValid = () => {
    return this.state.address !== "";
  };

  handleClick = () => {
    const {
      // userId,
      inspectionDate,
      address,
      cName,
      cHomePhone,
      cMobilePhone,
      // cEmailAddress,
      cAddress,
      cRealEstate
    } = this.state;

    var client = {};
    client.name = cName;
    client.homePhone = cHomePhone;
    client.mobilePhone = cMobilePhone;
    client.emailAddress = store.get("user").email;
    client.address = cAddress;
    client.realEstate = cRealEstate;

    var json = jsonHouse;
    // var userObject = {
    //   UserId: userId
    // };
    json.inspectedBy = null;
    json.inspectionDate = inspectionDate;
    json.address = address;
    json.summonsedBy = client;

    API.postHouse(json)
      .then(id => {
        this.setState({ isLoaded: true });
        // this.props.history.push("/inspect/" + id);
        this.props.history.push("/home");
      })
      .catch(error => {});
  };
}

export default InspectionDetailsPage;
