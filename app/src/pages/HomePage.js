import React, { Component } from "react";
import { Page, Grid, Card, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import API from "../api";
import HouseTable from "../components/HouseTable";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wipHouses: [],
      completedHouses: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    var id = 1; //Hard coded value for now.
    API.getPerson(id)
      .then(res => {
        var houses = res.inspected;
        var wipHouses = [];
        var completedHouses = [];
        houses.forEach(value => { value.house.completed ? completedHouses.push(value.house) : wipHouses.push(value.house) });
        this.setState({ wipHouses: wipHouses, completedHouses: completedHouses, isLoaded: true });
      })
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <SiteWrapper>
          <Page.Content title="Dashboard">
            <Grid.Row cards={true}>
              <Grid.Col>
                <Card>
                  <Card.Header>
                    <Card.Title>Inspections in Process</Card.Title>
                  </Card.Header>
                  <HouseTable houses={this.state.wipHouses}/>
                </Card>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row cards={true}>
              <Grid.Col>
                <Card>
                  <Card.Header>
                    <Card.Title>Completed Inspections</Card.Title>
                  </Card.Header>
                  <HouseTable houses={this.state.completedHouses}/>
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
    } else {
      return null;
    }
  }
}

export default Home;
