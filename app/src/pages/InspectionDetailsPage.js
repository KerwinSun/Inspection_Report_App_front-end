import React, { Component } from "react";
import { Page, Grid, Card, Button, Form } from "tabler-react";
import SiteWrapper from "../SiteWrapper";

class InspectionDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Smith",
      homePhone: "(0x) xxx xxxx",
      mobilePhone: "(0xx) xxx xxxx",
      inspectorEmailAddress: "jsmith@gmail.com",
      inspectorAddress: "71 High Street, Auckland",
      inspectionDate: "xx/xx/xxxx"
    };
  }
  componentDidMount() {}
  render() {
    return (
      <SiteWrapper>
        <Page.Content title="New inspection">
          <Grid.Row cards={true}>
            <Grid.Col width={12} lg={6}>
              <Card title="Inspection Information">
                <Card.Body>
                  <Form.Group label="Date">
                    <Form.Input
                      name="inspection-date"
                      readOnly
                      value={this.state.inspectionDate}
                    />
                  </Form.Group>
                  <Form.Group label="Address">
                    <Form.Input
                      name="address-inspecting"
                      placeholder="Address"
                    />
                  </Form.Group>
                  <Form.Group label="Summonsed By">
                    <Form.Input name="summonsed-by" placeholder="Name" />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col width={12} lg={6}>
              <Card title="Inspector Details">
                <Card.Body>
                  <Form.Group label="Inspector">
                    <Form.Input
                      name="inspector"
                      readOnly
                      value={this.state.name}
                    />
                  </Form.Group>
                  <Form.Group label="Home Phone">
                    <Form.Input
                      name="home-phone"
                      readOnly
                      value={this.state.homePhone}
                    />
                  </Form.Group>
                  <Form.Group label="Mobile Phone">
                    <Form.Input
                      name="mobile-phone"
                      readOnly
                      value={this.state.mobilePhone}
                    />
                  </Form.Group>
                  <Form.Group label="Email Address">
                    <Form.Input
                      name="inspector-email"
                      readOnly
                      value={this.state.inspectorEmailAddress}
                    />
                  </Form.Group>
                  <Form.Group label="Address">
                    <Form.Input
                      name="inspector-address"
                      readOnly
                      value={this.state.inspectorAddress}
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Grid.Col>
          </Grid.Row>
          <Button.List align="center">
            <Button
              RootComponent="a"
              onClick={() =>
                this.props.history.push("/inspect/1")
              } /* TODO: change 1 to id from backend */
              color="secondary"
            >
              Begin Inspection
            </Button>
          </Button.List>
        </Page.Content>
      </SiteWrapper>
    );
  }
}

export default InspectionDetailsPage;
