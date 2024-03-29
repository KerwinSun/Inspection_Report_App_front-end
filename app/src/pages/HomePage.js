import React, { Component } from "react";
import { Page, Grid, Card, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import API from "../api";
import HouseTable from "../components/HouseTable";
import Loader from "react-loader-spinner";
import store from "store";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wipHouses: [],
      completedHouses: [],
      isLoaded: false,
      account: {},
      houseState: ""
    };
  }

  componentDidMount() {
    var id = store.get("user").id;
    var email = store.get("user").email;
    if (store.get("user").accountType === "Client") {
      API.getHouses()
        .then(houses => {
          var pendingHouses = [];
          var wipHouses = [];
          var completedHouses = [];
          houses.forEach(house => {
            if (house.summonsedBy.emailAddress === email) {
              if (house.inspectedBy.length === 0) {
                pendingHouses.push(house);
              } else {
                house.completed
                  ? completedHouses.push(house)
                  : wipHouses.push(house);
              }
            }
          });
          this.setState({
            pendingHouses: pendingHouses,
            wipHouses: wipHouses,
            completedHouses: completedHouses,
            isLoaded: true,
            account: store.get("user")
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (store.get("user").accountType === "Inspector") {
      API.getPerson(id)
        .then(res => {
          var houses = res.inspected;
          var wipHouses = [];
          var completedHouses = [];

          houses.forEach(value => {
            value.house.completed
              ? completedHouses.push(value.house)
              : wipHouses.push(value.house);
          });
          API.getHouses().then(houses => {
            var pendingHouses = [];
            houses.forEach(house => {
              if (house.inspectedBy.length === 0) {
                pendingHouses.push(house);
              }
            });
            this.setState({
              pendingHouses: pendingHouses,
              wipHouses: wipHouses,
              completedHouses: completedHouses,
              isLoaded: true,
              account: res
            });
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (store.get("user").accountType === "Admin") {
      API.getHouses().then(houses => {
        var pendingHouses = [];
        var wipHouses = [];
        var completedHouses = [];
        houses.forEach(house => {
          if (house.inspectedBy.length === 0) {
            pendingHouses.push(house);
          } else {
            house.completed
              ? completedHouses.push(house)
              : wipHouses.push(house);
          }
        });
        this.setState({
          pendingHouses: pendingHouses,
          wipHouses: wipHouses,
          completedHouses: completedHouses,
          isLoaded: true,
          account: store.get("user")
        })
      })
    }
  }

  render() {
    if (this.state.account.accountType === "Client") {
      return (
        <SiteWrapper>
          <Page.Content title="Dashboard">
            <Grid.Row cards={true}>
              <Grid.Col>
                <Card>
                  <Card.Header>
                    <Card.Title>Pending Inspections</Card.Title>
                  </Card.Header>
                  {this.state.isLoaded ? (
                    <HouseTable houses={this.state.pendingHouses}
                    accountType={this.state.account.accountType}
                    houseState="pending"/>
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
              </Grid.Col>
            </Grid.Row>
            <Grid.Row cards={true}>
              <Grid.Col>
                <Card>
                  <Card.Header>
                    <Card.Title>In Progress Inspections</Card.Title>
                  </Card.Header>
                  {this.state.isLoaded ? (
                    <HouseTable 
                    houses={this.state.wipHouses}
                    accountType={this.state.account.accountType}
                    houseState="inprogress"
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
              </Grid.Col>
            </Grid.Row>
            <Grid.Row cards={true}>
              <Grid.Col>
                <Card>
                  <Card.Header>
                    <Card.Title>Completed Inspections</Card.Title>
                  </Card.Header>
                  {this.state.isLoaded ? (
                    <HouseTable houses={this.state.completedHouses}
                    accountType={this.state.account.accountType} 
                    houseState="completed"/>
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
              </Grid.Col>
            </Grid.Row>
            <Button.List align="center">
              <Button
                RootComponent="a"
                onClick={() => this.props.history.push("/new-inspection")}
                color="secondary"
              >
                Request Inspection
              </Button>
            </Button.List>
          </Page.Content>
        </SiteWrapper>
      );
    } else {
      return (
        <SiteWrapper>
          <Page.Content title="Dashboard">
            <Grid.Row cards={true}>
              <Grid.Col>
                <Card>
                  <Card.Header>
                    <Card.Title>Available Inspections</Card.Title>
                  </Card.Header>
                  {this.state.isLoaded ? (
                    <HouseTable houses={this.state.pendingHouses} 
                    accountType={this.state.account.accountType} 
                    houseState="pending"/>
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
              </Grid.Col>
            </Grid.Row>
            <Grid.Row cards={true}>
              <Grid.Col>
                <Card>
                  <Card.Header>
                    <Card.Title>Inspections in Progress</Card.Title>
                  </Card.Header>
                  {this.state.isLoaded ? (
                    <HouseTable houses={this.state.wipHouses}
                    accountType={this.state.account.accountType} 
                    houseState="inprogress"/>
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
              </Grid.Col>
            </Grid.Row>
            <Grid.Row cards={true}>
              <Grid.Col>
                <Card>
                  <Card.Header>
                    <Card.Title>Completed Inspections</Card.Title>
                  </Card.Header>
                  {this.state.isLoaded ? (
                    <HouseTable houses={this.state.completedHouses}
                    accountType={this.state.account.accountType} 
                    houseState="completed"/>
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
              </Grid.Col>
            </Grid.Row>
          </Page.Content>
        </SiteWrapper>
      );
    }
  }
}

export default Home;
