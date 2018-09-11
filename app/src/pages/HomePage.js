import React, { Component } from "react";
import { Page, Grid, Card, Table, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
import API from "../api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wipHouses: [
        {
          id: 1,
          completed: false,
          address: "94  Hocking Street, Titirangi",
          date: "2018-08-28T00:00:00",
          constructionType: "old",
          categories: null
        },
        {
          id: 2,
          completed: false,
          address: "253  Jasmine Grove, Remuera",
          date: "2018-08-28T00:00:00",
          constructionType: "new ",
          categories: null
        }
      ],
      completedHouses: [
        {
          id: 1,
          completed: true,
          address: "177  Rigg Street, Stonefeilds",
          date: "2018-08-28T00:00:00",
          constructionType: "old",
          categories: null
        },
        {
          id: 2,
          completed: true,
          address: "143 Iris Grove, Avondale",
          date: "2018-08-28T00:00:00",
          constructionType: "new ",
          categories: null
        }
      ]
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
        this.setState({ wipHouses: wipHouses, completedHouses: completedHouses });
      })
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content title="Dashboard">
          <Grid.Row cards={true}>
            <Grid.Col>
              <Card>
                <Card.Header>
                  <Card.Title>Inspections in Process</Card.Title>
                </Card.Header>
                <Table cards={true} responsive={true} className="table-vcenter">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColHeader>Address</Table.ColHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.wipHouses.map(house => (
                      <Table.Row key={house.id}>
                        <Table.Col>
                          <a href={"/inspect/" + house.id}>{house.address}</a>
                        </Table.Col>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row cards={true}>
            <Grid.Col>
              <Card>
                <Card.Header>
                  <Card.Title>Completed Inspections</Card.Title>
                </Card.Header>
                <Table cards={true} responsive={true} className="table-vcenter">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColHeader>Address</Table.ColHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.completedHouses.map(house => (
                      <Table.Row key={house.id}>
                        <Table.Col>
                          <a href={"/inspect/" + house.id}>{house.address}</a>
                        </Table.Col>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
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
