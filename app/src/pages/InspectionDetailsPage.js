import React, { Component } from "react";
import { Page, Grid, Card, Button, Form } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import API from "../api";
import { jsonHouse, realEstateOptions } from "../config";

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
    };
  }

  componentDidMount() { 
    this.setState({ 
      userId: 1, //Hard coded user id for now.
      iName: 'Sam Hill', //hard coded inspector for now
      inspectionDate: new Date().toJSON(),
      cRealEstate: realEstateOptions[0] 
    })
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content title="New inspection">
          <Grid.Row cards={true}>
            <Grid.Col width={12} lg={6}>
              <Card title="Inspection Information">
                <Card.Body>
                  <Form.Group label="Inspector">
                    <Form.Input
                      readOnly
                      value={this.state.iName}
                    />
                  </Form.Group>
                  <Form.Group label="Date">
                    <Form.Input
                      readOnly
                      value={this.state.inspectionDate.substring(0,10)}
                    />
                  </Form.Group>
                  <Form.Group label="Address">
                    <Form.Input
                      placeholder="Address"
                      onChange={ e => this.setState({ address: e.target.value })}
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
                      onChange={ e => this.setState({ cName: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group label="Home Phone">
                    <Form.Input
                      placeholder="Phone Number"
                      onChange={ e => this.setState({ cHomePhone: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group label="Mobile Phone">
                    <Form.Input
                      placeholder="Mobile Number"
                      onChange={ e => this.setState({ cMobilePhone: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group label="Address">
                    <Form.Input
                      placeholder="Address"
                      onChange={ e => this.setState({ cAddress: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group label="Email Address">
                    <Form.Input
                      placeholder="Email Address"
                      onChange={ e => this.setState({ cEmailAddress: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Real Estate</Form.Label>
                    <Form.Select onChange={ e => this.setState({ cRealEstate: e.target.value })}>
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
            <Button
              onClick={() => this.props.history.push("/home")}
              color="secondary"
            >
              Back
            </Button>
            <Button onClick={() => this.handleClick()} color="secondary">
              Begin Inspection
            </Button>
          </Button.List>
        </Page.Content>
      </SiteWrapper>
    );
  }

  getDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return dd + "/" + mm + "/" + yyyy;
  };
  handleClick = () => {
    const { 
      userId, 
      inspectionDate, 
      address, 
      cName, 
      cHomePhone, 
      cMobilePhone, 
      cEmailAddress, 
      cAddress, 
      cRealEstate 
    } = this.state;

    var client = {};
    client.name = cName;
    client.homePhone = cHomePhone;
    client.mobilePhone = cMobilePhone;
    client.emailAddress = cEmailAddress;
    client.address = cAddress;
    client.realEstate = cRealEstate;

    var json = jsonHouse;
    var userObject = {
      "UserId": userId, 
    };
    json.inspectedBy = [userObject];
    json.inspectionDate = inspectionDate;
    json.address = address;
//    json.summonsedBy = client;

  API.postHouse(json)
    .then(id => {
      this.props.history.push("/inspect/" + id);
    })
    .catch(error => {})
  };
}

export default InspectionDetailsPage;
