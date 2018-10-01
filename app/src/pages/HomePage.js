import React, { Component } from "react";
import { Page, Grid, Card, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import API from "../api";
import HouseTable from "../components/HouseTable";
import Loader from "react-loader-spinner";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wipHouses: [],
      completedHouses: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    API.logout();
    var id = 1; //Hard coded value for now.
    API.getPerson(id).then(res => {
      var houses = res.inspected;
      var wipHouses = [];
      var completedHouses = [];
      houses.forEach(value => {
        value.house.completed
          ? completedHouses.push(value.house)
          : wipHouses.push(value.house);
      });
      this.setState({
        wipHouses: wipHouses,
        completedHouses: completedHouses,
        isLoaded: true
      });
    });
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Dashboard">
          <Grid.Row cards={true}>
            <Grid.Col>
              <Card>
                <Card.Header>
                  <Card.Title>Inspections in Progress</Card.Title>
                </Card.Header>
                {this.state.isLoaded ? (
                  <HouseTable houses={this.state.wipHouses} />
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
                  <HouseTable houses={this.state.completedHouses} />
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
              Begin New Inspection
            </Button>
          </Button.List>
        </Page.Content>
      </SiteWrapper>
    );
  }
}

export default Home;
