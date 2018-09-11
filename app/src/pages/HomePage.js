import React, { Component } from "react";
// import axios from 'axios';
import { Page, Grid, Card, Table, Button } from "tabler-react";
import SiteWrapper from "../SiteWrapper";
// import { server } from '../config';

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
    /*
    var id = 0; //set user id
    axios
      .get(server + "/user/" + id, { withCredentials: true })
      .then(res => {
        //handle response
        var houses = res.inspected;
        var wipHouses = [];
        var completedHouses = [];
        houses.map(value => { value.completed ? completedHouses.push(value) : wipHouses.push(value) });
        this.setState({ wipHouses: wipHouses, completedHouses: completedHouses });
      })
      .catch(res => {
        //handle response error
        console.log(res);
      })
      */
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
